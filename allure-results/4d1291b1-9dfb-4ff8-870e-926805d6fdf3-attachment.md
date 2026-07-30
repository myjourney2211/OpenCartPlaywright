# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ProductDetailVerification.spec.ts >> Product Details verification Test1 @master @datadriven
- Location: tests\ProductDetailVerification.spec.ts:43:9

# Error details

```
Error: expect(received).toContain(expected) // indexOf

Expected substring: "Product Code:Product 20"
Received string:    "Product Code:product 20"
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
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
          - link " My Account" [ref=e16] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=account/account
            - generic [ref=e17]: 
            - text: My Account
        - listitem [ref=e19]:
          - link " Wish List (0)" [ref=e20] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=account/wishlist
            - generic [ref=e21]: 
            - text: Wish List (0)
        - listitem [ref=e22]:
          - link " Shopping Cart" [ref=e23] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=checkout/cart
            - generic [ref=e24]: 
            - text: Shopping Cart
        - listitem [ref=e25]:
          - link " Checkout" [ref=e26] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=checkout/checkout
            - generic [ref=e27]: 
            - text: Checkout
  - banner [ref=e28]:
    - generic [ref=e30]:
      - heading "Qafox.com" [level=1] [ref=e33]:
        - link "Qafox.com" [ref=e34] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=common/home
      - generic [ref=e36]:
        - textbox "Search" [ref=e37]: iPod Classic
        - button "" [ref=e39] [cursor=pointer]:
          - generic [ref=e40]: 
      - button " 0 item(s) - $0.00" [ref=e43] [cursor=pointer]:
        - generic [ref=e44]: 
        - text: 0 item(s) - $0.00
  - navigation [ref=e46]:
    - generic: 
    - list [ref=e48]:
      - listitem [ref=e49]:
        - link "Desktops" [ref=e50] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=product/category&path=20
      - listitem [ref=e51]:
        - link "Laptops & Notebooks" [ref=e52] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=product/category&path=18
      - listitem [ref=e53]:
        - link "Components" [ref=e54] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=product/category&path=25
      - listitem [ref=e55]:
        - link "Tablets" [ref=e56] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=product/category&path=57
      - listitem [ref=e57]:
        - link "Software" [ref=e58] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=product/category&path=17
      - listitem [ref=e59]:
        - link "Phones & PDAs" [ref=e60] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=product/category&path=24
      - listitem [ref=e61]:
        - link "Cameras" [ref=e62] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=product/category&path=33
      - listitem [ref=e63]:
        - link "MP3 Players" [ref=e64] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=product/category&path=34
  - generic [ref=e65]:
    - list [ref=e66]:
      - listitem [ref=e67]:
        - link "" [ref=e68] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=common/home
          - generic [ref=e69]: 
      - listitem [ref=e70]:
        - link "Search" [ref=e71] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=product/search&search=iPod Classic
      - listitem [ref=e72]:
        - link "iPod Classic" [ref=e73] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=product/product&search=iPod Classic&product_id=48
    - generic [ref=e76]:
      - generic [ref=e77]:
        - list [ref=e78]:
          - listitem [ref=e79]:
            - link "iPod Classic" [ref=e80] [cursor=pointer]:
              - /url: https://tutorialsninja.com/demo/image/cache/catalog/demo/ipod_classic_1-500x500.jpg
              - img "iPod Classic" [ref=e81]
          - listitem [ref=e82]:
            - link "iPod Classic" [ref=e83] [cursor=pointer]:
              - /url: https://tutorialsninja.com/demo/image/cache/catalog/demo/ipod_classic_4-500x500.jpg
              - img "iPod Classic" [ref=e84]
          - listitem [ref=e85]:
            - link "iPod Classic" [ref=e86] [cursor=pointer]:
              - /url: https://tutorialsninja.com/demo/image/cache/catalog/demo/ipod_classic_3-500x500.jpg
              - img "iPod Classic" [ref=e87]
          - listitem [ref=e88]:
            - link "iPod Classic" [ref=e89] [cursor=pointer]:
              - /url: https://tutorialsninja.com/demo/image/cache/catalog/demo/ipod_classic_2-500x500.jpg
              - img "iPod Classic" [ref=e90]
        - list [ref=e91]:
          - listitem [ref=e92]:
            - link "Description" [ref=e93]:
              - /url: "#tab-description"
          - listitem [ref=e94]:
            - link "Reviews (0)" [ref=e95] [cursor=pointer]:
              - /url: "#tab-review"
        - generic [ref=e96]:
          - generic [ref=e99]:
            - paragraph [ref=e100]:
              - strong [ref=e101]: More room to move.
            - paragraph [ref=e102]: With 80GB or 160GB of storage and up to 40 hours of battery life, the new iPod classic lets you enjoy up to 40,000 songs or up to 200 hours of video or any combination wherever you go.
            - paragraph [ref=e103]:
              - strong [ref=e104]: Cover Flow.
            - paragraph [ref=e105]: Browse through your music collection by flipping through album art. Select an album to turn it over and see the track list.
            - paragraph [ref=e106]:
              - strong [ref=e107]: Enhanced interface.
            - paragraph [ref=e108]: Experience a whole new way to browse and view your music and video.
            - paragraph [ref=e109]:
              - strong [ref=e110]: Sleeker design.
            - paragraph [ref=e111]: Beautiful, durable, and sleeker than ever, iPod classic now features an anodized aluminum and polished stainless steel enclosure with rounded edges.
          - text: "* * *"
      - generic [ref=e112]:
        - generic [ref=e113]:
          - button "" [ref=e114] [cursor=pointer]:
            - generic [ref=e115]: 
          - button "" [ref=e116] [cursor=pointer]:
            - generic [ref=e117]: 
        - heading "iPod Classic" [level=1] [ref=e118]
        - list [ref=e119]:
          - listitem [ref=e120]:
            - text: "Brand:"
            - link "Apple" [ref=e121] [cursor=pointer]:
              - /url: https://tutorialsninja.com/demo/index.php?route=product/manufacturer/info&manufacturer_id=8
          - listitem [ref=e122]: Product Code:product 20
          - listitem [ref=e123]: Availability:Out Of Stock
        - list [ref=e124]:
          - listitem [ref=e125]:
            - heading "$122.00" [level=2] [ref=e126]
          - listitem [ref=e127]: Ex Tax:$100.00
        - generic [ref=e129]:
          - generic [ref=e130]: Qty
          - textbox "Qty" [ref=e131]: "1"
          - button "Add to Cart" [ref=e132] [cursor=pointer]
        - generic [ref=e133]:
          - paragraph [ref=e134]:
            - generic [ref=e136]: 
            - generic [ref=e138]: 
            - generic [ref=e140]: 
            - generic [ref=e142]: 
            - generic [ref=e144]: 
            - link "0 reviews" [ref=e145] [cursor=pointer]:
              - /url: ""
            - text: /
            - link "Write a review" [ref=e146] [cursor=pointer]:
              - /url: ""
          - separator [ref=e147]
  - contentinfo [ref=e148]:
    - generic [ref=e149]:
      - generic [ref=e150]:
        - generic [ref=e151]:
          - heading "Information" [level=5] [ref=e152]
          - list [ref=e153]:
            - listitem [ref=e154]:
              - link "About Us" [ref=e155] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=information/information&information_id=4
            - listitem [ref=e156]:
              - link "Delivery Information" [ref=e157] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=information/information&information_id=6
            - listitem [ref=e158]:
              - link "Privacy Policy" [ref=e159] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=information/information&information_id=3
            - listitem [ref=e160]:
              - link "Terms & Conditions" [ref=e161] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=information/information&information_id=5
        - generic [ref=e162]:
          - heading "Customer Service" [level=5] [ref=e163]
          - list [ref=e164]:
            - listitem [ref=e165]:
              - link "Contact Us" [ref=e166] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=information/contact
            - listitem [ref=e167]:
              - link "Returns" [ref=e168] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=account/return/add
            - listitem [ref=e169]:
              - link "Site Map" [ref=e170] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=information/sitemap
        - generic [ref=e171]:
          - heading "Extras" [level=5] [ref=e172]
          - list [ref=e173]:
            - listitem [ref=e174]:
              - link "Brands" [ref=e175] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=product/manufacturer
            - listitem [ref=e176]:
              - link "Gift Certificates" [ref=e177] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=account/voucher
            - listitem [ref=e178]:
              - link "Affiliate" [ref=e179] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=affiliate/login
            - listitem [ref=e180]:
              - link "Specials" [ref=e181] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=product/special
        - generic [ref=e182]:
          - heading "My Account" [level=5] [ref=e183]
          - list [ref=e184]:
            - listitem [ref=e185]:
              - link "My Account" [ref=e186] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=account/account
            - listitem [ref=e187]:
              - link "Order History" [ref=e188] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=account/order
            - listitem [ref=e189]:
              - link "Wish List" [ref=e190] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=account/wishlist
            - listitem [ref=e191]:
              - link "Newsletter" [ref=e192] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=account/newsletter
      - separator [ref=e193]
      - paragraph [ref=e194]:
        - text: Powered By
        - link "OpenCart" [ref=e195] [cursor=pointer]:
          - /url: http://www.opencart.com
        - text: Qafox.com © 2026
```

# Test source

```ts
  1  | import { test, expect } from "@playwright/test";
  2  | import { homePage } from "../pages/homePage";
  3  | //import { loginPage } from "../pages/loginPage";
  4  | //import { myAccountPage } from "../pages/myAccountPage";
  5  | import { dataProvider } from "../utils/dataProvider";
  6  | import { TestConfig } from "../test.config";
  7  | import { searchResultPage } from "../pages/searchResultPage";
  8  | import { productPage } from "../pages/productPage";
  9  | 
  10 | /* //Load JSON test data
  11 | const jsonpath = "testdata/loginData.json";
  12 | const jsontestdata: any = dataProvider.getTestDataFromJson(jsonpath);
  13 | 
  14 | for (const data of jsontestdata) {
  15 |     test(`Login test with JSON Data : ${data.testname} @master @datadriven`, async ({ page }) => {
  16 | 
  17 |         const config = new TestConfig();
  18 |         await page.goto(config.appUrl);
  19 | 
  20 |         const home = new homePage(page);
  21 |         await home.clickMyAccount();
  22 |         await home.clickLogin();
  23 | 
  24 |         const loginPG = new loginPage(page);
  25 |         await loginPG.login(data.email, data.password);
  26 | 
  27 |         if (data.expected.toLowerCase() === "success") {
  28 |             const accPG = new myAccountPage(page);
  29 |             expect(await accPG.myAccountPageVisibility()).toBeTruthy();
  30 |         } else {
  31 |             const erroMessage = await loginPG.getLoginErrorMessage();
  32 |             expect(erroMessage).toBe('Warning: No match for E-Mail Address and/or Password.')
  33 |         }
  34 |     })
  35 | }
  36 |  */
  37 | 
  38 | //Load CSV test data
  39 | const csvpath = "testdata/productDetails.csv";
  40 | const csvtestdata: any = dataProvider.getTestDataFromCSV(csvpath);
  41 | 
  42 | for (const data of csvtestdata) {
  43 |     test(`Product Details verification ${data.testname} @master @datadriven`, async ({ page }) => {
  44 | 
  45 |         const config = new TestConfig();
  46 |         await page.goto(config.appUrl);
  47 | 
  48 |         const home = new homePage(page);
  49 |         await home.enterProductName(data.productname);
  50 |         await home.clickSearch();
  51 | 
  52 |         const searchResPg = new searchResultPage(page);
  53 |         await searchResPg.selectProduct(data.productname);
  54 | 
  55 |         const prodPg = new productPage(page);
  56 |         console.log(await prodPg.getProductName());
  57 |         console.log(await prodPg.getBrandName());
  58 |         console.log(await prodPg.getProductCode());
  59 |         console.log(await prodPg.getProductPrice());
  60 |         expect(await prodPg.getProductName()).toContain(data.productname);
  61 |         expect(await prodPg.getBrandName()).toContain(data.brand);
> 62 |         expect(await prodPg.getProductCode()).toContain(data.productcode);
     |                                               ^ Error: expect(received).toContain(expected) // indexOf
  63 |         expect(await prodPg.getProductPrice()).toContain(data.price);
  64 |     })
  65 | }
  66 | 
```