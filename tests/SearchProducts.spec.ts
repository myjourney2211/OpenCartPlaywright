import { test, expect } from "@playwright/test";
import { homePage } from "../pages/homePage";
import { searchResultPage } from "../pages/searchResultPage";
import { TestConfig } from "../test.config";

//variables
let config: TestConfig;
let home: homePage;
let search: searchResultPage;

test.beforeEach(async ({ page }) => {
    config = new TestConfig();
    await page.goto(config.appUrl);

    home = new homePage(page);
    search = new searchResultPage(page);
});

test.afterEach(async ({ page }) => {
    await page.waitForTimeout(3000);
    await page.close();
});

test("Search Products Test - Existing Product @master @regression", async ({ page }) => {
    //Valid Product
    await home.enterProductName(config.productName1);
    await home.clickSearch();

    expect(await search.isSearchResultsPageExists()).toBe(true);

    expect(await search.isProductExists(config.productName1)).toBe(true);

    //Non-Existing Product
    await home.enterProductName(config.productName3);
    await home.clickSearch();

    expect(await search.isProductExists(config.productName3)).toBe(false);

    //No Prudct Name provided
    await home.enterProductName(config.productName4);
    await home.clickSearch();

    expect(await search.isProductExists(config.productName4)).toBe(false);

});