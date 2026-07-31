# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: CompareProductFromListView.spec.ts >> Login Test @sanity @master
- Location: tests\CompareProductFromListView.spec.ts:34:5

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for locator('div[class=\'product-layout product-list col-xs-12\'] button:nth-child(3)').first()
    - locator resolved to <button title="" type="button" data-toggle="tooltip" onclick="compare.add('36');" data-original-title="Compare this Product">…</button>
  - attempting click action
    - waiting for element to be visible, enabled and stable
    - element is not stable
  - retrying click action
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling

```

# Test source

```ts
  1   | import { Page, Locator } from "@playwright/test";
  2   | import { productPage } from "../pages/productPage";
  3   | import { prodComaparisonPage } from "./prodComparisonPage";
  4   | 
  5   | export class searchResultPage {
  6   |     private readonly page: Page;
  7   | 
  8   |     //variabale
  9   |     private readonly searchPageHeader: Locator;
  10  |     private readonly searchProducts: Locator;
  11  |     private readonly msgNoProductFound: Locator;
  12  |     private readonly btnCompareProduct: Locator;
  13  |     private readonly btnListView: Locator;
  14  |     private readonly cnfMsg: Locator;
  15  |     private readonly lnkComaprisonPage: Locator;
  16  |     private readonly btnAddToWishlist: Locator;
  17  | 
  18  |     //constructor
  19  |     constructor(page: Page) {
  20  |         this.page = page;
  21  |         this.searchPageHeader = page.locator("div#content h1");
  22  |         this.searchProducts = page.locator("div.caption h4 a");
  23  |         this.msgNoProductFound = page.getByText('There is no product that matches the search criteria.');
  24  |         this.btnCompareProduct = page.locator("div[class='product-layout product-list col-xs-12'] button:nth-child(3)");
  25  |         this.btnListView = page.locator("#list-view");
  26  |         this.cnfMsg = page.locator("div.alert.alert-success.alert-dismissible");
  27  |         this.lnkComaprisonPage = page.locator("div.alert.alert-success.alert-dismissible a[href*='route=product/compare']");
  28  |         this.btnAddToWishlist = page.locator("button[data-original-title*='Add to Wish List'] i");
  29  |     }
  30  | 
  31  |     //method
  32  | 
  33  |     async isSearchResultsPageExists(): Promise<boolean> {
  34  |         try {
  35  |             const headerText: string | null = await this.searchPageHeader.textContent();
  36  |             return headerText?.includes('Search -') ?? false;
  37  |         } catch (error) {
  38  |             console.log(`Error in Search Reulsts Page : ${error}`);
  39  |             throw (error);
  40  |         }
  41  |     }
  42  | 
  43  |     async isProductExists(productName: string) {
  44  |         try {
  45  |             const products = await this.searchProducts.all();
  46  |             for (const product of products) {
  47  |                 let prodName = await product.textContent();
  48  |                 if (prodName?.toLowerCase === productName.toLowerCase) {
  49  |                     return true;
  50  |                 }
  51  |             }
  52  |         } catch (error) {
  53  |             console.log(`Error during Product exists : ${error}`);
  54  |             throw (error);
  55  |         }
  56  |         //Non-Existing Product
  57  |         if (await this.msgNoProductFound.isVisible()) {
  58  |             return false;
  59  |         }
  60  |     }
  61  | 
  62  |     async selectProduct(productName: string): Promise<productPage | null> {
  63  |         try {
  64  |             const products = await this.searchProducts.all();
  65  |             for (const product of products) {
  66  |                 let prodName = await product.textContent();
  67  |                 if (prodName?.toLowerCase() === productName.toLowerCase()) {
  68  |                     await product.click();
  69  |                     return new productPage(this.page);
  70  |                 }
  71  |             }
  72  |         } catch (error) {
  73  |             console.log(`Error during selecting Product : ${error}`);
  74  |             throw (error);
  75  |         }
  76  |         return null;
  77  |     }
  78  | 
  79  |     async selectlistViewProductComapre(productName: string): Promise<null> {
  80  |         try {
  81  |             const products = await this.searchProducts.all();
  82  |             const count = products.length;
  83  | 
  84  |             for (let i = 0; i < count; i++) {
  85  |                 let prodName1 = await products[i].textContent();
  86  |                 if (prodName1?.toLowerCase() === productName.toLowerCase()) {
> 87  |                     await this.btnCompareProduct.nth(i).click();
      |                                                         ^ Error: locator.click: Target page, context or browser has been closed
  88  |                 }
  89  |             }
  90  |         } catch (error) {
  91  |             console.log(`Error during Product Comparison page navigation : ${error}`);
  92  |             throw (error);
  93  |         }
  94  |         return null;
  95  |     }
  96  | 
  97  |     async selectListView(): Promise<void> {
  98  |         try {
  99  |             await this.btnListView.click();
  100 |         } catch (error) {
  101 |             console.log(`Exception during click of List view button : ${error}`);
  102 |             throw (error);
  103 |         }
  104 |     }
  105 | 
  106 |     async isCompareSuccessMsgVisible(): Promise<boolean> {
  107 |         try {
  108 |             let msg: string | null = await this.cnfMsg.textContent();
  109 |             return msg?.includes("product comparison") ?? false;
  110 |         } catch (error) {
  111 |             console.log(`Success messsage not found : ${error}`);
  112 |             throw (error);
  113 |         }
  114 |     }
  115 | 
  116 |         async isWishListSuccessMsgVisible(): Promise<boolean> {
  117 |         try {
  118 |             let msg: string | null = await this.cnfMsg.textContent();
  119 |             return msg?.includes("wish list") ?? false;
  120 |         } catch (error) {
  121 |             console.log(`Success messsage not found : ${error}`);
  122 |             throw (error);
  123 |         }
  124 |     }
  125 | 
  126 |     async naviageProdComaparisonPage(): Promise<prodComaparisonPage> {
  127 |         try {
  128 |             await this.lnkComaprisonPage.click();
  129 |             return new prodComaparisonPage(this.page);
  130 |         } catch (error) {
  131 |             console.log(`Exception during navigating to Product Comparison Page : ${error}`);
  132 |             throw (error);
  133 |         }
  134 |     }
  135 | 
  136 |     async clickAddToWishlist(productName: string): Promise<void> {
  137 |         try {
  138 |             const products = await this.searchProducts.all();
  139 |             const count = products.length;
  140 | 
  141 |             for (let i = 0; i < count; i++) {
  142 |                 let prodName1 = await products[i].textContent();
  143 |                 if (prodName1?.toLowerCase() === productName.toLowerCase()) {
  144 |                     await this.btnAddToWishlist.nth(i).click();
  145 |                 }
  146 |             }
  147 |         } catch (error) {
  148 |             console.log(`Error during Add To Cart from Wishlist : ${error}`);
  149 |             throw (error);
  150 |         }
  151 |     }
  152 | }
```