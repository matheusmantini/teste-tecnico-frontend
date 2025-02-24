<h1 align="center"> Teste Técnico de Front End </h1>

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![NextJS](https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![TypeScript](https://shields.io/badge/TypeScript-3178C6?logo=TypeScript&logoColor=FFF&style=flat-square)
![Tailwindcss](https://img.shields.io/badge/Tailwind_CSS-grey?style=for-the-badge&logo=tailwind-css&logoColor=38B2AC)
![JEST](https://img.shields.io/badge/Jest-323330?style=for-the-badge&logo=Jest&logoColor=white)

<p align="center"><i>Status do Projeto</i>: <b>Concluído</b></p>

## Funcionalidades

- **Página Inicial (/)**

  - [x] Barra de pesquisa para procurar um usuário no GitHub.
  - [x] Feedback caso o usuário não seja encontrado.
  - [x] Página do usuário (caso encontrado), mostrando suas informações e sua lista de repositórios.
  - [x] Possibilidade de favoritar e remover repositórios dos favoritos.

- **Página dos Favoritos (/favoritos)**

  - [x] Listar repositórios favoritos.
  - [x] Possibilidade de remover repositórios dos favoritos.

- **Extras**

  - [x] Responsividade.
  - [x] Utilização de atributos WAI-ARIA para acessibilidade.

## Deploy da Aplicação na vercel

> https://teste-tecnico-frontend-ochre.vercel.app/

## Como rodar a aplicação:

1. No terminal, clone o projeto:

   > git clone https://github.com/matheusmantini/teste-tecnico-frontend.git

2. Entre na pasta do projeto:

   > cd teste-tecnico-frontend

3. Copiar o arquivo '.env.exemplo' e renomeia-lo para '.env'.

4. Acessar o [guia de autenticação do github](https://docs.github.com/pt/rest/authentication/authenticating-to-the-rest-api?apiVersion=2022-11-28) para gerar seu token de acesso.

5. Substituir o texto da variável 'NEXT_PUBLIC_2' no arquivo '.env' pelo seu token de acesso ao GitHub gerado no passo anterior.

6. Instale as dependências:

   > npm install

7. Execute a aplicação:

   > npm run dev

8. Pronto, agora é possível acessar a aplicação a partir da rota http://localhost:3000/

## Desenvolvedor

| [<img src="https://avatars.githubusercontent.com/u/71985890?v=4" width=115 > <br> <sub> Matheus Mantini </sub>](https://www.linkedin.com/in/matheusmantini/) |
| :----------------------------------------------------------------------------------------------------------------------------------------------------------: |
