# Automação de Testes de Interface – Hub de Leitura

## Sobre o projeto

Este projeto foi desenvolvido durante o curso de Engenharia de Qualidade de Software da EBAC.

O objetivo é automatizar testes de interface do sistema Hub de Leitura, utilizando Cypress e JavaScript para verificar o funcionamento das funcionalidades da aplicação.

## Ferramentas utilizadas

- Node.js
- JavaScript
- Cypress
- Faker

## Como executar o projeto

### 1. Pré-requisitos

Antes de começar, é necessário ter instalado:

- Node.js
- npm

Também é necessário ter a aplicação Hub de Leitura disponível e em execução.

### 2. Baixar o projeto

Clone este repositório ou baixe seus arquivos pelo GitHub.

### 3. Instalar as dependências

Abra o terminal na pasta do projeto e execute:

```bash
npm install
```

### 4. Iniciar a aplicação

Inicie o Hub de Leitura e confirme que ele está disponível no endereço:

```text
http://localhost:3000
```

### 5. Executar os testes

Para executar os testes pelo terminal:

```bash
npm test
```

Para abrir o Cypress:

```bash
npm run cy:open
```

## Estrutura do projeto

```text
01-cypress-ui/
├── cypress/
│   ├── e2e/
│   ├── fixtures/
│   └── support/
│       ├── commands.js
│       └── e2e.js
├── cypress.config.js
├── package.json
├── package-lock.json
└── README.md
```

## Observação

O endereço da aplicação está configurado no arquivo `cypress.config.js`. Para executar os testes, a aplicação precisa estar disponível no endereço configurado.