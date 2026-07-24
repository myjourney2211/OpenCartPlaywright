import test, { expect } from "@playwright/test";
import { TestConfig } from "../test.config";
import { homePage } from "../pages/homePage";
import { loginPage } from "../pages/loginPage";
import { myAccountPage } from "../pages/myAccountPage";
import { logOut } from "../pages/logOut";

let config: TestConfig;
let home: homePage;
let login: loginPage;
let accpg: myAccountPage;
let logout: logOut;

test.beforeEach(async ({ page }) => {
    config = new TestConfig();
    await page.goto(config.appUrl);

    home = new homePage(page);
    login = new loginPage(page);
    accpg = new myAccountPage(page);
    logout = new logOut(page);
})

test.afterEach(async ({ page }) => {
    await page.waitForTimeout(3000);
    await page.close();
})

test("Logout Test @master", async ({ page }) => {
    await home.clickMyAccount();
    await home.clickLogin();

    await login.setEmail(config.email);
    await login.setPassword(config.password);
    await login.clickLoginBtn();

    expect(await accpg.isMyAccountPageExists).toBeTruthy();

    await accpg.clickLogout();

    expect(await logout.isContinueButtonVisible).toBeTruthy();
    await logout.clickContinue();

    expect(page).toHaveTitle("Your Store");

})