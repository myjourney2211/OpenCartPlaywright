# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: SearchProducts.spec.ts >> Search Products Test - Existing Product @master @regression
- Location: tests\SearchProducts.spec.ts:24:5

# Error details

```
Error: locator.isVisible: Unexpected token "getByText(" while parsing css selector "page.getByText('There is no product that matches the search criteria.')". Did you mean to CSS.escape it?
Call log:
    - checking visibility of page.getByText('There is no product that matches the search criteria.')

```

# Test source

```ts
  1  | import { Page, Locator } from "@playwright/test";
  2  | import { productPage } from "../pages/productPage";
  3  | 
  4  | export class searchResultPage {
  5  |     private readonly page: Page;
  6  | 
  7  |     //variabale
  8  |     private readonly searchPageHeader: Locator;
  9  |     private readonly searchProducts: Locator;
  10 |     private readonly msgNoProductFound: Locator;
  11 | 
  12 |     //constructor
  13 |     constructor(page: Page) {
  14 |         this.page = page;
  15 |         this.searchPageHeader = page.locator("div#content h1");
  16 |         this.searchProducts = page.locator("div.caption h4 a");
  17 |         this.msgNoProductFound = page.locator("page.getByText('There is no product that matches the search criteria.')");
  18 |     }
  19 | 
  20 |     //method
  21 | 
  22 |     async isSearchResultsPageExists(): Promise<boolean> {
  23 |         try {
  24 |             const headerText: string | null = await this.searchPageHeader.textContent();
  25 |             return headerText?.includes('Search -') ?? false;
  26 |         } catch (error) {
  27 |             console.log(`Error in Search Reulsts Page : ${error}`);
  28 |             throw (error);
  29 |         }
  30 |     }
  31 | 
  32 |     async isProductExists(productName: string) {
  33 |         try {
  34 |             const products = await this.searchProducts.all();
  35 |             for (const product of products) {
  36 |                 let prodName = await product.textContent();
  37 |                 if (prodName?.toLowerCase === productName.toLowerCase) {
  38 |                     return true;
  39 |                 }
  40 |             }
  41 |         } catch (error) {
  42 |             console.log(`Error during Product exists : ${error}`);
  43 |             throw (error);
  44 |         }
> 45 |         if (await this.msgNoProductFound.isVisible()) {
     |                                          ^ Error: locator.isVisible: Unexpected token "getByText(" while parsing css selector "page.getByText('There is no product that matches the search criteria.')". Did you mean to CSS.escape it?
  46 |             return false;
  47 |         }
  48 |     }
  49 | 
  50 |     async selectProduct(productName: string): Promise<productPage | null> {
  51 |         try {
  52 |             const products = await this.searchProducts.all();
  53 |             for (const product of products) {
  54 |                 let prodName = await product.textContent();
  55 |                 if (prodName?.toLowerCase === productName.toLowerCase) {
  56 |                     await product.click();
  57 |                     return new productPage(this.page);
  58 |                 }
  59 |             }
  60 |         } catch (error) {
  61 |             console.log(`Error during selecting Product : ${error}`);
  62 |             throw (error);
  63 |         }
  64 |         return null;
  65 |     }
  66 | }
```