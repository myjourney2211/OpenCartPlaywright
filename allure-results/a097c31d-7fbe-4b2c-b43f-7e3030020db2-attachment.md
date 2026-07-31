# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: AddToCompareProduct.spec.ts >> Login Test @sanity @master
- Location: tests\AddToCompareProduct.spec.ts:34:5

# Error details

```
TimeoutError: locator.textContent: Timeout 15000ms exceeded.
Call log:
  - waiting for locator('tbody tr td a strong')

```

# Test source

```ts
  1  | import { Page, Locator } from "@playwright/test";
  2  | 
  3  | export class prodComaparisonPage {
  4  |     private readonly page: Page;
  5  |     //variables
  6  |     private readonly lblPageHeading: Locator;
  7  |     private readonly lnkproduct: Locator;
  8  | 
  9  | 
  10 |     //constructor
  11 |     constructor(page: Page) {
  12 |         this.page = page;
  13 |         this.lblPageHeading = page.locator("div[id='content'] h1");
  14 |         this.lnkproduct = page.locator("tbody tr td a strong");
  15 | 
  16 |     }
  17 | 
  18 |     //methods
  19 |     async isProductExists(prodName: string): Promise<boolean> {
  20 |         try {
> 21 |             const actualProduct = await this.lnkproduct.textContent();
     |                                                         ^ TimeoutError: locator.textContent: Timeout 15000ms exceeded.
  22 |             return actualProduct?.includes(prodName) ?? false;
  23 |         } catch (error) {
  24 |             console.log(`Exception during Product Name Comparison :${error}`);
  25 |             throw (error);
  26 |         }
  27 |     }
  28 | 
  29 |     async isProductComparisonPageExists(): Promise<string | null> {
  30 |         try {
  31 |             return await this.lblPageHeading.textContent();
  32 |         } catch (error) {
  33 |             console.log(`Exception during Product Name Comparison :${error}`);
  34 |             throw (error);
  35 |         }
  36 |     }
  37 | 
  38 | 
  39 | 
  40 | }
```