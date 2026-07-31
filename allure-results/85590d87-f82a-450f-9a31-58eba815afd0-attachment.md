# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: AddToCart.spec.ts >> Product Add To Cart Test @master @regression @vj
- Location: tests\AddToCart.spec.ts:26:5

# Error details

```
TimeoutError: locator.innerText: Timeout 15000ms exceeded.
Call log:
  - waiting for locator('div.alert.alert-success')

```

# Test source

```ts
  1   | import { Page, Locator } from "@playwright/test";
  2   | import { shoppingCartPage } from "./shoppingCartPage";
  3   | import { prodComaparisonPage } from "./prodComparisonPage";
  4   | import { wishlistPage } from "./wishlishPage";
  5   | 
  6   | export class productPage {
  7   | 
  8   |     private readonly page: Page;
  9   |     //variables for locators
  10  |     private readonly txtQuantity: Locator;
  11  |     private readonly btnAddToCart: Locator;
  12  |     private readonly cnfMsg: Locator;
  13  |     private readonly btnItems: Locator;
  14  |     private readonly lnkViewCart: Locator;
  15  |     private readonly btnCompareProduct: Locator;
  16  |     private readonly lnkComaprisonPage: Locator;
  17  |     private readonly txtProductName: Locator;
  18  |     private readonly txtBrand: Locator;
  19  |     private readonly txtProductCode: Locator;
  20  |     private readonly txtPrice: Locator;
  21  |     private readonly txtAvailability: Locator;
  22  |     private readonly txtExclTaxPrice: Locator;
  23  |     private readonly lblRelatedProductSection: Locator;
  24  |     private readonly lnkRelatedProducts: Locator;
  25  |     private readonly btnAddToWishlistFromRelateProduct: Locator;
  26  |     private readonly lnkWishListPage: Locator;
  27  | 
  28  |     //constructor
  29  |     constructor(page: Page) {
  30  |         this.page = page;
  31  | 
  32  |         //Initialize the locators with CSS selectors
  33  |         this.txtQuantity = page.locator("#input-quantity");
  34  |         this.btnAddToCart = page.locator("#button-cart");
  35  |         this.cnfMsg = page.locator("div.alert.alert-success");
  36  |         this.btnItems = page.locator("div#cart");
  37  |         this.lnkViewCart = page.locator("strong:has-text('View Cart')");
  38  |         this.btnCompareProduct = page.locator("#product-product div.btn-group button:nth-child(2)");
  39  |         this.lnkComaprisonPage = page.locator("div.alert.alert-success.alert-dismissible a[href*='route=product/compare']");
  40  |         this.txtProductName = page.locator("div#content h1");
  41  |         this.txtBrand = page.locator("a[href*='route=product/manufacturer/info&manufacturer_id']");
  42  |         this.txtProductCode = page.getByText('Product Code');
  43  |         this.txtPrice = page.locator("ul.list-unstyled li h2");
  44  |         this.txtExclTaxPrice = page.getByText('Ex Tax');
  45  |         this.txtAvailability = page.getByText('Availability');
  46  |         this.lblRelatedProductSection = page.getByText('Related Products');
  47  |         this.lnkRelatedProducts = page.locator("div.caption h4 a");
  48  |         this.btnAddToWishlistFromRelateProduct = page.locator("div[class='button-group'] button[data-original-title*='Add to Wish List'] i");
  49  |         this.lnkWishListPage = page.locator("div[class*='alert alert-success'] a[href*='route=account/wishlist']");
  50  |     }
  51  | 
  52  |     //methods
  53  |     async setQuantity(qty: string): Promise<void> {
  54  |         try {
  55  |             await this.txtQuantity.clear();
  56  |             await this.txtQuantity.fill(qty);
  57  |         } catch (error) {
  58  |             console.log(`Error duting updating Quantity in Product Page : ${error}`);
  59  |             throw (error);
  60  |         }
  61  |     }
  62  | 
  63  |     async addToCart(): Promise<void> {
  64  |         try {
  65  |             await this.btnAddToCart.waitFor({ state: 'visible', timeout: 10000 });
  66  |             const [response] = await Promise.all([
  67  |                 this.page.waitForResponse(
  68  |                     resp => resp.url().includes('route=checkout/cart/add') && resp.status() === 200,
  69  |                     { timeout: 10000 }
  70  |                 ),
  71  |                 this.btnAddToCart.click(),
  72  |             ]);
  73  |         } catch (error) {
  74  |             console.log(`Error during click of Add To Cart : ${error}`);
  75  |             throw (error);
  76  |         }
  77  |     }
  78  | 
  79  |     async isSuccessMsgVisible(): Promise<boolean> {
  80  |         try {
  81  |             await this.cnfMsg.waitFor({ state: 'visible', timeout: 10000 });
  82  |             console.log('Alert became visible at:', Date.now());
> 83  |             const msg: string = await this.cnfMsg.innerText();
      |                                                   ^ TimeoutError: locator.innerText: Timeout 15000ms exceeded.
  84  |             console.log('Alert text captured:', msg);
  85  |             if (msg.includes("Success: You have added")) {
  86  |                 return true;
  87  |             }
  88  |         } catch (error) {
  89  |             console.log(`Success messsage not found : ${error}`);
  90  |             throw (error);
  91  |         }
  92  |         return false;
  93  |     }
  94  | 
  95  |     async clickItemsToNavigate() {
  96  |         try {
  97  |             await this.btnItems.click();
  98  |         } catch (error) {
  99  |             console.log(`Error during Click of items button : ${error}`);
  100 |             throw (error);
  101 |         }
  102 |     }
  103 | 
  104 |     async clickViewCart(): Promise<shoppingCartPage> {
  105 |         try {
  106 |             await this.lnkViewCart.click();
  107 |             return new shoppingCartPage(this.page);
  108 |         } catch (error) {
  109 |             console.log(`Error during Click of items button : ${error}`);
  110 |             throw (error);
  111 |         }
  112 |     }
  113 | 
  114 |     async addProductToCart(qty: string) {
  115 |         try {
  116 |             await this.setQuantity(qty);
  117 |             await this.addToCart();
  118 |             await this.isSuccessMsgVisible();
  119 |         } catch (error) {
  120 |             console.log(`Add to Cart has some error : ${error}`);
  121 |             throw (error);
  122 |         }
  123 |     }
  124 | 
  125 |     async clickCompareProduct() {
  126 |         try {
  127 |             await this.btnCompareProduct.click();
  128 |         } catch (error) {
  129 |             console.log(`Exception during click of Compare Product : ${error}`);
  130 |             throw (error);
  131 |         }
  132 |     }
  133 |     async isCompareSuccessMsgVisible(): Promise<boolean> {
  134 |         try {
  135 |             await this.cnfMsg.waitFor({ state: 'visible', timeout: 10000 });
  136 |             let msg: string | null = await this.cnfMsg.textContent();
  137 |             return msg?.includes("product comparison") ?? false;
  138 |         } catch (error) {
  139 |             console.log(`Success messsage not found : ${error}`);
  140 |             throw (error);
  141 |         }
  142 |     }
  143 | 
  144 |     async naviageProdComaparisonPage(): Promise<prodComaparisonPage> {
  145 |         try {
  146 |             await this.lnkComaprisonPage.click();
  147 |             return new prodComaparisonPage(this.page);
  148 |         } catch (error) {
  149 |             console.log(`Exception during navigating to Product Comparison Page : ${error}`);
  150 |             throw (error);
  151 |         }
  152 |     }
  153 | 
  154 |     async getProductName(): Promise<string | null> {
  155 |         try {
  156 |             return await this.txtProductName.textContent();
  157 |         } catch (error) {
  158 |             console.log(`Exception while getting Product Name: ${error}`);
  159 |             throw (error);
  160 |         }
  161 |     }
  162 | 
  163 |     async getBrandName(): Promise<string | null> {
  164 |         try {
  165 |             return await this.txtBrand.textContent();
  166 |         } catch (error) {
  167 |             console.log(`Exception while getting Brand Name: ${error}`);
  168 |             throw (error);
  169 |         }
  170 |     }
  171 | 
  172 |     async getProductCode(): Promise<string | null> {
  173 |         try {
  174 |             return await this.txtProductCode.textContent();
  175 |         } catch (error) {
  176 |             console.log(`Exception while getting Product Code: ${error}`);
  177 |             throw (error);
  178 |         }
  179 |     }
  180 | 
  181 |     async getProductPrice(): Promise<string | null> {
  182 |         try {
  183 |             return await this.txtPrice.textContent();
```