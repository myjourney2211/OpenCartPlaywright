# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: CompareProductFromListView.spec.ts >> Login Test @sanity @master
- Location: tests\CompareProductFromListView.spec.ts:34:5

# Error details

```
Error: page.goto: Target page, context or browser has been closed
Call log:
  - navigating to "https://tutorialsninja.com/demo/", waiting until "load"

```

```
Error: page.waitForTimeout: Target page, context or browser has been closed
```

# Test source

```ts
  1  | import { test, expect } from "@playwright/test";
  2  | import { homePage } from "../pages/homePage";
  3  | import { TestConfig } from "../test.config";
  4  | import { loginPage } from "../pages/loginPage";
  5  | import { myAccountPage } from "../pages/myAccountPage";
  6  | import { searchResultPage } from "../pages/searchResultPage";
  7  | import { productPage } from "../pages/productPage";
  8  | import { prodComaparisonPage } from "../pages/prodComparisonPage";
  9  | 
  10 | let config: TestConfig;
  11 | let home: homePage;
  12 | let loginpg: loginPage;
  13 | let myAccPg: myAccountPage;
  14 | let searchPg: searchResultPage;
  15 | let prodPg: productPage;
  16 | let prodCompPg: prodComaparisonPage;
  17 | 
  18 | test.beforeEach(async ({ page }) => {
  19 |     home = new homePage(page);
  20 |     loginpg = new loginPage(page);
  21 |     myAccPg = new myAccountPage(page);
  22 |     searchPg = new searchResultPage(page);
  23 |     prodPg = new productPage(page);
  24 |     prodCompPg = new prodComaparisonPage(page);
  25 |     config = new TestConfig();
  26 |     await page.goto(config.appUrl);
  27 | })
  28 | 
  29 | test.afterEach(async ({ page }) => {
> 30 |     await page.waitForTimeout(3000);
     |                ^ Error: page.waitForTimeout: Target page, context or browser has been closed
  31 |     await page.close();
  32 | })
  33 | 
  34 | test("Login Test @sanity @master", async ({ page }) => {
  35 |     await home.clickMyAccount();
  36 |     await home.clickLogin();
  37 | 
  38 |     await loginpg.setEmail(config.email);
  39 |     await loginpg.setPassword(config.password);
  40 | 
  41 |     await loginpg.clickLoginBtn();
  42 | 
  43 |     expect(await myAccPg.isMyAccountPageExists()).toBeTruthy();
  44 | 
  45 |     await myAccPg.clickHome();
  46 | 
  47 |     expect(await home.isHomePageExists()).toBe(true);
  48 | 
  49 |     await home.enterProductName(config.productName1);
  50 |     //await home.enterProductName("iPod");
  51 | 
  52 |     await home.clickSearch();
  53 | 
  54 |     expect(await searchPg.isSearchResultsPageExists()).toBe(true);
  55 | 
  56 |     await searchPg.selectListView();
  57 | 
  58 |     expect(await searchPg.isProductExists(config.productName2)).toBeTruthy();
  59 | 
  60 |     await searchPg.selectlistViewProductComapre(config.productName2);
  61 | 
  62 |     expect(await searchPg.isCompareSuccessMsgVisible()).toBe(true);
  63 | 
  64 |     await searchPg.naviageProdComaparisonPage();
  65 | 
  66 |     expect(await prodCompPg.isProductComparisonPageExists()).toContain("Product Comparison");
  67 | 
  68 |     expect(await prodCompPg.isProductExists(config.productName2)).toBe(true);
  69 | 
  70 | })
  71 | 
```