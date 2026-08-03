import test, { expect } from "@playwright/test";
import { TestConfig } from "../test.config";
import { homePage } from "../pages/homePage";
import { searchResultPage } from "../pages/searchResultPage";
import { productPage } from "../pages/productPage";
import { shoppingCartPage } from "../pages/shoppingCartPage";
import { checkOutPage } from "../pages/checkOutPage";
import { loginPage } from "../pages/loginPage";
import { myAccountPage } from "../pages/myAccountPage";

let config: TestConfig;
let home: homePage;
let search: searchResultPage;
let prod: productPage;
let shopCartPg: shoppingCartPage;
let checkOutPg: checkOutPage;
let loginpg: loginPage;
let myAccPg :myAccountPage;


test.beforeEach(async ({ page }) => {
    config = new TestConfig();
    await page.goto(config.appUrl);

    home = new homePage(page);
    search = new searchResultPage(page);
    prod = new productPage(page);
    shopCartPg = new shoppingCartPage(page);
    checkOutPg = new checkOutPage(page);
    loginpg = new loginPage(page);
    myAccPg = new myAccountPage(page);
})

test.afterEach(async ({ page }) => {
    await page.waitForTimeout(3000);
    await page.close();
})

test("Product Add To Cart Test @master @regression @vj", async ({ page }) => {

    await home.clickMyAccount();
    await home.clickLogin();

    await loginpg.setEmail(config.email);
    await loginpg.setPassword(config.password);

    await loginpg.clickLoginBtn();

    expect(await myAccPg.isMyAccountPageExists()).toBeTruthy();

    await myAccPg.clickHome();

    expect(await home.isHomePageExists()).toBe(true);
    let prod1 = config.productName7;
    await home.enterProductName(prod1);
    await home.clickSearch();

    expect(await search.isSearchResultsPageExists()).toBeTruthy();

    await search.selectListView();

    expect(await search.isProductExists(prod1)).toBeTruthy();

    if (await search.isProductExists(prod1)) {
        await search.selectProduct(prod1);
    }
    await prod.setQuantity(config.productQuantity7);

    await prod.addToCart();

    //await page.waitForTimeout(3000);

    expect(await prod.isSuccessMsgVisible()).toBeTruthy();

    await prod.clickShoppingCartLink();

    expect(await shopCartPg.isShoppingCartPageVisible()).toBe(true);

    expect(await shopCartPg.isProductExists(prod1)).toBeTruthy();

    await shopCartPg.clickCheckout();

    expect(await checkOutPg.isCheckOutPageAvailableByHeader()).toBeTruthy();

});