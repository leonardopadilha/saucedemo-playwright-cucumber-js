const {expect} = require('@playwright/test')

class AddToCartPage {

    async clickBtnAddToCart() {
        await page.click('#add-to-cart-sauce-labs-backpack')
        
    }

    async confirmProductAdditionToCart() {
        const productToCart = await page.locator('.shopping_cart_badge')
        await expect(productToCart).toContainText("1")
    }

    async clickConfirmProductRemoveToCart() {
        const btnRemoveToCart = await page.locator('#remove-sauce-labs-backpack')
        await btnRemoveToCart.click();
    }

    async confirmRemoveTocart() {
        const removeToCart = await page.locator('.shopping_cart_badge')
        await expect(removeToCart).not.toBeVisible()
    }
}

module.exports = {AddToCartPage}