# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ProductDetailVerification.spec.ts >> Product Details verification Test2 @master @datadriven
- Location: tests\ProductDetailVerification.spec.ts:43:9

# Error details

```
Error: locator.textContent: Unexpected token "getByText(" while parsing css selector "page.getByText('Product Code')". Did you mean to CSS.escape it?
Call log:
  - waiting for page.getByText('Product Code')

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
        - textbox "Search" [ref=e37]: iPod Nano
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
          - /url: https://tutorialsninja.com/demo/index.php?route=product/search&search=iPod Nano
      - listitem [ref=e72]:
        - link "iPod Nano" [ref=e73] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=product/product&search=iPod Nano&product_id=36
    - generic [ref=e76]:
      - generic [ref=e77]:
        - list [ref=e78]:
          - listitem [ref=e79]:
            - link "iPod Nano" [ref=e80] [cursor=pointer]:
              - /url: https://tutorialsninja.com/demo/image/cache/catalog/demo/ipod_nano_1-500x500.jpg
              - img "iPod Nano" [ref=e81]
          - listitem [ref=e82]:
            - link "iPod Nano" [ref=e83] [cursor=pointer]:
              - /url: https://tutorialsninja.com/demo/image/cache/catalog/demo/ipod_nano_5-500x500.jpg
              - img "iPod Nano" [ref=e84]
          - listitem [ref=e85]:
            - link "iPod Nano" [ref=e86] [cursor=pointer]:
              - /url: https://tutorialsninja.com/demo/image/cache/catalog/demo/ipod_nano_4-500x500.jpg
              - img "iPod Nano" [ref=e87]
          - listitem [ref=e88]:
            - link "iPod Nano" [ref=e89] [cursor=pointer]:
              - /url: https://tutorialsninja.com/demo/image/cache/catalog/demo/ipod_nano_2-500x500.jpg
              - img "iPod Nano" [ref=e90]
          - listitem [ref=e91]:
            - link "iPod Nano" [ref=e92] [cursor=pointer]:
              - /url: https://tutorialsninja.com/demo/image/cache/catalog/demo/ipod_nano_3-500x500.jpg
              - img "iPod Nano" [ref=e93]
        - list [ref=e94]:
          - listitem [ref=e95]:
            - link "Description" [ref=e96]:
              - /url: "#tab-description"
          - listitem [ref=e97]:
            - link "Reviews (0)" [ref=e98] [cursor=pointer]:
              - /url: "#tab-review"
        - generic [ref=e99]:
          - generic [ref=e101]:
            - paragraph [ref=e102]:
              - strong [ref=e103]: Video in your pocket.
            - paragraph [ref=e104]: "Its the small iPod with one very big idea: video. The worlds most popular music player now lets you enjoy movies, TV shows, and more on a two-inch display thats 65% brighter than before."
            - paragraph [ref=e105]:
              - strong [ref=e106]: Cover Flow.
            - paragraph [ref=e107]:
              - text: Browse through your music collection by flipping through album art. Select an album to turn it over and see the track list.
              - strong [ref=e108]
            - paragraph [ref=e109]:
              - strong [ref=e110]: Enhanced interface.
            - paragraph [ref=e111]: Experience a whole new way to browse and view your music and video.
            - paragraph [ref=e112]:
              - strong [ref=e113]: Sleek and colorful.
            - paragraph [ref=e114]: With an anodized aluminum and polished stainless steel enclosure and a choice of five colors, iPod nano is dressed to impress.
            - paragraph [ref=e115]:
              - strong [ref=e116]: iTunes.
            - paragraph [ref=e117]: Available as a free download, iTunes makes it easy to browse and buy millions of songs, movies, TV shows, audiobooks, and games and download free podcasts all at the iTunes Store. And you can import your own music, manage your whole media library, and sync your iPod or iPhone with ease.
          - text: "* * *"
      - generic [ref=e118]:
        - generic [ref=e119]:
          - button "" [ref=e120] [cursor=pointer]:
            - generic [ref=e121]: 
          - button "" [ref=e122] [cursor=pointer]:
            - generic [ref=e123]: 
        - heading "iPod Nano" [level=1] [ref=e124]
        - list [ref=e125]:
          - listitem [ref=e126]:
            - text: "Brand:"
            - link "Apple" [ref=e127] [cursor=pointer]:
              - /url: https://tutorialsninja.com/demo/index.php?route=product/manufacturer/info&manufacturer_id=8
          - listitem [ref=e128]: Product Code:Product 9
          - listitem [ref=e129]: Availability:2-3 Days
        - list [ref=e130]:
          - listitem [ref=e131]:
            - heading "$122.00" [level=2] [ref=e132]
          - listitem [ref=e133]: Ex Tax:$100.00
          - listitem [ref=e134]: Price in reward points:100
        - generic [ref=e136]:
          - generic [ref=e137]: Qty
          - textbox "Qty" [ref=e138]: "1"
          - button "Add to Cart" [ref=e139] [cursor=pointer]
        - generic [ref=e140]:
          - paragraph [ref=e141]:
            - generic [ref=e143]: 
            - generic [ref=e145]: 
            - generic [ref=e147]: 
            - generic [ref=e149]: 
            - generic [ref=e151]: 
            - link "0 reviews" [ref=e152] [cursor=pointer]:
              - /url: ""
            - text: /
            - link "Write a review" [ref=e153] [cursor=pointer]:
              - /url: ""
          - separator [ref=e154]
  - contentinfo [ref=e155]:
    - generic [ref=e156]:
      - generic [ref=e157]:
        - generic [ref=e158]:
          - heading "Information" [level=5] [ref=e159]
          - list [ref=e160]:
            - listitem [ref=e161]:
              - link "About Us" [ref=e162] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=information/information&information_id=4
            - listitem [ref=e163]:
              - link "Delivery Information" [ref=e164] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=information/information&information_id=6
            - listitem [ref=e165]:
              - link "Privacy Policy" [ref=e166] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=information/information&information_id=3
            - listitem [ref=e167]:
              - link "Terms & Conditions" [ref=e168] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=information/information&information_id=5
        - generic [ref=e169]:
          - heading "Customer Service" [level=5] [ref=e170]
          - list [ref=e171]:
            - listitem [ref=e172]:
              - link "Contact Us" [ref=e173] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=information/contact
            - listitem [ref=e174]:
              - link "Returns" [ref=e175] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=account/return/add
            - listitem [ref=e176]:
              - link "Site Map" [ref=e177] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=information/sitemap
        - generic [ref=e178]:
          - heading "Extras" [level=5] [ref=e179]
          - list [ref=e180]:
            - listitem [ref=e181]:
              - link "Brands" [ref=e182] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=product/manufacturer
            - listitem [ref=e183]:
              - link "Gift Certificates" [ref=e184] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=account/voucher
            - listitem [ref=e185]:
              - link "Affiliate" [ref=e186] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=affiliate/login
            - listitem [ref=e187]:
              - link "Specials" [ref=e188] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=product/special
        - generic [ref=e189]:
          - heading "My Account" [level=5] [ref=e190]
          - list [ref=e191]:
            - listitem [ref=e192]:
              - link "My Account" [ref=e193] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=account/account
            - listitem [ref=e194]:
              - link "Order History" [ref=e195] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=account/order
            - listitem [ref=e196]:
              - link "Wish List" [ref=e197] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=account/wishlist
            - listitem [ref=e198]:
              - link "Newsletter" [ref=e199] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=account/newsletter
      - separator [ref=e200]
      - paragraph [ref=e201]:
        - text: Powered By
        - link "OpenCart" [ref=e202] [cursor=pointer]:
          - /url: http://www.opencart.com
        - text: Qafox.com © 2026
```

# Test source

```ts
  47  |         }
  48  |     }
  49  | 
  50  |     async addToCart() {
  51  |         try {
  52  |             await this.btnAddToCart.click();
  53  |         } catch (error) {
  54  |             console.log(`Error during click of Add To Cart : ${error}`);
  55  |             throw (error);
  56  |         }
  57  |     }
  58  | 
  59  |     async isSuccessMsgVisible(): Promise<boolean> {
  60  |         try {
  61  |             let msg: string | null = await this.cnfMsg.textContent();
  62  |             return msg?.includes("Success: You have added") ?? false;
  63  |         } catch (error) {
  64  |             console.log(`Success messsage not found : ${error}`);
  65  |             throw (error);
  66  |         }
  67  |     }
  68  | 
  69  |     async clickItemsToNavigate() {
  70  |         try {
  71  |             await this.btnItems.click();
  72  |         } catch (error) {
  73  |             console.log(`Error during Click of items button : ${error}`);
  74  |             throw (error);
  75  |         }
  76  |     }
  77  | 
  78  |     async clickViewCart(): Promise<shoppingCartPage> {
  79  |         try {
  80  |             await this.lnkViewCart.click();
  81  |             return new shoppingCartPage(this.page);
  82  |         } catch (error) {
  83  |             console.log(`Error during Click of items button : ${error}`);
  84  |             throw (error);
  85  |         }
  86  |     }
  87  | 
  88  |     async addProductToCart(qty: string) {
  89  |         try {
  90  |             await this.setQuantity(qty);
  91  |             await this.addToCart();
  92  |             await this.isSuccessMsgVisible();
  93  |         } catch (error) {
  94  |             console.log(`Add to Cart has some error : ${error}`);
  95  |             throw (error);
  96  |         }
  97  |     }
  98  | 
  99  |     async clickCompareProduct() {
  100 |         try {
  101 |             await this.btnCompareProduct.click();
  102 |         } catch (error) {
  103 |             console.log(`Exception during click of Compare Product : ${error}`);
  104 |             throw (error);
  105 |         }
  106 |     }
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
  117 |     async naviageProdComaparisonPage(): Promise<prodComaparisonPage> {
  118 |         try {
  119 |             await this.lnkComaprisonPage.click();
  120 |             return new prodComaparisonPage(this.page);
  121 |         } catch (error) {
  122 |             console.log(`Exception during navigating to Product Comparison Page : ${error}`);
  123 |             throw (error);
  124 |         }
  125 |     }
  126 | 
  127 |     async getProductName(): Promise<string | null> {
  128 |         try {
  129 |             return await this.txtProductName.textContent();
  130 |         } catch (error) {
  131 |             console.log(`Exception while getting Product Name: ${error}`);
  132 |             throw (error);
  133 |         }
  134 |     }
  135 | 
  136 |     async getBrandName(): Promise<string | null> {
  137 |         try {
  138 |             return await this.txtBrand.textContent();
  139 |         } catch (error) {
  140 |             console.log(`Exception while getting Brand Name: ${error}`);
  141 |             throw (error);
  142 |         }
  143 |     }
  144 | 
  145 |     async getProductCode(): Promise<string | null> {
  146 |         try {
> 147 |             return await this.txtProductCode.textContent();
      |                                              ^ Error: locator.textContent: Unexpected token "getByText(" while parsing css selector "page.getByText('Product Code')". Did you mean to CSS.escape it?
  148 |         } catch (error) {
  149 |             console.log(`Exception while getting Product Code: ${error}`);
  150 |             throw (error);
  151 |         }
  152 |     }
  153 | 
  154 |     async getProductPrice(): Promise<string | null> {
  155 |         try {
  156 |             return await this.txtPrice.textContent();
  157 |         } catch (error) {
  158 |             console.log(`Exception while getting Product Price: ${error}`);
  159 |             throw (error);
  160 |         }
  161 |     }
  162 | 
  163 | 
  164 | }
```