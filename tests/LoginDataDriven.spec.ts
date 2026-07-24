import { test, expect } from "@playwright/test";
import { homePage } from "../pages/homePage";
import { loginPage } from "../pages/loginPage";
import { myAccountPage } from "../pages/myAccountPage";
import { dataProvider } from "../utils/dataProvider";
import { TestConfig } from "../test.config";

//Load JSON test data
const jsonpath = "testdata/loginData.json";
const jsontestdata: any = dataProvider.getTestDataFromJson(jsonpath);

for (const data of jsontestdata) {
    test(`Login test with JSON Data : ${data.testname} @master @datadriven`, async ({ page }) => {

        const config = new TestConfig();
        await page.goto(config.appUrl);

        const home = new homePage(page);
        await home.clickMyAccount();
        await home.clickLogin();

        const loginPG = new loginPage(page);
        await loginPG.login(data.email, data.password);

        if (data.expected.toLowerCase() === "success") {
            const accPG = new myAccountPage(page);
            expect(await accPG.myAccountPageVisibility()).toBeTruthy();
        } else {
            const erroMessage = await loginPG.getLoginErrorMessage();
            expect(erroMessage).toBe('Warning: No match for E-Mail Address and/or Password.')
        }
    })
}

//Load CSV test data
const csvpath = "testdata/loginData.csv";
const csvtestdata: any = dataProvider.getTestDataFromCSV(csvpath);

for (const data of csvtestdata) {
    test(`Login test with CSV Data : ${data.testname} @master @datadriven`, async ({ page }) => {

        const config = new TestConfig();
        await page.goto(config.appUrl);

        const home = new homePage(page);
        await home.clickMyAccount();
        await home.clickLogin();

        const loginPG = new loginPage(page);
        await loginPG.login(data.email, data.password);

        if (data.expected.toLowerCase() === "success") {
            const accPG = new myAccountPage(page);
            expect(await accPG.myAccountPageVisibility()).toBeTruthy();
        } else {
            const erroMessage = await loginPG.getLoginErrorMessage();
            expect(erroMessage).toBe('Warning: No match for E-Mail Address and/or Password.')
        }
    })
}
