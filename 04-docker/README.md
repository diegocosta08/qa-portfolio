# Projeto de Testes Automatizados com Cypress e Docker

## Objetivo

Este projeto tem como objetivo executar testes automatizados com Cypress utilizando Docker, facilitando a configuração e a execução do ambiente de testes.

## Tecnologias utilizadas

- JavaScript
- Node.js
- Cypress 15.21.0
- Docker

## Estrutura do projeto

- `cypress/`: arquivos dos testes automatizados.
- `Dockerfile`: configuração da imagem Docker.
- `.dockerignore`: arquivos ignorados durante a criação da imagem.
- `cypress.config.js`: configuração do Cypress.
- `package.json`: dependências e comandos do projeto.

## Como executar

### 1. Pré-requisitos

- Docker instalado e em execução.
- Git instalado, caso queira clonar o projeto.

### 2. Instalar as dependências

Caso queira executar fora do Docker:

```bash
npm install
```

### 3. Executar os testes com Cypress

Para abrir a interface:

```bash
npm run cy:open
```

Para executar os testes pelo terminal:

```bash
npm run cy:run
```

### 4. Executar com Docker

Criar a imagem:

```bash
docker build -t meu-projeto-cypress .
```

Executar o container:

```bash
docker run --rm meu-projeto-cypress
```

O Docker utiliza a imagem `cypress/included:15.21.0` e executa os testes pelo comando configurado no Dockerfile.

## Observação

A aplicação utilizada pelos testes deve estar disponível e corretamente configurada no ambiente de execução.