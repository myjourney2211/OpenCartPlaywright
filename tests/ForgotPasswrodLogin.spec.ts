import { test, expect } from "@playwright/test";
import { homePage } from "../pages/homePage";
import { TestConfig } from "../test.config";
import { loginPage } from "../pages/loginPage";
import { myAccountPage } from "../pages/myAccountPage";
import { forgotPasswordPage } from "../pages/forgotPasswordPage";

let config: TestConfig;
let home: homePage;
let loginpg: loginPage;
let myAccPg: myAccountPage;
let fgPwdPg: forgotPasswordPage;

test.beforeEach(async ({ page }) => {
    home = new homePage(page);
    loginpg = new loginPage(page);
    myAccPg = new myAccountPage(page);
    fgPwdPg = new forgotPasswordPage(page);
    config = new TestConfig();
    await page.goto(config.appUrl);
})

test.afterEach(async ({ page }) => {
    await page.waitForTimeout(3000);
    await page.close();
})

test("Login after Forgot Password but without changing password @sanity @master", async () => {
    await home.clickMyAccount();
    await home.clickLogin();

    expect(await loginpg.isForgottenPasswordAvailable()).toBeTruthy();

    await loginpg.clickForgottenPassword();

    expect(await fgPwdPg.islblForgotPasswordAvailable()).toBe(true);

    await fgPwdPg.setEmail(config.email);

    await fgPwdPg.clickContinueBtn();

    expect(await loginpg.getForgotSuccessMessage()).toContain("An email with a confirmation link has been sent your email address.");

    await loginpg.login(config.email, config.password);

    expect(await myAccPg.isMyAccountPageExists()).toBe(true);

})
