# Testes Automatizados com Cypress e BDD

## Objetivo

Este projeto apresenta testes automatizados utilizando Cypress e a abordagem BDD (Behavior Driven Development), com cenários escritos em Gherkin.

A proposta é organizar os testes de forma que os comportamentos da aplicação sejam descritos em cenários e relacionados às implementações correspondentes.

## Tecnologias utilizadas

- JavaScript
- Node.js
- Cypress 15.14.1
- Cucumber
- Gherkin
- Faker.js
- Esbuild

## Estrutura do projeto

- `cypress/`: arquivos relacionados aos testes automatizados.
- `cypress.config.js`: configurações do Cypress e do processamento dos arquivos de teste.
- `package.json`: dependências e comandos disponíveis.
- `package-lock.json`: controle das versões das dependências.

## Como executar

### 1. Pré-requisitos

- Node.js instalado.
- npm instalado.

### 2. Instalar as dependências

Na pasta do projeto, execute:

```bash
npm install
```

### 3. Abrir o Cypress

```bash
npm run cypress:open
```

### 4. Executar os testes

```bash
npm test
```

## BDD e Gherkin

O projeto utiliza o pacote `@badeball/cypress-cucumber-preprocessor` para integrar o Cypress com Cucumber.

Os cenários são descritos utilizando Gherkin e relacionados às implementações dos passos de teste.

## Observação

A execução dos testes depende da aplicação estar disponível no endereço configurado no projeto.