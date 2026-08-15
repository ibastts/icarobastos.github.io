# Currículo Digital

Este projeto é uma página de currículo digital moderna e interativa, desenvolvida com HTML, CSS e JavaScript. A estrutura utiliza um arquivo JSON como fonte de dados para renderizar as informações do perfil profissional em uma interface visual com estilo de painel tecnológico.

## Objetivo

O objetivo principal do projeto é apresentar experiências, competências, projetos e formação de forma elegante, organizada e visualmente atrativa, com uma interface inspirada em dashboards e sistemas de tecnologia.

## Estrutura do projeto

- `index.html` — estrutura principal da página
- `style.css` — estilos visuais, layout, responsividade e animações
- `script.js` — lógica para carregar os dados e renderizar o conteúdo dinamicamente
- `curriculo.json` — arquivo com as informações do currículo

## Como funciona

O arquivo `curriculo.json` contém os dados do perfil, como:

- nome
- cargo
- localização
- resumo profissional
- contatos
- educação
- habilidades
- experiência
- projetos

O JavaScript faz a leitura desse arquivo e monta a interface da página automaticamente, sem a necessidade de repetir conteúdo manualmente no HTML.

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript
- JSON

## Como visualizar o projeto

Você pode abrir o arquivo `index.html` diretamente no navegador ou rodar um servidor local, por exemplo:

```bash
python -m http.server 8000
```

Depois acesse:

```text
http://localhost:8000
```

## Personalização

Para alterar as informações do currículo, basta editar o arquivo `curriculo.json`.

Exemplo de estrutura:

```json
{
  "profile": {
    "name": "Seu Nome",
    "role": "Seu Cargo",
    "location": "Sua Cidade",
    "status": "Disponível para oportunidades",
    "summary": "Resumo profissional",
    "email": "seuemail@email.com",
    "links": {
      "linkedin": "https://linkedin.com/in/seu-perfil",
      "github": "https://github.com/seu-usuario"
    }
  }
}
```

## Observações

Este projeto foi pensado para servir como currículo digital, portfólio profissional ou página de apresentação pessoal, sendo facilmente adaptável para outros perfis.

## Autor

Ícaro Bastos
