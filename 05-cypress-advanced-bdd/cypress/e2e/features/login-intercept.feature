Feature: Login com Intercept

  Scenario: Login com sucesso usando intercept
    Given que acesso a página de login para autenticação mockada
    When envio credenciais válidas com intercept de sucesso
    Then devo ser direcionado ao dashboard com resposta mockada

  Scenario: Login com erro usando intercept
    Given que acesso a página de login para autenticação mockada
    When envio credenciais inválidas com intercept de erro
    Then devo visualizar a mensagem de erro retornada pela API mockada
