import { test, expect } from "@playwright/test";
import { homePage } from "../pages/homePage";
//import { loginPage } from "../pages/loginPage";
//import { myAccountPage } from "../pages/myAccountPage";
import { dataProvider } from "../utils/dataProvider";
import { TestConfig } from "../test.config";
import { searchResultPage } from "../pages/searchResultPage";
import { productPage } from "../pages/productPage";

//Load JSON test data
const jsonpath = "testdata/productDetails.json";
const jsontestdata: any = dataProvider.getTestDataFromJson(jsonpath);

for (const data of jsontestdata) {
    test(`Product Details verification from JSON : ${data.testname} @master @datadriven`, async ({ page }) => {

        const config = new TestConfig();
        await page.goto(config.appUrl);

        const home = new homePage(page);
        await home.enterProductName(data.productname);
        await home.clickSearch();

        const searchResPg = new searchResultPage(page);
        await searchResPg.selectProduct(data.productname);

        const prodPg = new productPage(page);
        expect(await prodPg.getProductName()).toContain(data.productname);
        expect(await prodPg.getBrandName()).toContain(data.brand);
        expect(await prodPg.getProductCode()).toContain(data.productcode);
        expect(await prodPg.getProductPrice()).toContain(data.price);
        expect(await prodPg.getProductAvailability()).toContain(data.availability);
        expect(await prodPg.getProductPriceExcludingTax()).toContain(data.priceextax);
    })
}


//Load CSV test data
const csvpath = "testdata/productDetails.csv";
const csvtestdata: any = dataProvider.getTestDataFromCSV(csvpath);

for (const data of csvtestdata) {
    test(`Product Details verification from csv : ${data.testname} @master @datadriven`, async ({ page }) => {

        const config = new TestConfig();
        await page.goto(config.appUrl);

        const home = new homePage(page);
        await home.enterProductName(data.productname);
        await home.clickSearch();

        const searchResPg = new searchResultPage(page);
        await searchResPg.selectProduct(data.productname);

        const prodPg = new productPage(page);
        expect(await prodPg.getProductName()).toContain(data.productname);
        expect(await prodPg.getBrandName()).toContain(data.brand);
        expect(await prodPg.getProductCode()).toContain(data.productcode);
        expect(await prodPg.getProductPrice()).toContain(data.price);
        expect(await prodPg.getProductAvailability()).toContain(data.availability);
        expect(await prodPg.getProductPriceExcludingTax()).toContain(data.priceextax);
    })
}
