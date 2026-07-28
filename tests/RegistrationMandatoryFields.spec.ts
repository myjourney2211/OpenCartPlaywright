import { test, expect } from "@playwright/test";
import { homePage } from "../pages/homePage";
import { registrationPage } from "../pages/registrationPage";
import { TestConfig } from "../test.config";

let home: homePage; //making global variables which are objects of classes down the code
let regPage: registrationPage; //making global variables which are objects of classes down the code

test.beforeEach(async ({ page }) => {
    const config = new TestConfig();
    await page.goto(config.appUrl);

    home = new homePage(page); //objects for class
    regPage = new registrationPage(page); //objects for class
});

test.afterEach(async ({ page }) => {
    await page.waitForTimeout(3000);
    await page.close();
});

test("Mandatory Fields on Registration Pages @master @sanity", async ({ page }) => {
    // Page fixture is not needed here as it is already being taken care in beforeEach hook

    await home.clickMyAccount();
    await home.clickRegister();

    await regPage.clickContinueButton();

    expect(await regPage.getErrorMsgFirstName()).toContain(
        "First Name must be between 1 and 32 characters!");

    expect(await regPage.getErrorMsgLastName()).toContain(
        "Last Name must be between 1 and 32 characters!");

    expect(await regPage.getErrorMsgEmail()).toContain(
        "E-Mail Address does not appear to be valid!");

    expect(await regPage.getErrorMsgTelephone()).toContain(
        "Telephone must be between 3 and 32 characters!");

    expect(await regPage.getErrorMsgPassword()).toContain(
        "Password must be between 4 and 20 characters!");

    expect(await regPage.getErrorMsgCheckPolicy()).toContain(
        "Warning: You must agree to the Privacy Policy!");

});
