# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: AddToWishlist.spec.ts >> Add to Wishlist Test @sanity @master
- Location: tests\AddToWishlist.spec.ts:40:5

# Error details

```
TimeoutError: locator.textContent: Timeout 15000ms exceeded.
Call log:
  - waiting for locator('div.alert.alert-success.alert-dismissible')

```

# Test source

```ts
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
  62  |     async selectProduct(productName: string): Promise<productPage> {
  63  |         try {
  64  |             const products = await this.searchProducts.all();
  65  |             for (const product of products) {
  66  |                 let prodName = await product.textContent();
  67  |                 if (prodName?.toLowerCase() === productName.toLowerCase()) {
  68  |                     await product.click();
  69  |                     return new productPage(this.page);
  70  |                 }
  71  |             }
  72  |             throw new Error(`Product not found: ${productName}`);
  73  |         } catch (error) {
  74  |             console.log(`Error during selecting Product : ${error}`);
  75  |             throw (error);
  76  |         }
  77  |         //return false;
  78  |     }
  79  | 
  80  |     async selectlistViewProductComapre(productName: string): Promise<null> {
  81  |         try {
  82  |             const products = await this.searchProducts.all();
  83  |             const count = products.length;
  84  | 
  85  |             for (let i = 0; i < count; i++) {
  86  |                 let prodName1 = await products[i].textContent();
  87  |                 if (prodName1?.toLowerCase() === productName.toLowerCase()) {
  88  |                     await this.btnCompareProduct.nth(i).click();
  89  |                 }
  90  |             }
  91  |         } catch (error) {
  92  |             console.log(`Error during Product Comparison page navigation : ${error}`);
  93  |             throw (error);
  94  |         }
  95  |         return null;
  96  |     }
  97  | 
  98  |     async selectListView(): Promise<void> {
  99  |         try {
  100 |             await this.btnListView.click();
  101 |         } catch (error) {
  102 |             console.log(`Exception during click of List view button : ${error}`);
  103 |             throw (error);
  104 |         }
  105 |     }
  106 | 
  107 |     async isCompareSuccessMsgVisible(): Promise<boolean> {
  108 |         try {
  109 |             let msg: string | null = await this.cnfMsg.textContent();
  110 |             return msg?.includes("product comparison") ?? false;
  111 |         } catch (error) {
  112 |             console.log(`Success messsage not found : ${error}`);
  113 |             throw (error);
  114 |         }
  115 |     }
  116 | 
  117 |     async isWishListSuccessMsgVisible(): Promise<boolean> {
  118 |         try {
> 119 |             let msg: string | null = await this.cnfMsg.textContent();
      |                                                        ^ TimeoutError: locator.textContent: Timeout 15000ms exceeded.
  120 |             return msg?.includes("wish list") ?? false;
  121 |         } catch (error) {
  122 |             console.log(`Success messsage not found : ${error}`);
  123 |             throw (error);
  124 |         }
  125 |     }
  126 | 
  127 |     async naviageProdComaparisonPage(): Promise<prodComaparisonPage> {
  128 |         try {
  129 |             await this.lnkComaprisonPage.click();
  130 |             return new prodComaparisonPage(this.page);
  131 |         } catch (error) {
  132 |             console.log(`Exception during navigating to Product Comparison Page : ${error}`);
  133 |             throw (error);
  134 |         }
  135 |     }
  136 | 
  137 |     async clickAddToWishlist(productName: string): Promise<void> {
  138 |         try {
  139 |             const products = await this.searchProducts.all();
  140 |             const count = products.length;
  141 | 
  142 |             for (let i = 0; i < count; i++) {
  143 |                 let prodName1 = await products[i].textContent();
  144 |                 if (prodName1?.toLowerCase() === productName.toLowerCase()) {
  145 |                     await this.btnAddToWishlist.nth(i).click();
  146 |                 }
  147 |             }
  148 |         } catch (error) {
  149 |             console.log(`Error during Add To Cart from Wishlist : ${error}`);
  150 |             throw (error);
  151 |         }
  152 |     }
  153 | }
```