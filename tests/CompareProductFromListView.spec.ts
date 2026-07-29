import { test, expect } from "@playwright/test";
import { homePage } from "../pages/homePage";
import { TestConfig } from "../test.config";
import { loginPage } from "../pages/loginPage";
import { myAccountPage } from "../pages/myAccountPage";
import { searchResultPage } from "../pages/searchResultPage";
import { productPage } from "../pages/productPage";
import { prodComaparisonPage } from "../pages/prodComparisonPage";

let config: TestConfig;
let home: homePage;
let loginpg: loginPage;
let myAccPg: myAccountPage;
let searchPg: searchResultPage;
let prodPg: productPage;
let prodCompPg: prodComaparisonPage;

test.beforeEach(async ({ page }) => {
    home = new homePage(page);
    loginpg = new loginPage(page);
    myAccPg = new myAccountPage(page);
    searchPg = new searchResultPage(page);
    prodPg = new productPage(page);
    prodCompPg = new prodComaparisonPage(page);
    config = new TestConfig();
    await page.goto(config.appUrl);
})

test.afterEach(async ({ page }) => {
    await page.waitForTimeout(3000);
    await page.close();
})

test("Login Test @sanity @master", async ({ page }) => {
    await home.clickMyAccount();
    await home.clickLogin();

    await loginpg.setEmail(config.email);
    await loginpg.setPassword(config.password);

    await loginpg.clickLoginBtn();

    expect(await myAccPg.isMyAccountPageExists()).toBeTruthy();

    await myAccPg.clickHome();

    expect(await home.isHomePageExists()).toBe(true);

    await home.enterProductName(config.productName2);
    //await home.enterProductName("iPod");

    await home.clickSearch();

    expect(await searchPg.isSearchResultsPageExists()).toBe(true);

    await searchPg.selectListView();

    expect(await searchPg.isProductExists(config.productName2)).toBeTruthy();

    await searchPg.selectlistViewProductComapre(config.productName2);

    expect(await searchPg.isCompareSuccessMsgVisible()).toBe(true);

    await searchPg.naviageProdComaparisonPage();

    expect(await prodCompPg.isProductComparisonPageExists()).toContain("Product Comparison");

    expect(await prodCompPg.isProductExists(config.productName2)).toBe(true);

})
