# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: AddToCart.spec.ts >> Product Add To Cart Test @master @regression @vj
- Location: tests\AddToCart.spec.ts:39:5

# Error details

```
Error: expect(received).toBeTruthy()

Received: false
```

# Test source

```ts
  1  | import test, { expect } from "@playwright/test";
  2  | import { TestConfig } from "../test.config";
  3  | import { homePage } from "../pages/homePage";
  4  | import { searchResultPage } from "../pages/searchResultPage";
  5  | import { productPage } from "../pages/productPage";
  6  | import { shoppingCartPage } from "../pages/shoppingCartPage";
  7  | import { checkOutPage } from "../pages/checkOutPage";
  8  | import { loginPage } from "../pages/loginPage";
  9  | import { myAccountPage } from "../pages/myAccountPage";
  10 | 
  11 | let config: TestConfig;
  12 | let home: homePage;
  13 | let search: searchResultPage;
  14 | let prod: productPage;
  15 | let shopCartPg: shoppingCartPage;
  16 | let checkOutPg: checkOutPage;
  17 | let loginpg: loginPage;
  18 | let myAccPg :myAccountPage;
  19 | 
  20 | 
  21 | test.beforeEach(async ({ page }) => {
  22 |     config = new TestConfig();
  23 |     await page.goto(config.appUrl);
  24 | 
  25 |     home = new homePage(page);
  26 |     search = new searchResultPage(page);
  27 |     prod = new productPage(page);
  28 |     shopCartPg = new shoppingCartPage(page);
  29 |     checkOutPg = new checkOutPage(page);
  30 |     loginpg = new loginPage(page);
  31 |     myAccPg = new myAccountPage(page);
  32 | })
  33 | 
  34 | test.afterEach(async ({ page }) => {
  35 |     await page.waitForTimeout(3000);
  36 |     await page.close();
  37 | })
  38 | 
  39 | test("Product Add To Cart Test @master @regression @vj", async ({ page }) => {
  40 | 
  41 |     await home.clickMyAccount();
  42 |     await home.clickLogin();
  43 | 
  44 |     await loginpg.setEmail(config.email);
  45 |     await loginpg.setPassword(config.password);
  46 | 
  47 |     await loginpg.clickLoginBtn();
  48 | 
  49 |     expect(await myAccPg.isMyAccountPageExists()).toBeTruthy();
  50 | 
  51 |     await myAccPg.clickHome();
  52 | 
  53 |     expect(await home.isHomePageExists()).toBe(true);
  54 |     let prod1 = config.productName7;
  55 |     await home.enterProductName(prod1);
  56 |     await home.clickSearch();
  57 | 
  58 |     expect(await search.isSearchResultsPageExists()).toBeTruthy();
  59 | 
  60 |     await search.selectListView();
  61 | 
  62 |     expect(await search.isProductExists(prod1)).toBeTruthy();
  63 | 
  64 |     if (await search.isProductExists(prod1)) {
  65 |         await search.selectProduct(prod1);
  66 |     }
  67 |     await prod.setQuantity(config.productQuantity7);
  68 | 
  69 |     await prod.addToCart();
  70 | 
  71 |     //await page.waitForTimeout(3000);
  72 | 
> 73 |     expect(await prod.isSuccessMsgVisible()).toBeTruthy();
     |                                              ^ Error: expect(received).toBeTruthy()
  74 | 
  75 |     await prod.clickShoppingCartLink();
  76 | 
  77 |     expect(await shopCartPg.isShoppingCartPageVisible()).toBe(true);
  78 | 
  79 |     expect(await shopCartPg.isProductExists(prod1)).toBeTruthy();
  80 | 
  81 |     await shopCartPg.clickCheckout();
  82 | 
  83 |     expect(await checkOutPg.isCheckOutPageAvailableByHeader()).toBeTruthy();
  84 | 
  85 | });
```