# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: AddToCart.spec.ts >> Product Add To Cart Test @master @regression
- Location: tests\AddToCart.spec.ts:26:5

# Error details

```
TimeoutError: locator.textContent: Timeout 15000ms exceeded.
Call log:
  - waiting for locator('div.alert.alert-success.alert-dismissible')

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
  16  |     private readonly txtProductName: Locator;
  17  |     private readonly txtBrand: Locator;
  18  |     private readonly txtProductCode: Locator;
  19  |     private readonly txtPrice: Locator;
  20  |     private readonly txtAvailability: Locator;
  21  |     private readonly txtExclTaxPrice: Locator;
  22  | 
  23  |     //constructor
  24  |     constructor(page: Page) {
  25  |         this.page = page;
  26  | 
  27  |         //Initialize the locators with CSS selectors
  28  |         this.txtQuantity = page.locator("#input-quantity");
  29  |         this.btnAddToCart = page.locator("#button-cart");
  30  |         this.cnfMsg = page.locator("div.alert.alert-success.alert-dismissible");
  31  |         this.btnItems = page.locator("div#cart");
  32  |         this.lnkViewCart = page.locator("strong:has-text('View Cart')");
  33  |         this.btnCompareProduct = page.locator("#product-product div.btn-group button:nth-child(2)");
  34  |         this.lnkComaprisonPage = page.locator("div.alert.alert-success.alert-dismissible a[href*='route=product/compare']");
  35  |         this.txtProductName = page.locator("div#content h1");
  36  |         this.txtBrand = page.locator("a[href*='route=product/manufacturer/info&manufacturer_id']");
  37  |         this.txtProductCode = page.getByText('Product Code');
  38  |         this.txtPrice = page.locator("ul.list-unstyled li h2");
  39  |         this.txtExclTaxPrice = page.getByText('Ex Tax');
  40  |         this.txtAvailability = page.getByText('Availability');
  41  |     }
  42  | 
  43  |     //methods
  44  |     async setQuantity(qty: string) {
  45  |         try {
  46  |             await this.txtQuantity.clear();
  47  |             await this.txtQuantity.fill(qty);
  48  |         } catch (error) {
  49  |             console.log(`Error duting updating Quantity in Product Page : ${error}`);
  50  |             throw (error);
  51  |         }
  52  |     }
  53  | 
  54  |     async addToCart() {
  55  |         try {
  56  |             await this.btnAddToCart.click();
  57  |         } catch (error) {
  58  |             console.log(`Error during click of Add To Cart : ${error}`);
  59  |             throw (error);
  60  |         }
  61  |     }
  62  | 
  63  |     async isSuccessMsgVisible(): Promise<boolean> {
  64  |         try {
> 65  |             let msg: string | null = await this.cnfMsg.textContent();
      |                                                        ^ TimeoutError: locator.textContent: Timeout 15000ms exceeded.
  66  |             return msg?.includes("Success: You have added") ?? false;
  67  |         } catch (error) {
  68  |             console.log(`Success messsage not found : ${error}`);
  69  |             throw (error);
  70  |         }
  71  |     }
  72  | 
  73  |     async clickItemsToNavigate() {
  74  |         try {
  75  |             await this.btnItems.click();
  76  |         } catch (error) {
  77  |             console.log(`Error during Click of items button : ${error}`);
  78  |             throw (error);
  79  |         }
  80  |     }
  81  | 
  82  |     async clickViewCart(): Promise<shoppingCartPage> {
  83  |         try {
  84  |             await this.lnkViewCart.click();
  85  |             return new shoppingCartPage(this.page);
  86  |         } catch (error) {
  87  |             console.log(`Error during Click of items button : ${error}`);
  88  |             throw (error);
  89  |         }
  90  |     }
  91  | 
  92  |     async addProductToCart(qty: string) {
  93  |         try {
  94  |             await this.setQuantity(qty);
  95  |             await this.addToCart();
  96  |             await this.isSuccessMsgVisible();
  97  |         } catch (error) {
  98  |             console.log(`Add to Cart has some error : ${error}`);
  99  |             throw (error);
  100 |         }
  101 |     }
  102 | 
  103 |     async clickCompareProduct() {
  104 |         try {
  105 |             await this.btnCompareProduct.click();
  106 |         } catch (error) {
  107 |             console.log(`Exception during click of Compare Product : ${error}`);
  108 |             throw (error);
  109 |         }
  110 |     }
  111 |     async isCompareSuccessMsgVisible(): Promise<boolean> {
  112 |         try {
  113 |             let msg: string | null = await this.cnfMsg.textContent();
  114 |             return msg?.includes("product comparison") ?? false;
  115 |         } catch (error) {
  116 |             console.log(`Success messsage not found : ${error}`);
  117 |             throw (error);
  118 |         }
  119 |     }
  120 | 
  121 |     async naviageProdComaparisonPage(): Promise<prodComaparisonPage> {
  122 |         try {
  123 |             await this.lnkComaprisonPage.click();
  124 |             return new prodComaparisonPage(this.page);
  125 |         } catch (error) {
  126 |             console.log(`Exception during navigating to Product Comparison Page : ${error}`);
  127 |             throw (error);
  128 |         }
  129 |     }
  130 | 
  131 |     async getProductName(): Promise<string | null> {
  132 |         try {
  133 |             return await this.txtProductName.textContent();
  134 |         } catch (error) {
  135 |             console.log(`Exception while getting Product Name: ${error}`);
  136 |             throw (error);
  137 |         }
  138 |     }
  139 | 
  140 |     async getBrandName(): Promise<string | null> {
  141 |         try {
  142 |             return await this.txtBrand.textContent();
  143 |         } catch (error) {
  144 |             console.log(`Exception while getting Brand Name: ${error}`);
  145 |             throw (error);
  146 |         }
  147 |     }
  148 | 
  149 |     async getProductCode(): Promise<string | null> {
  150 |         try {
  151 |             return await this.txtProductCode.textContent();
  152 |         } catch (error) {
  153 |             console.log(`Exception while getting Product Code: ${error}`);
  154 |             throw (error);
  155 |         }
  156 |     }
  157 | 
  158 |     async getProductPrice(): Promise<string | null> {
  159 |         try {
  160 |             return await this.txtPrice.textContent();
  161 |         } catch (error) {
  162 |             console.log(`Exception while getting Product Price: ${error}`);
  163 |             throw (error);
  164 |         }
  165 |     }
```