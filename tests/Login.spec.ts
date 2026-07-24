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
    config = new TestConfig();
    home = new homePage(page);
    loginpg = new loginPage(page);
    myAccPg = new myAccountPage(page);
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

    //expect(await myAccPg.myAccountPageVisibility()).toContain("My Account");
    expect(await myAccPg.isMyAccountPageExists()).toBeTruthy();

})
