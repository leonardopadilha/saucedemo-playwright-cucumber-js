const {Given, When, defineStep, Then} = require('@cucumber/cucumber')
const { LoginPage } = require('../page-objects/login-page')
const { AddToCartPage } = require('../page-objects/add-to-cart-page')

const loginPage = new LoginPage()
const addToCart = new AddToCartPage()

Given('que esteja logado', async function() {
    await loginPage.navigateTo()
    await loginPage.login()
})

When('adiciono 1 produto', async function() {
    await addToCart.clickBtnAddToCart()
})

defineStep('removo o mesmo produto do carrinho', async function() {
    await addToCart.clickConfirmProductRemoveToCart()  
})

Then('o sistema retira aquele produto do carrinho com sucesso', async function() {
    await addToCart.confirmRemoveTocart()
})

