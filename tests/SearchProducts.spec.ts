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

test("Search Products Test @master @regression", async ({ page }) => {
    await home.enterProductName(config.productName1);
    await home.clickSearch();

    expect(await search.isSearchResultsPageExists()).toBe(true);

    expect(await search.isProductExists(config.productName1)).toBe(true);

});