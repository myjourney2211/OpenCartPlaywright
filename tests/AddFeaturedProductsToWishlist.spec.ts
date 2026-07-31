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

test("Add Featured Products Test @sanity @master", async ({ page }) => {
    await home.clickMyAccount();
    await home.clickLogin();

    await loginpg.setEmail(config.email);
    await loginpg.setPassword(config.password);

    await loginpg.clickLoginBtn();

    expect(await myAccPg.isMyAccountPageExists()).toBeTruthy();

    await myAccPg.clickHome();

    expect(await home.isHomePageExists()).toBe(true);

    expect(await home.isFeaturedSectionAvailable()).toBeTruthy();

    expect(await home.isFeaturedProductExists(config.productName1)).toBeTruthy();

    await home.selectAddToWishListFromFeaturedProduct(config.productName1);

    expect(await home.isWishlistSuccessMsgVisible()).toBeTruthy();

    await home.navigateWishListPage();

    expect(await wishListPg.isMyWishlistPageExists()).toBeTruthy();

    expect(await wishListPg.isProductExists(config.productName1)).toBeTruthy();

})
