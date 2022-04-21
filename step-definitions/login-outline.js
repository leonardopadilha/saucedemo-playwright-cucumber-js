const {Given, When, Then} = require('@cucumber/cucumber')
const {LoginPage} = require('../page-objects/login-page')

const loginPage = new LoginPage()

Given('que acesso a página de login', async function() {
    await loginPage.navigateTo()
})

When (/^informo no campo "([^"]*)" e "([^"]*)"$/, async function(userName, password) {
    await loginPage.submitLoginParam(userName, password)
})

Then('acesso a página de produtos com sucesso', async function() {
    await loginPage.assertPageProducts()
})