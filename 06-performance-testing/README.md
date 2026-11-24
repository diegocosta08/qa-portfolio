# Teste de Performance com Apache JMeter

## Objetivo

Este projeto tem como objetivo realizar um teste de carga utilizando o Apache JMeter, simulando o acesso de 50 usuários para avaliar o comportamento da aplicação durante a execução.

## Ferramentas utilizadas

- Apache JMeter
- Arquivo JMX para configuração do teste
- CSV para fornecimento de dados

## Arquivos do projeto

- `teste_carga_50_usuarios.jmx`: plano de teste de carga configurado para 50 usuários.
- `massa_dados.csv`: arquivo com os dados utilizados durante o teste.

## Como executar

### 1. Pré-requisitos

- Apache JMeter instalado.
- Aplicação ou serviço de destino disponível para receber as requisições configuradas no teste.

### 2. Abrir o plano de teste

1. Abra o Apache JMeter.
2. Selecione **File > Open**.
3. Escolha o arquivo `teste_carga_50_usuarios.jmx`.

### 3. Conferir o arquivo de dados

Verifique se o arquivo `massa_dados.csv` está no caminho esperado pela configuração do plano de teste.

### 4. Executar o teste

Com o plano aberto e a aplicação de destino disponível, clique em **Start** para iniciar a execução.

## Observação

Os resultados dependem do ambiente utilizado e das condições da aplicação durante a execução. Este repositório contém o plano de teste e o arquivo de dados.