//const {expect} = require('chai')
const {expect} = require ('@playwright/test')

class LoginPage {
    async navigateTo() {
        await page.goto('https://www.saucedemo.com/')
    }

    async login() {
        await page.fill('#user-name', 'standard_user')
        await page.fill('#password', 'secret_sauce')
        await page.click('#login-button')
    }

    async submitLoginParam(userName, password) {
        await page.fill('#user-name', userName)
        await page.fill('#password', password)
        await page.click('#login-button')
    }

    async submitLoginWithError() {
        await page.fill('#user-name', 'locked_out_user')
        await page.fill('#password', 'secret_sauce')
        await page.click('#login-button')
    }

    async pause() {
        await page.waitForTimeout(3000)
      }

    async assertPageProducts() {
        this.pause()
        const pageProducts = await page.locator('.title')
        await expect(pageProducts).toContainText('Product')
    }

    async assertMessageErrorInLogin(phrase) {
        const msgError = await page.locator('div h3')
        await expect(msgError).toContainText(phrase)
    }
}

module.exports = {LoginPage}