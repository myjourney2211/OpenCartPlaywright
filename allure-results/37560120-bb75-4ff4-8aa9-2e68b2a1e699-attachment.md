# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: LogoutSessionAbruptBrowserClose.spec.ts >> Logout Session after Abrupt Browser Closure @sanity @master
- Location: tests\LogoutSessionAbruptBrowserClose.spec.ts:25:5

# Error details

```
Error: page.waitForTimeout: Target page, context or browser has been closed
```

# Page snapshot

```yaml
- generic [ref=e1]:
  - navigation [ref=e2]:
    - generic [ref=e3]:
      - button "$ Currency " [ref=e7] [cursor=pointer]:
        - strong [ref=e8]: $
        - text: Currency
        - generic [ref=e9]: 
      - list [ref=e11]:
        - listitem [ref=e12]:
          - link "" [ref=e13] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=information/contact
            - generic [ref=e14]: 
          - text: "123456789"
        - listitem [ref=e15]:
          - link " My Account" [expanded] [active] [ref=e16] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=account/account
            - generic [ref=e17]: 
            - text: My Account
          - list [ref=e19]:
            - listitem [ref=e20]:
              - link "My Account" [ref=e21] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=account/account
            - listitem [ref=e22]:
              - link "Order History" [ref=e23] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=account/order
            - listitem [ref=e24]:
              - link "Transactions" [ref=e25] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=account/transaction
            - listitem [ref=e26]:
              - link "Downloads" [ref=e27] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=account/download
            - listitem [ref=e28]:
              - link "Logout" [ref=e29] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=account/logout
        - listitem [ref=e30]:
          - link " Wish List (0)" [ref=e31] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=account/wishlist
            - generic [ref=e32]: 
            - text: Wish List (0)
        - listitem [ref=e33]:
          - link " Shopping Cart" [ref=e34] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=checkout/cart
            - generic [ref=e35]: 
            - text: Shopping Cart
        - listitem [ref=e36]:
          - link " Checkout" [ref=e37] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=checkout/checkout
            - generic [ref=e38]: 
            - text: Checkout
  - banner [ref=e39]:
    - generic [ref=e41]:
      - heading "Qafox.com" [level=1] [ref=e44]:
        - link "Qafox.com" [ref=e45] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=common/home
      - generic [ref=e47]:
        - textbox "Search" [ref=e48]
        - button "" [ref=e50] [cursor=pointer]:
          - generic [ref=e51]: 
      - button " 0 item(s) - $0.00" [ref=e54] [cursor=pointer]:
        - generic [ref=e55]: 
        - text: 0 item(s) - $0.00
  - navigation [ref=e57]:
    - generic: 
    - list [ref=e59]:
      - listitem [ref=e60]:
        - link "Desktops" [ref=e61] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=product/category&path=20
      - listitem [ref=e62]:
        - link "Laptops & Notebooks" [ref=e63] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=product/category&path=18
      - listitem [ref=e64]:
        - link "Components" [ref=e65] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=product/category&path=25
      - listitem [ref=e66]:
        - link "Tablets" [ref=e67] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=product/category&path=57
      - listitem [ref=e68]:
        - link "Software" [ref=e69] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=product/category&path=17
      - listitem [ref=e70]:
        - link "Phones & PDAs" [ref=e71] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=product/category&path=24
      - listitem [ref=e72]:
        - link "Cameras" [ref=e73] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=product/category&path=33
      - listitem [ref=e74]:
        - link "MP3 Players" [ref=e75] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=product/category&path=34
  - generic [ref=e78]:
    - generic [ref=e79]:
      - generic [ref=e81]:
        - img "MacBookAir" [ref=e83]
        - link "iPhone 6" [ref=e85] [cursor=pointer]:
          - /url: index.php?route=product/product&path=57&product_id=49
          - img "iPhone 6" [ref=e86]
        - img "MacBookAir" [ref=e88]
        - link "iPhone 6" [ref=e90] [cursor=pointer]:
          - /url: index.php?route=product/product&path=57&product_id=49
          - img "iPhone 6" [ref=e91]
      - generic:
        - generic [ref=e95] [cursor=pointer]: 
        - generic [ref=e96] [cursor=pointer]: 
    - heading "Featured" [level=3] [ref=e97]
    - generic [ref=e98]:
      - generic [ref=e100]:
        - link "MacBook" [ref=e102] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=product/product&product_id=43
          - img "MacBook" [ref=e103]
        - generic [ref=e104]:
          - heading "MacBook" [level=4] [ref=e105]:
            - link "MacBook" [ref=e106] [cursor=pointer]:
              - /url: https://tutorialsninja.com/demo/index.php?route=product/product&product_id=43
          - paragraph [ref=e107]: Intel Core 2 Duo processor Powered by an Intel Core 2 Duo processor at speeds up to 2.1..
          - paragraph [ref=e108]:
            - text: $602.00
            - generic [ref=e109]: Ex Tax:$500.00
        - generic [ref=e110]:
          - button " Add to Cart" [ref=e111] [cursor=pointer]:
            - generic [ref=e112]: 
            - text: Add to Cart
          - button "" [ref=e113] [cursor=pointer]:
            - generic [ref=e114]: 
          - button "" [ref=e115] [cursor=pointer]:
            - generic [ref=e116]: 
      - generic [ref=e118]:
        - link "iPhone" [ref=e120] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=product/product&product_id=40
          - img "iPhone" [ref=e121]
        - generic [ref=e122]:
          - heading "iPhone" [level=4] [ref=e123]:
            - link "iPhone" [ref=e124] [cursor=pointer]:
              - /url: https://tutorialsninja.com/demo/index.php?route=product/product&product_id=40
          - paragraph [ref=e125]: iPhone is a revolutionary new mobile phone that allows you to make a call by simply tapping a nam..
          - paragraph [ref=e126]:
            - text: $123.20
            - generic [ref=e127]: Ex Tax:$101.00
        - generic [ref=e128]:
          - button " Add to Cart" [ref=e129] [cursor=pointer]:
            - generic [ref=e130]: 
            - text: Add to Cart
          - button "" [ref=e131] [cursor=pointer]:
            - generic [ref=e132]: 
          - button "" [ref=e133] [cursor=pointer]:
            - generic [ref=e134]: 
      - generic [ref=e136]:
        - link "Apple Cinema 30\"" [ref=e138] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=product/product&product_id=42
          - img "Apple Cinema 30\"" [ref=e139]
        - generic [ref=e140]:
          - heading "Apple Cinema 30\"" [level=4] [ref=e141]:
            - link "Apple Cinema 30\"" [ref=e142] [cursor=pointer]:
              - /url: https://tutorialsninja.com/demo/index.php?route=product/product&product_id=42
          - paragraph [ref=e143]: The 30-inch Apple Cinema HD Display delivers an amazing 2560 x 1600 pixel resolution. Designed sp..
          - paragraph [ref=e144]:
            - text: $110.00 $122.00
            - generic [ref=e145]: Ex Tax:$90.00
        - generic [ref=e146]:
          - button " Add to Cart" [ref=e147] [cursor=pointer]:
            - generic [ref=e148]: 
            - text: Add to Cart
          - button "" [ref=e149] [cursor=pointer]:
            - generic [ref=e150]: 
          - button "" [ref=e151] [cursor=pointer]:
            - generic [ref=e152]: 
      - generic [ref=e154]:
        - link "Canon EOS 5D" [ref=e156] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=product/product&product_id=30
          - img "Canon EOS 5D" [ref=e157]
        - generic [ref=e158]:
          - heading "Canon EOS 5D" [level=4] [ref=e159]:
            - link "Canon EOS 5D" [ref=e160] [cursor=pointer]:
              - /url: https://tutorialsninja.com/demo/index.php?route=product/product&product_id=30
          - paragraph [ref=e161]: Canon's press material for the EOS 5D states that it 'defines (a) new D-SLR category', while we'r..
          - paragraph [ref=e162]:
            - text: $98.00 $122.00
            - generic [ref=e163]: Ex Tax:$80.00
        - generic [ref=e164]:
          - button " Add to Cart" [ref=e165] [cursor=pointer]:
            - generic [ref=e166]: 
            - text: Add to Cart
          - button "" [ref=e167] [cursor=pointer]:
            - generic [ref=e168]: 
          - button "" [ref=e169] [cursor=pointer]:
            - generic [ref=e170]: 
    - generic [ref=e171]:
      - generic [ref=e173]:
        - img "Harley Davidson" [ref=e175]
        - img "Dell" [ref=e177]
        - img "Disney" [ref=e179]
        - img "Starbucks" [ref=e181]
        - img "Nintendo" [ref=e183]
        - img "NFL" [ref=e185]
        - img "RedBull" [ref=e187]
        - img "Sony" [ref=e189]
        - img "Coca Cola" [ref=e191]
        - img "Burger King" [ref=e193]
        - img "Canon" [ref=e195]
        - img "Harley Davidson" [ref=e197]
        - img "Dell" [ref=e199]
        - img "Disney" [ref=e201]
        - img "Starbucks" [ref=e203]
        - img "Nintendo" [ref=e205]
        - img "NFL" [ref=e207]
        - img "RedBull" [ref=e209]
        - img "Sony" [ref=e211]
        - img "Coca Cola" [ref=e213]
        - img "Burger King" [ref=e215]
      - generic:
        - generic [ref=e228] [cursor=pointer]: 
        - generic [ref=e229] [cursor=pointer]: 
  - contentinfo [ref=e230]:
    - generic [ref=e231]:
      - generic [ref=e232]:
        - generic [ref=e233]:
          - heading "Information" [level=5] [ref=e234]
          - list [ref=e235]:
            - listitem [ref=e236]:
              - link "About Us" [ref=e237] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=information/information&information_id=4
            - listitem [ref=e238]:
              - link "Delivery Information" [ref=e239] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=information/information&information_id=6
            - listitem [ref=e240]:
              - link "Privacy Policy" [ref=e241] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=information/information&information_id=3
            - listitem [ref=e242]:
              - link "Terms & Conditions" [ref=e243] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=information/information&information_id=5
        - generic [ref=e244]:
          - heading "Customer Service" [level=5] [ref=e245]
          - list [ref=e246]:
            - listitem [ref=e247]:
              - link "Contact Us" [ref=e248] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=information/contact
            - listitem [ref=e249]:
              - link "Returns" [ref=e250] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=account/return/add
            - listitem [ref=e251]:
              - link "Site Map" [ref=e252] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=information/sitemap
        - generic [ref=e253]:
          - heading "Extras" [level=5] [ref=e254]
          - list [ref=e255]:
            - listitem [ref=e256]:
              - link "Brands" [ref=e257] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=product/manufacturer
            - listitem [ref=e258]:
              - link "Gift Certificates" [ref=e259] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=account/voucher
            - listitem [ref=e260]:
              - link "Affiliate" [ref=e261] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=affiliate/login
            - listitem [ref=e262]:
              - link "Specials" [ref=e263] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=product/special
        - generic [ref=e264]:
          - heading "My Account" [level=5] [ref=e265]
          - list [ref=e266]:
            - listitem [ref=e267]:
              - link "My Account" [ref=e268] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=account/account
            - listitem [ref=e269]:
              - link "Order History" [ref=e270] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=account/order
            - listitem [ref=e271]:
              - link "Wish List" [ref=e272] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=account/wishlist
            - listitem [ref=e273]:
              - link "Newsletter" [ref=e274] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=account/newsletter
      - separator [ref=e275]
      - paragraph [ref=e276]:
        - text: Powered By
        - link "OpenCart" [ref=e277] [cursor=pointer]:
          - /url: http://www.opencart.com
        - text: Qafox.com © 2026
```

# Test source

```ts
  1  | import { test, expect } from "@playwright/test";
  2  | import { homePage } from "../pages/homePage";
  3  | import { TestConfig } from "../test.config";
  4  | import { loginPage } from "../pages/loginPage";
  5  | import { myAccountPage } from "../pages/myAccountPage";
  6  | 
  7  | let config: TestConfig;
  8  | let home: homePage;
  9  | let loginpg: loginPage;
  10 | let myAccPg: myAccountPage;
  11 | 
  12 | test.beforeEach(async ({ page }) => {
  13 |     home = new homePage(page);
  14 |     loginpg = new loginPage(page);
  15 |     myAccPg = new myAccountPage(page);
  16 |     config = new TestConfig();
  17 |     await page.goto(config.appUrl);
  18 | })
  19 | 
  20 | test.afterEach(async ({ page }) => {
> 21 |     await page.waitForTimeout(3000);
     |                ^ Error: page.waitForTimeout: Target page, context or browser has been closed
  22 |     await page.close();
  23 | })
  24 | 
  25 | test("Logout Session after Abrupt Browser Closure @sanity @master", async ({ page }) => {
  26 |     await home.clickMyAccount();
  27 |     await home.clickLogin();
  28 | 
  29 |     await loginpg.setEmail(config.email);
  30 |     await loginpg.setPassword(config.password);
  31 | 
  32 |     await loginpg.clickLoginBtn();
  33 | 
  34 |     expect(await myAccPg.isMyAccountPageExists()).toBeTruthy();
  35 | 
  36 |     await page.close();
  37 |     // Get a new page from the SAME context (preserves session/cookies)
  38 |     const newPage = await page.context().newPage();
  39 | 
  40 |     // Re-create page objects pointing at the new page
  41 |     const home2 = new homePage(newPage);
  42 | 
  43 |     await newPage.goto(config.appUrl);
  44 | 
  45 |     await home2.clickMyAccount();
  46 | 
  47 |     expect(await home2.isLogoutLinkAvailable()).toBe(true);
  48 | })
  49 | 
```