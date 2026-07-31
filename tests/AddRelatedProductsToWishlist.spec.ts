import { test, expect } from "@playwright/test";
import { homePage } from "../pages/homePage";
import { TestConfig } from "../test.config";
import { loginPage } from "../pages/loginPage";
import { myAccountPage } from "../pages/myAccountPage";
import { searchResultPage } from "../pages/searchResultPage";
import { productPage } from "../pages/productPage";
import { prodComaparisonPage } from "../pages/prodComparisonPage";
import { wishlistPage } from "../pages/wishlishPage";
import { shoppingCartPage } from "../pages/shoppingCartPage";

let config: TestConfig;
let home: homePage;
let loginpg: loginPage;
let myAccPg: myAccountPage;
let searchPg: searchResultPage;
let prodPg: productPage;
let prodCompPg: prodComaparisonPage;
let wishListPg: wishlistPage;
let shopCartPg: shoppingCartPage;

test.beforeEach(async ({ page }) => {
    home = new homePage(page);
    loginpg = new loginPage(page);
    myAccPg = new myAccountPage(page);
    searchPg = new searchResultPage(page);
    prodPg = new productPage(page);
    prodCompPg = new prodComaparisonPage(page);
    wishListPg = new wishlistPage(page);
    shopCartPg = new shoppingCartPage(page);
    config = new TestConfig();
    await page.goto(config.appUrl);
})

test.afterEach(async ({ page }) => {
    await page.waitForTimeout(3000);
    await page.close();
})

test("Add Related Products Test @sanity @master", async ({ page }) => {
    await home.clickMyAccount();
    await home.clickLogin();

    await loginpg.setEmail(config.email);
    await loginpg.setPassword(config.password);

    await loginpg.clickLoginBtn();

    expect(await myAccPg.isMyAccountPageExists()).toBeTruthy();

    await myAccPg.clickHome();

    expect(await home.isHomePageExists()).toBe(true);

    await home.enterProductName(config.productName5);

    await home.clickSearch();

    expect(await searchPg.isSearchResultsPageExists()).toBe(true);

    await searchPg.selectListView();

    expect(await searchPg.isProductExists(config.productName6)).toBeTruthy();

    await searchPg.selectProduct(config.productName6);

    expect(await prodPg.getProductName()).toContain(config.productName6);

    expect(await prodPg.isRelatedProductSectionAvailable()).toBeTruthy();

    expect(await prodPg.isRelatedProductExists(config.productName1)).toBeTruthy();

    await prodPg.selectAddToWishListFromRelatedProduct(config.productName1);

    expect(await prodPg.isWishlistSuccessMsgVisible()).toBeTruthy();

    await prodPg.navigateWishListPage();

    expect(await wishListPg.isMyWishlistPageExists()).toBeTruthy();

    expect(await wishListPg.isProductExists(config.productName1)).toBeTruthy();

})
