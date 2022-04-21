const {Given, When, Then} = require('@cucumber/cucumber')
const {LoginPage} = require('../page-objects/login-page')

const loginPage = new LoginPage()

Given('que acesso a tela para realizar login', async function() {
    await loginPage.navigateTo()
})

When('informo dados inválidos', async function() {
    await loginPage.submitLoginWithError()
})

Then('o sistema retorna mensagem de erro', async function() {
    await loginPage.assertMessageErrorInLogin('Epic sadface: Sorry, this user has been locked out.')
})