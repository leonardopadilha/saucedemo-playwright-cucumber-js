const { Given, When, Then } = require('@cucumber/cucumber')
const { LoginPage } = require('../page-objects/login-page')
const { AddToCartPage } = require('../page-objects/add-to-cart-page')

const loginPage = new LoginPage()
const addToCart = new AddToCartPage()

Given('que esteja logado no sistema', async function() {
    await loginPage.navigateTo()
    await loginPage.login()
})

When('adiciono 1 produto ao carrinho', async function() {
    await addToCart.clickBtnAddToCart()
})

Then('o sistema informa que 1 produto foi adicionado com sucesso', async function() {
    await addToCart.confirmProductAdditionToCart()
})