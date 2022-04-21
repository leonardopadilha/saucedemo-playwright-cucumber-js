Feature: Informar dados errados no login

    Como usuário
    Quero informar dados errados no login
    Para validar mensagem de errados

    Scenario: Realizar login com dados inválidos
        Given que acesso a tela para realizar login
        When informo dados inválidos
        Then o sistema retorna mensagem de erro
