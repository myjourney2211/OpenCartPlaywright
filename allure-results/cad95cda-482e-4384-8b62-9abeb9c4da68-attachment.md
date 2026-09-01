# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: AddFeaturedProductsToWishlist.spec.ts >> Add Featured Products Test @sanity @master @vj
- Location: tests\AddFeaturedProductsToWishlist.spec.ts:40:5

# Error details

```
TimeoutError: locator.waitFor: Timeout 10000ms exceeded.
Call log:
  - waiting for locator('div.alert.alert-success') to be visible

```

# Test source

```ts
  70  |     async clickRegister() {
  71  |         try {
  72  |             await this.lnkRegister.click();
  73  |         } catch (error) {
  74  |             console.log(`Exception Occured while clicking 'Register' : ${error}`);
  75  |             throw error;
  76  |         }
  77  |     }
  78  | 
  79  |     async clickLogin() {
  80  |         try {
  81  |             await this.lnkLogin.click();
  82  |         } catch (error) {
  83  |             console.log(`Exception Occured while clicking 'Login' : ${error}`);
  84  |             throw error;
  85  |         }
  86  |     }
  87  | 
  88  |     async enterProductName(pName: string) {
  89  |         try {
  90  |             await this.txtSearchBox.clear();
  91  |             await this.txtSearchBox.pressSequentially(pName);
  92  |         } catch (error) {
  93  |             console.log(`Exception Occured while entering product name : ${error}`);
  94  |             throw error;
  95  |         }
  96  |     }
  97  | 
  98  |     async clickSearch() {
  99  |         try {
  100 |             await this.btnSearch.click();
  101 |         } catch (error) {
  102 |             console.log(`Exception Occured while clicking 'Search' : ${error}`);
  103 |             throw error;
  104 |         }
  105 |     }
  106 | 
  107 |     async loginPageNavigation() {
  108 |         try {
  109 |             await this.clickMyAccount();
  110 |             await this.clickLogin();
  111 |         } catch (error) {
  112 |             console.log(`Error during Login page navigation : ${error}`);
  113 |             throw (error);
  114 |         }
  115 |     }
  116 | 
  117 |     async isLogoutLinkAvailable(): Promise<boolean> {
  118 |         try {
  119 |             return await this.lnkLogout.isVisible();
  120 |         } catch (error) {
  121 |             console.log(`Exception during Logout link visibility : ${error}`);
  122 |             throw (error);
  123 |         }
  124 |     }
  125 | 
  126 |     async isFeaturedSectionAvailable(): Promise<boolean> {
  127 |         try {
  128 |             return await this.lblFeatured.isVisible();
  129 |         } catch (error) {
  130 |             console.log(`Exception during Featured label visibility : ${error}`);
  131 |             throw (error);
  132 |         }
  133 |     }
  134 | 
  135 |     async isFeaturedProductExists(productName: string): Promise<boolean> {
  136 |         try {
  137 |             const products = await this.lnkFeaturedProducts.all();
  138 |             for (const product of products) {
  139 |                 let prodName = await product.textContent();
  140 |                 if (prodName?.toLowerCase === productName.toLowerCase) {
  141 |                     return true;
  142 |                 }
  143 |             }
  144 |         } catch (error) {
  145 |             console.log(`Exception during Related Product exists : ${error}`);
  146 |             throw (error);
  147 |         }
  148 |         return false;
  149 |     }
  150 | 
  151 |     async selectAddToWishListFromFeaturedProduct(productName: string): Promise<null> {
  152 |         try {
  153 |             const products = await this.lnkFeaturedProducts.all();
  154 |             const count = products.length;
  155 |             for (let i = 0; i < count; i++) {
  156 |                 let prodName = await products[i].textContent();
  157 |                 if (prodName?.toLowerCase() === productName.toLowerCase()) {
  158 |                     await this.btnAddToWishlistFromFeaturedProduct.nth(i).click();
  159 |                 }
  160 |             }
  161 |         } catch (error) {
  162 |             console.log(`Error during selecting Product : ${error}`);
  163 |             throw (error);
  164 |         }
  165 |         return null;
  166 |     }
  167 | 
  168 |     async isWishlistSuccessMsgVisible(): Promise<boolean> {
  169 |         try {
> 170 |             await this.cnfMsg.waitFor({ state: 'visible', timeout: 10000 });
      |                               ^ TimeoutError: locator.waitFor: Timeout 10000ms exceeded.
  171 |             let msg: string | null = await this.cnfMsg.textContent();
  172 |             return msg?.includes("wish list") ?? false;
  173 |         } catch (error) {
  174 |             console.log(`Success messsage not found : ${error}`);
  175 |             throw (error);
  176 |         }
  177 |     }
  178 | 
  179 |     async navigateWishListPage(): Promise<wishlistPage> {
  180 |         try {
  181 |             await this.lnkWishListPageFromMsg.click();
  182 |             return new wishlistPage(this.page);
  183 |         } catch (error) {
  184 |             console.log(`Exception during navigating to WishList Page : ${error}`);
  185 |             throw (error);
  186 |         }
  187 |     }
  188 | 
  189 |     async isShoppingCartEmpty(): Promise<boolean> {
  190 |         try {
  191 |             const cartMsg = await this.btnShoppingCart.textContent();
  192 |             if (cartMsg === "0 item(s) - $0.00") {
  193 |                 return true;
  194 |             }
  195 |         } catch (error) {
  196 |             console.log(`Exception during reading Shopping Cart item count:${error}`);
  197 |             throw (error);
  198 |         }
  199 |         return false;
  200 |     }
  201 | 
  202 |     async clickCheckout() {
  203 |         try {
  204 |             await this.lnkCheckout.waitFor({ state: "visible", timeout: 10000 });
  205 |             await this.lnkCheckout.click();
  206 |             return new shoppingCartPage(this.page);
  207 |         } catch (error) {
  208 |             console.log(`Exception during click of Checkout link : ${error}`);
  209 |             throw (error);
  210 |         }
  211 |     }
  212 | 
  213 | }
```