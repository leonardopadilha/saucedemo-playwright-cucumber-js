Feature: Carrinho de compras

    Como usuário
    Quero adicionar produtos ao carrinho
    Para visualizar o valor total das compras

    Scenario: Produtos adicionados ao carrinho com sucesso
    Given que esteja logado no sistema
    When adiciono 1 produto ao carrinho
    Then o sistema informa que 1 produto foi adicionado com sucesso