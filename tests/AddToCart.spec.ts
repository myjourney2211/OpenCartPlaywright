import test, { expect } from "@playwright/test";
import { TestConfig } from "../test.config";
import { homePage } from "../pages/homePage";
import { searchResultPage } from "../pages/searchResultPage";
import { productPage } from "../pages/productPage";

let config: TestConfig;
let home: homePage;
let search: searchResultPage;
let prod: productPage;

test.beforeEach(async ({ page }) => {
    config = new TestConfig();
    await page.goto(config.appUrl);

    home = new homePage(page);
    search = new searchResultPage(page);
    prod = new productPage(page);
})

test.afterEach(async ({ page }) => {
    await page.waitForTimeout(3000);
    await page.close();
})

test("Product Add To Cart Test @master @regression @vj", async ({ page }) => {
    await home.enterProductName(config.productName2);
    await home.clickSearch();

    expect(await search.isSearchResultsPageExists()).toBeTruthy();

    await search.selectListView();

    expect(await search.isProductExists(config.productName2)).toBeTruthy();

    if (await search.isProductExists(config.productName2)) {
        await search.selectProduct(config.productName2);

        await prod.setQuantity(config.productQuantity2);

        await prod.addToCart();

        //await page.waitForTimeout(3000);

        expect(await prod.isSuccessMsgVisible()).toBeTruthy();
    }
});