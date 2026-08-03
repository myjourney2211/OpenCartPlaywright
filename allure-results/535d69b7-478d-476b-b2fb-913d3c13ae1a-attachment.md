# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: AddToCart.spec.ts >> Product Add To Cart Test @master @regression @vj
- Location: tests\AddToCart.spec.ts:32:5

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: true
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
  8  | 
  9  | let config: TestConfig;
  10 | let home: homePage;
  11 | let search: searchResultPage;
  12 | let prod: productPage;
  13 | let shopCartPg: shoppingCartPage;
  14 | let letcheckOutPg:checkOutPage;
  15 | 
  16 | test.beforeEach(async ({ page }) => {
  17 |     config = new TestConfig();
  18 |     await page.goto(config.appUrl);
  19 | 
  20 |     home = new homePage(page);
  21 |     search = new searchResultPage(page);
  22 |     prod = new productPage(page);
  23 |     shopCartPg = new shoppingCartPage(page);
  24 |     letcheckOutPg = new checkOutPage(page);
  25 | })
  26 | 
  27 | test.afterEach(async ({ page }) => {
  28 |     await page.waitForTimeout(3000);
  29 |     await page.close();
  30 | })
  31 | 
  32 | test("Product Add To Cart Test @master @regression @vj", async ({ page }) => {
  33 |     let prod1 = config.productName7;
  34 |     await home.enterProductName(prod1);
  35 |     await home.clickSearch();
  36 | 
  37 |     expect(await search.isSearchResultsPageExists()).toBeTruthy();
  38 | 
  39 |     await search.selectListView();
  40 | 
  41 |     expect(await search.isProductExists(prod1)).toBeTruthy();
  42 | 
  43 |     if (await search.isProductExists(prod1)) {
  44 |         await search.selectProduct(prod1);
  45 |     }
  46 |     await prod.setQuantity(config.productQuantity7);
  47 | 
  48 |     await prod.addToCart();
  49 | 
  50 |     //await page.waitForTimeout(3000);
  51 | 
  52 |     expect(await prod.isSuccessMsgVisible()).toBeTruthy();
  53 | 
  54 |     await prod.clickShoppingCartLink();
  55 | 
  56 |     expect(await shopCartPg.isShoppingCartPageVisible()).toBe(true);
  57 | 
  58 |     expect(await shopCartPg.isProductExists(prod1)).toBeTruthy();
  59 | 
  60 |     await shopCartPg.clickCheckout();
  61 | 
> 62 |     expect(await letcheckOutPg.isCheckOutPageAvailableByTitle()).toBe(true);
     |                                                                  ^ Error: expect(received).toBe(expected) // Object.is equality
  63 | 
  64 |     expect(await letcheckOutPg.isCheckOutPageAvailableByHeader()).toBeTruthy();
  65 | 
  66 | });
```