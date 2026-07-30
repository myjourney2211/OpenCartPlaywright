# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: AddToWishlist.spec.ts >> Add to Wishlist Test @sanity @master
- Location: tests\AddToWishlist.spec.ts:40:5

# Error details

```
Error: locator.textContent: Error: strict mode violation: locator('td[class=\'text-left\'] a') resolved to 5 elements:
    1) <a href="https://tutorialsninja.com/demo/index.php?route=product/product&product_id=36">iPod Nano</a> aka locator('#cart').getByText('iPod Nano')
    2) <a href="https://tutorialsninja.com/demo/index.php?route=product/product&product_id=48">iPod Classic</a> aka locator('#cart').getByText('iPod Classic')
    3) <a href="https://tutorialsninja.com/demo/index.php?route=product/product&product_id=36">iPod Nano</a> aka locator('#content').getByText('iPod Nano')
    4) <a href="https://tutorialsninja.com/demo/index.php?route=product/product&product_id=40">iPhone</a> aka getByText('iPhone')
    5) <a href="https://tutorialsninja.com/demo/index.php?route=product/product&product_id=48">iPod Classic</a> aka locator('#content').getByText('iPod Classic')

Call log:
  - waiting for locator('td[class=\'text-left\'] a')

```

# Test source

```ts
  1  | import { Page, Locator } from "@playwright/test";
  2  | import { shoppingCartPage } from "./shoppingCartPage";
  3  | 
  4  | export class wishlistPage {
  5  |     private readonly page: Page;
  6  |     //variables
  7  |     private readonly lblMyWishlist: Locator;
  8  |     private readonly btnAddToCart: Locator;
  9  |     private readonly btnRemove: Locator;
  10 |     private readonly btnContinue: Locator;
  11 |     private readonly lnkproduct: Locator;
  12 |     private readonly cnfMsg: Locator;
  13 |     private readonly lnkShoppingCart: Locator;
  14 | 
  15 |     //constructor
  16 |     constructor(page: Page) {
  17 |         this.page = page;
  18 |         this.lblMyWishlist = this.page.locator("div[id='content'] h2");
  19 |         this.btnAddToCart = this.page.locator("button[onclick*='cart.add']");
  20 |         this.btnRemove = this.page.locator(".btn.btn-danger");
  21 |         this.btnContinue = this.page.locator("a[class='btn btn-primary']");
  22 |         this.lnkproduct = this.page.locator("td[class='text-left'] a");
  23 |         this.cnfMsg = this.page.locator(".alert.alert-success.alert-dismissible")
  24 |         this.lnkShoppingCart = this.page.locator("page.getByText('shopping cart', { exact: true })");
  25 |         
  26 |     }
  27 | 
  28 |     //methods
  29 |     async isProductExists(prodName: string): Promise<boolean> {
  30 |         try {
> 31 |             const actualProduct = await this.lnkproduct.textContent();
     |                                                         ^ Error: locator.textContent: Error: strict mode violation: locator('td[class=\'text-left\'] a') resolved to 5 elements:
  32 |             return actualProduct?.includes(prodName) ?? false;
  33 |         } catch (error) {
  34 |             console.log(`Exception in My Wishlist :${error}`);
  35 |             throw (error);
  36 |         }
  37 |     }
  38 | 
  39 |     async isMyWishlistPageExists(): Promise<string | null> {
  40 |         try {
  41 |             return await this.lblMyWishlist.textContent();
  42 |         } catch (error) {
  43 |             console.log(`Exception during My Wishlist Page :${error}`);
  44 |             throw (error);
  45 |         }
  46 |     }
  47 | 
  48 |     async selectAddToCart(productName: string) {
  49 |         try {
  50 |             const products = await this.lnkproduct.all();
  51 |             const count = products.length;
  52 | 
  53 |             for (let i = 0; i < count; i++) {
  54 |                 let prodName1 = await products[i].textContent();
  55 |                 if (prodName1?.toLowerCase() === productName.toLowerCase()) {
  56 |                     await this.btnAddToCart.nth(i).click();
  57 |                 }
  58 |             }
  59 |         } catch (error) {
  60 |             console.log(`Error during Add To Cart from Wishlist : ${error}`);
  61 |             throw (error);
  62 |         }
  63 |         return null;
  64 |     }
  65 | 
  66 |     async isSuccessMsgVisible(): Promise<boolean> {
  67 |         try {
  68 |             let msg: string | null = await this.cnfMsg.textContent();
  69 |             return msg?.includes("Success: You have added") ?? false;
  70 |         } catch (error) {
  71 |             console.log(`Success messsage not found : ${error}`);
  72 |             throw (error);
  73 |         }
  74 |     }
  75 | 
  76 |     async goToShoppingCart(): Promise<shoppingCartPage> {
  77 |         try {
  78 |             await this.lnkShoppingCart.click();
  79 |             return new shoppingCartPage(this.page);
  80 |         } catch (error) {
  81 |             console.log(`Exception during navigation to Shopping Cart from Wishlist Page : ${error}`);
  82 |             throw (error);
  83 |         }
  84 |     }
  85 | 
  86 | }
  87 | 
  88 | 
```