import os
import csv
from datetime import date, datetime
BASE_PATH = r"C:\Users\ibastos\Gertec\NF-e Departamento Fiscal - Fiscal\Documentos"

FILIAIS = {
    "GB_01": os.path.join(BASE_PATH, r"1.GERTEC\2026\outros-documentos\0001-76_gertec-brasil-ios"),
    "GB_02": os.path.join(BASE_PATH, r"1.GERTEC\2026\outros-documentos\0002-57_gertec-brasil-sao"),
    "GB_03": os.path.join(BASE_PATH, r"1.GERTEC\2026\outros-documentos\0003-38_gertec-brasil-mao"),
    "GB_05": os.path.join(BASE_PATH, r"1.GERTEC\2026\outros-documentos\0004-19_gertec-brasil-dia"),
    "GB_06": os.path.join(BASE_PATH, r"1.GERTEC\2026\outros-documentos\0005-08_gertec-brasil-dia"),
    "GERUN": os.path.join(BASE_PATH, r"2.GERUN\outros-documentos\2026"),
    "GER7":  os.path.join(BASE_PATH, r"3.GER7\outros-documentos\2026"),
    "MOBBUY": os.path.join(BASE_PATH, r"4.MOBBUY\outros-documentos\2026"),
    "GTC": os.path.join(BASE_PATH, r"5.GTC\Documentos\outros-documentos\2026"),
}

def pasta_mes_atual() -> str:
    """Retorna o padrão MMAA do mês atual, ex: '0826' para agosto/2026."""
    hoje = date.today()
    return f"{hoje.month:02d}{hoje.year % 100:02d}"


def construir_servicos_from_filiais(filiais: dict) -> dict:
    servicos = {}
    for filial, caminho in filiais.items():
        if isinstance(caminho, str) and 'outros-documentos' in caminho:
            servicos[filial] = caminho.replace('outros-documentos', 'nf-serviços')
        else:
            servicos[filial] = caminho
    return servicos


def caminho_servico_mes(base_nf_servicos_ano: str, mmaa: str) -> str:
    """Monta o caminho .../nf-servicos/2026/MMAA/MMAA.Para-Registro dinamicamente."""
    return os.path.join(base_nf_servicos_ano, mmaa, f"{mmaa}.Para-Registro")


SERVICOS = construir_servicos_from_filiais(FILIAIS)

# ATENÇÃO: GERUN, GER7 e MOBBUY têm estrutura de pastas diferente das demais
# filiais (pasta MMAA já embutida no caminho, com nome de subpasta variando
# "nf-servicos" / "nf-serviços"). Antes isso estava fixo em "0826" e por isso
# não acompanhava a virada do mês. Agora é recalculado a cada execução.
_MMAA_ATUAL = pasta_mes_atual()
SERVICOS.update({
    "GERUN": caminho_servico_mes(
        os.path.join(BASE_PATH, r"2.GERUN\nf-servicos\2026"), _MMAA_ATUAL),
    "GER7": caminho_servico_mes(
        os.path.join(BASE_PATH, r"3.GER7\nf-servicos\2026"), _MMAA_ATUAL),
    "MOBBUY": caminho_servico_mes(
        os.path.join(BASE_PATH, r"4.MOBBUY\nf-serviços\2026"), _MMAA_ATUAL),
})


def encontrar_pasta_para_registro(caminho_base: str, mmaa: str) -> str | None:
    try:
        caminho_lower = caminho_base.lower()
        if mmaa in caminho_lower and 'para' in caminho_lower and 'registro' in caminho_lower and os.path.isdir(caminho_base):
            return caminho_base
    except Exception:
        pass

    if not os.path.isdir(caminho_base):
        return None
    
    # Procura pela pasta MMAA dentro do caminho base
    pasta_mmaa = os.path.join(caminho_base, mmaa)
    if os.path.isdir(pasta_mmaa):
        # Dentro da pasta MMAA, procura por qualquer diretório cujo nome contenha
        # as palavras 'para' e 'registro' (case-insensitive).
        for nome in os.listdir(pasta_mmaa):
            nome_l = nome.lower()
            if 'para' in nome_l and 'registro' in nome_l:
                caminho_completo = os.path.join(pasta_mmaa, nome)
                if os.path.isdir(caminho_completo):
                    return caminho_completo

    try:
        for candidato in os.listdir(caminho_base):
            caminho_cand = os.path.join(caminho_base, candidato)
            if not os.path.isdir(caminho_cand):
                continue
            for sub in os.listdir(caminho_cand):
                sub_l = sub.lower()
                if 'para' in sub_l and 'registro' in sub_l:
                    caminho_completo = os.path.join(caminho_cand, sub)
                    if os.path.isdir(caminho_completo):
                        return caminho_completo
    except Exception:
        pass

    return None


def contar_arquivos(caminho_pasta: str) -> int:
    total = 0
    for nome in os.listdir(caminho_pasta):
        caminho_completo = os.path.join(caminho_pasta, nome)
        if os.path.isfile(caminho_completo):
            total += 1
    return total


def listar_arquivos(caminho_pasta: str) -> list:
    arquivos = []
    for nome in os.listdir(caminho_pasta):
        caminho_completo = os.path.join(caminho_pasta, nome)
        if os.path.isfile(caminho_completo):
            arquivos.append(caminho_completo)
    return arquivos


def data_criacao_arquivo(caminho_arquivo: str) -> str:
    """Data em que o arquivo foi criado/copiado para a pasta (fallback: data de modificação)."""
    try:
        ts = os.path.getctime(caminho_arquivo)
    except Exception:
        ts = os.path.getmtime(caminho_arquivo)
    return datetime.fromtimestamp(ts).strftime('%d/%m/%Y %H:%M')


def carregar_relatorio_existente(caminho_csv: str) -> dict:
    """Lê a planilha modelo já existente e devolve um dict chave -> linha,
    para não perdermos a 'data_adicionado' original de cada documento."""
    dados = {}
    if os.path.isfile(caminho_csv):
        try:
            with open(caminho_csv, newline='', encoding='utf-8') as f:
                leitor = csv.DictReader(f)
                for linha in leitor:
                    chave = (linha.get('filial'), linha.get('tipo'), linha.get('documento'))
                    dados[chave] = linha
        except Exception:
            pass
    return dados






def main():
    mmaa = pasta_mes_atual()
    agora = datetime.now()
    data_hora = agora.strftime('%d/%m/%Y %H:%M')
    print(f"Volumetria diária ({data_hora})\n")

    resultados_titulos = {}
    resultados_servicos = {}
    arquivos_titulos = {}
    arquivos_servicos = {}
    
    # Conta arquivos de TÍTULOS
    print("📋 TÍTULOS:")
    for filial, caminho_base in FILIAIS.items():
        pasta_arquivo = encontrar_pasta_para_registro(caminho_base, mmaa)

        if pasta_arquivo is None:
            qtd = 0
            arquivos = []
        else:
            arquivos = listar_arquivos(pasta_arquivo)
            qtd = len(arquivos)
        
        resultados_titulos[filial] = qtd
        arquivos_titulos[filial] = arquivos
        print(f"  📁 {filial}: {qtd} arquivo(s)")

    # Conta arquivos de SERVIÇOS
    print("\n📋 SERVIÇOS:")
    for filial, caminho_base in SERVICOS.items():
        pasta_arquivo = encontrar_pasta_para_registro(caminho_base, mmaa)

        if pasta_arquivo is None:
            qtd = 0
            arquivos = []
        else:
            arquivos = listar_arquivos(pasta_arquivo)
            qtd = len(arquivos)
        
        resultados_servicos[filial] = qtd
        arquivos_servicos[filial] = arquivos
        print(f"  📁 {filial}: {qtd} arquivo(s)")

    # Calcula totais
    total_titulos = sum(resultados_titulos.values())
    total_servicos = sum(resultados_servicos.values())
    total_geral = total_titulos + total_servicos
    
    print(f"\n📊 RESUMO:")
    print(f"  Títulos: {total_titulos} arquivo(s)")
    print(f"  Serviços: {total_servicos} arquivo(s)")
    print(f"  TOTAL: {total_geral} arquivo(s)")

    # Gera relatório CSV detalhado para auditoria manual.
    # Nome fixo: o arquivo continua sendo o mesmo a cada execução, mas agora
    # fazemos MERGE com o que já estava na planilha em vez de recriar tudo do
    # zero -- assim a "data_adicionado" de cada documento é preservada desde
    # a primeira vez que ele foi visto, e só o que mudou é atualizado.
    relatorio_path = os.path.join(os.path.dirname(__file__), "volumetria_report.csv")
    dados_anteriores = carregar_relatorio_existente(relatorio_path)
    agora_str = data_hora

    linhas_novas = {}

    def processar(arquivos_por_filial: dict, tipo: str):
        for filial, files in arquivos_por_filial.items():
            for f in files:
                documento = os.path.basename(f)
                chave = (filial, tipo, documento)
                anterior = dados_anteriores.get(chave)
                data_adicionado = anterior['data_adicionado'] if anterior else data_criacao_arquivo(f)
                linhas_novas[chave] = {
                    'filial': filial,
                    'tipo': tipo,
                    'documento': documento,
                    'caminho': f,
                    'data_adicionado': data_adicionado,
                    'ultima_verificacao': agora_str,
                }

    processar(arquivos_titulos, 'titulos')
    processar(arquivos_servicos, 'servicos')

    try:
        with open(relatorio_path, 'w', newline='', encoding='utf-8') as csvfile:
            writer = csv.DictWriter(
                csvfile,
                fieldnames=['filial', 'tipo', 'documento', 'caminho', 'data_adicionado', 'ultima_verificacao']
            )
            writer.writeheader()
            for chave in sorted(linhas_novas.keys()):
                writer.writerow(linhas_novas[chave])
        removidos = set(dados_anteriores.keys()) - set(linhas_novas.keys())
        print(f"\nRelatório atualizado (mesma planilha) em: {relatorio_path}")
        if removidos:
            print(f"  ⚠️  {len(removidos)} documento(s) que estavam na planilha não foram encontrados nesta execução (removidos das pastas ou movidos).")
    except Exception as e:
        print(f"\nFalha ao salvar relatório: {e}")

    return {
        "titulos": resultados_titulos,
        "servicos": resultados_servicos,
        "total": total_geral,
        "relatorio": relatorio_path
    }


if __name__ == "__main__":
    main()