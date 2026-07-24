# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: E2ETestCase.spec.ts >> End To End Test @master @E2ETest
- Location: tests\E2ETestCase.spec.ts:64:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.textContent: Target page, context or browser has been closed
Call log:
  - waiting for locator('div.alert.alert-success.alert-dismissible')

```

# Test source

```ts
  1  | import { Page, Locator } from "@playwright/test";
  2  | import { shoppingCartPage } from "./shoppingCartPage";
  3  | 
  4  | export class productPage {
  5  | 
  6  |     private readonly page: Page;
  7  |     //variables for locators
  8  |     private readonly txtQuantity: Locator;
  9  |     private readonly btnAddToCart: Locator;
  10 |     private readonly cnfMsg: Locator;
  11 |     private readonly btnItems: Locator;
  12 |     private readonly lnkViewCart: Locator;
  13 | 
  14 |     //constructor
  15 |     constructor(page: Page) {
  16 |         this.page = page;
  17 | 
  18 |         //Initialize the locators with CSS selectors
  19 |         this.txtQuantity = page.locator("#input-quantity");
  20 |         this.btnAddToCart = page.locator("#button-cart");
  21 |         this.cnfMsg = page.locator("div.alert.alert-success.alert-dismissible");
  22 |         this.btnItems = page.locator("div#cart");
  23 |         this.lnkViewCart = page.locator("strong:has-text('View Cart')");
  24 |     }
  25 | 
  26 |     //methods
  27 |     async setQuantity(qty: string) {
  28 |         try {
  29 |             await this.txtQuantity.clear();
  30 |             await this.txtQuantity.fill(qty);
  31 |         } catch (error) {
  32 |             console.log(`Error duting updating Quantity in Product Page : ${error}`);
  33 |             throw (error);
  34 |         }
  35 |     }
  36 | 
  37 |     async addToCart() {
  38 |         try {
  39 |             await this.btnAddToCart.click();
  40 |         } catch (error) {
  41 |             console.log(`Error during click of Add To Cart : ${error}`);
  42 |             throw (error);
  43 |         }
  44 |     }
  45 | 
  46 |     async isSuccessMsgVisible(): Promise<boolean> {
  47 |         try {
> 48 |             let msg: string | null = await this.cnfMsg.textContent();
     |                                                        ^ Error: locator.textContent: Target page, context or browser has been closed
  49 |             return msg?.includes("Success: You have added") ?? false;
  50 |         } catch (error) {
  51 |             console.log(`Success messsage not found : ${error}`);
  52 |             throw (error);
  53 |         }
  54 |     }
  55 | 
  56 |     async clickItemsToNavigate() {
  57 |         try {
  58 |             await this.btnItems.click();
  59 |         } catch (error) {
  60 |             console.log(`Error during Click of items button : ${error}`);
  61 |             throw (error);
  62 |         }
  63 |     }
  64 | 
  65 |     async clickViewCart(): Promise<shoppingCartPage> {
  66 |         try {
  67 |             await this.lnkViewCart.click();
  68 |             return new shoppingCartPage(this.page);
  69 |         } catch (error) {
  70 |             console.log(`Error during Click of items button : ${error}`);
  71 |             throw (error);
  72 |         }
  73 |     }
  74 | 
  75 |     async addProductToCart(qty: string) {
  76 |         try {
  77 |             await this.setQuantity(qty);
  78 |             await this.addToCart();
  79 |             await this.isSuccessMsgVisible();
  80 |         } catch (error) {
  81 |             console.log(`Add to Cart has some error : ${error}`);
  82 |             throw (error);
  83 |         }
  84 |     }
  85 | }
```