Feature: Realizar Login com vários usuários

    Como usuário
    Quero realizar login
    Para efetuar as compras com sucesso

 Scenario Outline: Realizar login com varios usuarios
    Given que acesso a página de login
    When informo no campo "<userName>" e "<password>"
    Then acesso a página de produtos com sucesso

    Examples:
        |userName                   |password      |
        |problem_user               |secret_sauce  |
        |standard_user              |secret_sauce  |