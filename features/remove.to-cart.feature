Feature: Limpar carrinho de compras

    Como usuário
    Quero remover produtos ao carrinho
    Para não ter dívidas 

    Scenario: Produtos removidos do carrinho com sucesso
    Given que esteja logado
    When adiciono 1 produto
    And removo o mesmo produto do carrinho
    Then o sistema retira aquele produto do carrinho com sucesso