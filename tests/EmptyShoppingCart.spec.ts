import test, { expect } from "@playwright/test";
import { homePage } from "../pages/homePage";
import { shoppingCartPage } from "../pages/shoppingCartPage";
import { TestConfig } from "../test.config";
import { tr } from "@faker-js/faker";

//variables
let home: homePage;
let shop: shoppingCartPage;
let config: TestConfig;

//before hook
test.beforeEach(async ({ page }) => {
    home = new homePage(page);
    shop = new shoppingCartPage(page);
    config = new TestConfig();
    await page.goto(config.appUrl);
})

//afterhook
test.afterEach(async({page}) =>{
    await page.waitForTimeout(3000);
    await page.close();
})

test("Verify if the Shopping Cart is Emppty @master @sanity", async ({}) => {

    expect(await home.isHomePageExists()).toBe(true);

    expect(await home.isShoppingCartEmpty()).toBeTruthy();

    await home.clickCheckout();

    expect(await shop.isShoppingCartPageVisible()).toBe(true);

    expect (await shop.isShoppingCartEmpty()).toBe(true);

})