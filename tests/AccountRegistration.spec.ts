import { test, expect } from "@playwright/test";
import { homePage } from "../pages/homePage";
import { registrationPage } from "../pages/registrationPage";
import { randomDataGenerator } from "../utils/randomDataGenerator";
import { TestConfig } from "../test.config";

let home: homePage; //making global variables which which are objects of classes down the code
let regPage: registrationPage; //making global variables which which are objects of classes down the code

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

test("User Registration test @master @regression", async ({ page }) => {
    // Page fixture is not needed here as it is already being taken care in beforeEach hook

    await home.clickMyAccount();
    await home.clickRegister();

    await regPage.setFirstName(randomDataGenerator.getFirstName());
    await regPage.setLastName(randomDataGenerator.getLastName());
    await regPage.setEmail(randomDataGenerator.getEmail());
    await regPage.setTelephone(randomDataGenerator.getPhoneNumber());

    const password = randomDataGenerator.getPassword();

    await regPage.setPassword(password);
    await regPage.setConfirmPassword(password);

    await regPage.clickCheckPloicy();
    await regPage.clickContinueButton();

    expect(await regPage.getConfirmationMsg()).toContain(
        "Your Account Has Been Created!");
});
