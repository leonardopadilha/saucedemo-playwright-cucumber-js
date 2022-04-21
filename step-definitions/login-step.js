const {Given, When, Then, defineStep} = require('@cucumber/cucumber')
const {LoginPage} = require ('../page-objects/login-page')

const loginPage = new LoginPage()

Given('que acesso o site', async function() {
    await loginPage.navigateTo()
})

When('informo os dados corretos', async function() {
    await loginPage.login()
})

Then('visualizo a página de produtos anunciados', async function() {
    await loginPage.assertPageProducts()
})