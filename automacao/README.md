# Analisador de Compatibilidade de Vagas

Ferramenta simples em Python que organiza as vagas que você encontra e calcula
o quão compatível cada uma é com o seu perfil — pra você não perder tempo
lendo descrição de vaga por vaga.

## Como funciona (resumo)

```
vagas_input.xlsx  →  roda o script  →  vagas_compatibilidade.xlsx
(você cola as         (calcula o        (resultado pronto: mesmas vagas,
vagas que achou)        score)            ordenadas por compatibilidade)
```

O script **não busca vagas sozinho na internet** — plataformas como LinkedIn e
Indeed bloqueiam esse tipo de automação nos termos de uso. Você (ou eu, no
chat) cola as vagas encontradas na planilha de entrada, e o script só faz a
parte de organizar, pontuar e formatar.

---

## Passo a passo pra rodar

### 1. Pré-requisitos (só precisa fazer uma vez)

Tenha o [Python](https://www.python.org/downloads/) instalado. No VS Code,
abra um terminal (`Terminal > New Terminal`) e instale as bibliotecas
necessárias:

```
pip install pandas openpyxl
```

### 2. Preencha a planilha de entrada

Abra o arquivo **`vagas_input.xlsx`** (de preferência fora do VS Code, no
Excel mesmo, dando duplo clique nele pelo Explorador de Arquivos) e adicione
uma linha para cada vaga que encontrar, preenchendo as colunas:

| Coluna | O que colocar |
|---|---|
| `Vaga` | Título da vaga |
| `Empresa` | Nome da empresa |
| `Local` | Cidade/UF, ou "Remoto"/"Brasil" |
| `Modalidade` | Presencial, Híbrido ou Home office/Remoto |
| `Salario` | Valor informado, ou "A combinar" |
| `Beneficios` | VR, VT, plano de saúde etc., se informado |
| `Descricao` | **A mais importante** — cole o texto de requisitos/atividades da vaga |
| `Link` | Link direto da vaga |

Salve o arquivo depois de editar.

### 3. Rode o script

No terminal do VS Code, na mesma pasta dos arquivos:

```
python analisar_vagas.py
```

(No Mac/Linux pode ser `python3 analisar_vagas.py`; no Windows, se der erro,
tente `py analisar_vagas.py`.)

### 4. Veja o resultado

Um novo arquivo, **`vagas_compatibilidade.xlsx`**, é gerado (ou atualizado) na
mesma pasta — abra ele no Excel. As vagas vêm ordenadas da mais compatível
para a menos, com cor verde (Alta), amarela (Média) ou vermelha (Baixa).

Sempre que adicionar vagas novas na planilha de entrada, é só rodar o comando
do passo 3 de novo — o resultado é atualizado.

---

## Como o score de compatibilidade é calculado

O script lê o título e a descrição da vaga e procura por palavras-chave
ligadas a 4 grupos de habilidades, cada um com um peso:

| Grupo | Peso | Exemplos de termos |
|---|---|---|
| Fiscal / Financeiro / Faturamento | 35 | e-CAC, CCE, nota fiscal, conciliação bancária, contas a pagar |
| Dados | 30 | Power BI, SQL, Python, dashboard, análise de dados |
| Departamento Pessoal (DP) | 15 | folha de pagamento, admissão, e-Social, rescisão |
| Administrativo geral | 15 | Excel, contratos, comercial, atendimento |
| Bônus modalidade remota | 5 | home office, remoto |

O score final vai de 0 a 100%. Esses pesos foram calibrados pro seu perfil
(mais forte em fiscal/financeiro, migrando pra dados) — dá pra ajustar quando
quiser (veja a seção "Personalizando" abaixo).

## Regra de elegibilidade por localização

Além do score de habilidades, o script verifica se a vaga é **viável pra
você**, considerando onde mora:

- **Presencial** → só conta como apta se o `Local` for Ilhéus
- **Híbrido** → apta se o `Local` for Ilhéus ou Itabuna
- **Remoto/Home office** → sempre apta, independente do local

Vagas presenciais/híbridas fora dessa área **zeram automaticamente** o score,
mesmo que a descrição combine bastante com seu perfil — não faz sentido
pontuar alto uma vaga que você não poderia assumir. Isso aparece na coluna
`Elegibilidade` do resultado.

---

## Personalizando

Tudo que dá pra ajustar fica no topo do arquivo `analisar_vagas.py`:

- **Palavras-chave de cada grupo** — variáveis `KEYWORDS_DP`,
  `KEYWORDS_FISCAL_FINANCEIRO`, `KEYWORDS_DADOS`, `KEYWORDS_ADMIN`. Edite a
  lista conforme for percebendo termos que aparecem bastante nas vagas.
- **Peso de cada grupo** — variáveis `PESO_DP`, `PESO_FISCAL_FINANCEIRO`,
  `PESO_DADOS`, `PESO_ADMIN`, `PESO_REMOTO`. O ideal é manter a soma em 100.
- **Cidades aceitas para presencial/híbrido** — variáveis
  `CIDADES_PRESENCIAL` e `CIDADES_HIBRIDO`, caso essa regra mude no futuro.

---

## Arquivos do projeto

| Arquivo | O que é |
|---|---|
| `analisar_vagas.py` | O script — não precisa editar pra rodar, só se quiser mudar os critérios |
| `vagas_input.xlsx` | Entrada — você preenche com as vagas que encontrar |
| `vagas_compatibilidade.xlsx` | Saída — gerada automaticamente pelo script, não edite direto |
| `README.md` | Este tutorial |
