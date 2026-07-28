import { test, expect } from "@playwright/test";
import { homePage } from "../pages/homePage";
import { TestConfig } from "../test.config";
import { loginPage } from "../pages/loginPage";
import { myAccountPage } from "../pages/myAccountPage";

let config: TestConfig;
let home: homePage;
let loginpg: loginPage;
let myAccPg: myAccountPage;

test.beforeEach(async ({ page }) => {
    home = new homePage(page);
    loginpg = new loginPage(page);
    myAccPg = new myAccountPage(page);
    config = new TestConfig();
    await page.goto(config.appUrl);
})

test.afterEach(async ({ page }) => {
    //await page.waitForTimeout(3000);
    //await page.close();
})

test("Logout Session after Abrupt Browser Closure @sanity @master", async ({ page }) => {
    await home.clickMyAccount();
    await home.clickLogin();

    await loginpg.setEmail(config.email);
    await loginpg.setPassword(config.password);

    await loginpg.clickLoginBtn();

    expect(await myAccPg.isMyAccountPageExists()).toBeTruthy();

    await page.close();
    
    // Get a new page from the SAME context (preserves session/cookies)
    const newPage = await page.context().newPage();

    // Re-create page objects pointing at the new page
    const home2 = new homePage(newPage);

    await newPage.goto(config.appUrl);

    await home2.clickMyAccount();

    expect(await home2.isLogoutLinkAvailable()).toBe(true);
})
