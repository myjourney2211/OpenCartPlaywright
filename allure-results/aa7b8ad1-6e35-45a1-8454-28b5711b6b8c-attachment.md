# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: CompareProductFromListView.spec.ts >> Login Test @sanity @master
- Location: tests\CompareProductFromListView.spec.ts:34:5

# Error details

```
Error: locator.click: Error: strict mode violation: locator('div[class=\'product-layout product-list col-xs-12\'] button:nth-child(3)') resolved to 4 elements:
    1) <button title="" type="button" data-toggle="tooltip" onclick="compare.add('48');" data-original-title="Compare this Product">…</button> aka getByRole('button').filter({ hasText: /^$/ }).nth(4)
    2) <button title="" type="button" data-toggle="tooltip" onclick="compare.add('36');" data-original-title="Compare this Product">…</button> aka locator('div:nth-child(2) > .product-thumb > div:nth-child(2) > .button-group > button:nth-child(3)')
    3) <button title="" type="button" data-toggle="tooltip" onclick="compare.add('34');" data-original-title="Compare this Product">…</button> aka locator('div:nth-child(3) > .product-thumb > div:nth-child(2) > .button-group > button:nth-child(3)')
    4) <button title="" type="button" data-toggle="tooltip" onclick="compare.add('32');" data-original-title="Compare this Product">…</button> aka locator('div:nth-child(4) > .product-thumb > div:nth-child(2) > .button-group > button:nth-child(3)')

Call log:
  - waiting for locator('div[class=\'product-layout product-list col-xs-12\'] button:nth-child(3)')

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
  16  | 
  17  |     //constructor
  18  |     constructor(page: Page) {
  19  |         this.page = page;
  20  |         this.searchPageHeader = page.locator("div#content h1");
  21  |         this.searchProducts = page.locator("div.caption h4 a");
  22  |         this.msgNoProductFound = page.getByText('There is no product that matches the search criteria.');
  23  |         this.btnCompareProduct = page.locator("div[class='product-layout product-list col-xs-12'] button:nth-child(3)");
  24  |         this.btnListView = page.locator("#list-view");
  25  |         this.cnfMsg = page.locator("div.alert.alert-success.alert-dismissible");
  26  |         this.lnkComaprisonPage = page.locator("div.alert.alert-success.alert-dismissible a[href*='route=product/compare']");
  27  |     }
  28  | 
  29  |     //method
  30  | 
  31  |     async isSearchResultsPageExists(): Promise<boolean> {
  32  |         try {
  33  |             const headerText: string | null = await this.searchPageHeader.textContent();
  34  |             return headerText?.includes('Search -') ?? false;
  35  |         } catch (error) {
  36  |             console.log(`Error in Search Reulsts Page : ${error}`);
  37  |             throw (error);
  38  |         }
  39  |     }
  40  | 
  41  |     async isProductExists(productName: string) {
  42  |         try {
  43  |             const products = await this.searchProducts.all();
  44  |             for (const product of products) {
  45  |                 let prodName = await product.textContent();
  46  |                 if (prodName?.toLowerCase === productName.toLowerCase) {
  47  |                     return true;
  48  |                 }
  49  |             }
  50  |         } catch (error) {
  51  |             console.log(`Error during Product exists : ${error}`);
  52  |             throw (error);
  53  |         }
  54  |         //Non-Existing Product
  55  |         if (await this.msgNoProductFound.isVisible()) {
  56  |             return false;
  57  |         }
  58  |     }
  59  | 
  60  |     async selectProduct(productName: string): Promise<productPage | null> {
  61  |         try {
  62  |             const products = await this.searchProducts.all();
  63  |             for (const product of products) {
  64  |                 let prodName = await product.textContent();
  65  |                 if (prodName?.toLowerCase === productName.toLowerCase) {
  66  |                     await product.click();
  67  |                     return new productPage(this.page);
  68  |                 }
  69  |             }
  70  |         } catch (error) {
  71  |             console.log(`Error during selecting Product : ${error}`);
  72  |             throw (error);
  73  |         }
  74  |         return null;
  75  |     }
  76  | 
  77  |     async selectlistViewProductComapre(productName: string): Promise<null> {
  78  |         try {
  79  |             const products = await this.searchProducts.all();
  80  |             const count = products.length;
  81  |             console.log(count);
  82  |             for (const product of products) {
  83  |                 let prodName = await product.textContent();
  84  |                 if (prodName?.toLowerCase === productName.toLowerCase) {
> 85  |                     await this.btnCompareProduct.click();
      |                                                  ^ Error: locator.click: Error: strict mode violation: locator('div[class=\'product-layout product-list col-xs-12\'] button:nth-child(3)') resolved to 4 elements:
  86  |                 }
  87  |             }
  88  |         } catch (error) {
  89  |             console.log(`Error during Product Comparison page navigation : ${error}`);
  90  |             throw (error);
  91  |         }
  92  |         return null;
  93  |     }
  94  | 
  95  |     async selectListView(): Promise<void> {
  96  |         try {
  97  |             await this.btnListView.click();
  98  |         } catch (error) {
  99  |             console.log(`Exception during click of List view button : ${error}`);
  100 |             throw (error);
  101 |         }
  102 |     }
  103 | 
  104 |     async isCompareSuccessMsgVisible(): Promise<boolean> {
  105 |         try {
  106 |             let msg: string | null = await this.cnfMsg.textContent();
  107 |             return msg?.includes("product comparison") ?? false;
  108 |         } catch (error) {
  109 |             console.log(`Success messsage not found : ${error}`);
  110 |             throw (error);
  111 |         }
  112 |     }
  113 | 
  114 |     async naviageProdComaparisonPage(): Promise<prodComaparisonPage> {
  115 |         try {
  116 |             await this.lnkComaprisonPage.click();
  117 |             return new prodComaparisonPage(this.page);
  118 |         } catch (error) {
  119 |             console.log(`Exception during navigating to Product Comparison Page : ${error}`);
  120 |             throw (error);
  121 |         }
  122 |     }
  123 | }
```