# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: AddToCompareProduct.spec.ts >> Login Test @sanity @master
- Location: tests\AddToCompareProduct.spec.ts:34:5

# Error details

```
Error: locator.click: Error: strict mode violation: locator('button[data-original-title*=\'Compare this Product\']') resolved to 2 elements:
    1) <button title="" type="button" data-toggle="tooltip" class="btn btn-default" onclick="compare.add('40');" data-original-title="Compare this Product">…</button> aka getByRole('button').nth(4)
    2) <button title="" type="button" data-toggle="tooltip" onclick="compare.add('42');" data-original-title="Compare this Product">…</button> aka getByRole('button').filter({ hasText: /^$/ }).nth(4)

Call log:
  - waiting for locator('button[data-original-title*=\'Compare this Product\']')

```

# Test source

```ts
  1   | import { Page, Locator } from "@playwright/test";
  2   | import { shoppingCartPage } from "./shoppingCartPage";
  3   | import { prodComaparisonPage } from "./prodComparisonPage";
  4   | 
  5   | export class productPage {
  6   | 
  7   |     private readonly page: Page;
  8   |     //variables for locators
  9   |     private readonly txtQuantity: Locator;
  10  |     private readonly btnAddToCart: Locator;
  11  |     private readonly cnfMsg: Locator;
  12  |     private readonly btnItems: Locator;
  13  |     private readonly lnkViewCart: Locator;
  14  |     private readonly btnCompareProduct: Locator;
  15  |     private readonly lnkComaprisonPage: Locator;
  16  | 
  17  |     //constructor
  18  |     constructor(page: Page) {
  19  |         this.page = page;
  20  | 
  21  |         //Initialize the locators with CSS selectors
  22  |         this.txtQuantity = page.locator("#input-quantity");
  23  |         this.btnAddToCart = page.locator("#button-cart");
  24  |         this.cnfMsg = page.locator("div.alert.alert-success.alert-dismissible");
  25  |         this.btnItems = page.locator("div#cart");
  26  |         this.lnkViewCart = page.locator("strong:has-text('View Cart')");
  27  |         this.btnCompareProduct = page.locator("button[data-original-title*='Compare this Product']");
  28  |         this.lnkComaprisonPage = page.locator("div.alert.alert-success.alert-dismissible a[href*='route=product/compare']");
  29  |     }
  30  | 
  31  |     //methods
  32  |     async setQuantity(qty: string) {
  33  |         try {
  34  |             await this.txtQuantity.clear();
  35  |             await this.txtQuantity.fill(qty);
  36  |         } catch (error) {
  37  |             console.log(`Error duting updating Quantity in Product Page : ${error}`);
  38  |             throw (error);
  39  |         }
  40  |     }
  41  | 
  42  |     async addToCart() {
  43  |         try {
  44  |             await this.btnAddToCart.click();
  45  |         } catch (error) {
  46  |             console.log(`Error during click of Add To Cart : ${error}`);
  47  |             throw (error);
  48  |         }
  49  |     }
  50  | 
  51  |     async isSuccessMsgVisible(): Promise<boolean> {
  52  |         try {
  53  |             let msg: string | null = await this.cnfMsg.textContent();
  54  |             return msg?.includes("Success: You have added") ?? false;
  55  |         } catch (error) {
  56  |             console.log(`Success messsage not found : ${error}`);
  57  |             throw (error);
  58  |         }
  59  |     }
  60  | 
  61  |     async clickItemsToNavigate() {
  62  |         try {
  63  |             await this.btnItems.click();
  64  |         } catch (error) {
  65  |             console.log(`Error during Click of items button : ${error}`);
  66  |             throw (error);
  67  |         }
  68  |     }
  69  | 
  70  |     async clickViewCart(): Promise<shoppingCartPage> {
  71  |         try {
  72  |             await this.lnkViewCart.click();
  73  |             return new shoppingCartPage(this.page);
  74  |         } catch (error) {
  75  |             console.log(`Error during Click of items button : ${error}`);
  76  |             throw (error);
  77  |         }
  78  |     }
  79  | 
  80  |     async addProductToCart(qty: string) {
  81  |         try {
  82  |             await this.setQuantity(qty);
  83  |             await this.addToCart();
  84  |             await this.isSuccessMsgVisible();
  85  |         } catch (error) {
  86  |             console.log(`Add to Cart has some error : ${error}`);
  87  |             throw (error);
  88  |         }
  89  |     }
  90  | 
  91  |     async clickCompareProduct() {
  92  |         try {
> 93  |             await this.btnCompareProduct.click();
      |                                          ^ Error: locator.click: Error: strict mode violation: locator('button[data-original-title*=\'Compare this Product\']') resolved to 2 elements:
  94  |         } catch (error) {
  95  |             console.log(`Exception during click of Compare Product : ${error}`);
  96  |             throw (error);
  97  |         }
  98  |     }
  99  |     async isCompareSuccessMsgVisible(): Promise<boolean> {
  100 |         try {
  101 |             let msg: string | null = await this.cnfMsg.textContent();
  102 |             return msg?.includes("product comparison") ?? false;
  103 |         } catch (error) {
  104 |             console.log(`Success messsage not found : ${error}`);
  105 |             throw (error);
  106 |         }
  107 |     }
  108 | 
  109 |     async naviageProdComaparisonPage(): Promise<prodComaparisonPage> {
  110 |         try {
  111 |             await this.lnkComaprisonPage.click();
  112 |             return new prodComaparisonPage(this.page);
  113 |         } catch (error) {
  114 |             console.log(`Exception during navigating to Product Comparison Page : ${error}`);
  115 |             throw (error);
  116 |         }
  117 |     }
  118 | 
  119 | 
  120 | }
```