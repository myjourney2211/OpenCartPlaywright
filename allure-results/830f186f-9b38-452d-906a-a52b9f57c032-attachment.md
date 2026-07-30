# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: AddToWishlist.spec.ts >> Add to Wishlist Test @sanity @master
- Location: tests\AddToWishlist.spec.ts:40:5

# Error details

```
Error: locator.click: Error: strict mode violation: locator('.fa.fa-heart') resolved to 2 elements:
    1) <i class="fa fa-heart"></i> aka getByRole('link', { name: ' Wish List (3)' })
    2) <i class="fa fa-heart"></i> aka getByRole('button', { description: 'Add to Wish List', exact: true })

Call log:
  - waiting for locator('.fa.fa-heart')

```

# Test source

```ts
  1   | import { Page, Locator } from "@playwright/test";
  2   | import { wishlistPage } from "./wishlishPage";
  3   | 
  4   | export class homePage {
  5   |     //variables
  6   |     private readonly page: Page;
  7   |     private readonly lnkMyAccount: Locator;
  8   |     private readonly lnkRegister: Locator;
  9   |     private readonly lnkLogin: Locator;
  10  |     private readonly txtSearchBox: Locator;
  11  |     private readonly btnSearch: Locator;
  12  |     private readonly lnkLogout: Locator;
  13  |     private readonly lnkWishlist: Locator;
  14  | 
  15  |     //constructos
  16  |     constructor(page: Page) {
  17  |         this.page = page;
  18  |         this.lnkMyAccount = this.page.locator("a[title='My Account']");
  19  |         this.lnkRegister = this.page.locator("a[href='https://tutorialsninja.com/demo/index.php?route=account/register']");
  20  |         this.lnkLogin = this.page.locator("a[href='https://tutorialsninja.com/demo/index.php?route=account/login']");
  21  |         this.txtSearchBox = this.page.locator("input[placeholder='Search']");
  22  |         this.btnSearch = this.page.locator("button[class='btn btn-default btn-lg']");
  23  |         this.lnkLogout = this.page.locator("a[href='https://tutorialsninja.com/demo/index.php?route=account/logout']");
  24  |         this.lnkWishlist = this.page.locator(".fa.fa-heart");
  25  |     }
  26  | 
  27  |     //action methods
  28  |     async isHomePageExists() {
  29  |         let title = await this.page.title();
  30  |         if (title == "Your Store") {
  31  |             return true;
  32  |         }
  33  |         return false;
  34  |     }
  35  | 
  36  |     async clickMyAccount() {
  37  |         try {
  38  |             await this.lnkMyAccount.click();
  39  |         } catch (error) {
  40  |             console.log(`Exception Occured while clicking 'My Account' : ${error}`);
  41  |             throw error;
  42  |         }
  43  |     }
  44  | 
  45  |     async goToMyWishlistPage(): Promise<wishlistPage> {
  46  |         try {
> 47  |             await this.lnkWishlist.click();
      |                                    ^ Error: locator.click: Error: strict mode violation: locator('.fa.fa-heart') resolved to 2 elements:
  48  |             return new wishlistPage(this.page);
  49  |         } catch (error) {
  50  |             console.log(`Exception Occured while clicking 'Wishlist' : ${error}`);
  51  |             throw error;
  52  |         }
  53  |     }
  54  | 
  55  |     async clickRegister() {
  56  |         try {
  57  |             await this.lnkRegister.click();
  58  |         } catch (error) {
  59  |             console.log(`Exception Occured while clicking 'Register' : ${error}`);
  60  |             throw error;
  61  |         }
  62  |     }
  63  | 
  64  |     async clickLogin() {
  65  |         try {
  66  |             await this.lnkLogin.click();
  67  |         } catch (error) {
  68  |             console.log(`Exception Occured while clicking 'Login' : ${error}`);
  69  |             throw error;
  70  |         }
  71  |     }
  72  | 
  73  |     async enterProductName(pName: string) {
  74  |         try {
  75  |             await this.txtSearchBox.clear();
  76  |             await this.txtSearchBox.pressSequentially(pName);
  77  |         } catch (error) {
  78  |             console.log(`Exception Occured while entering product name : ${error}`);
  79  |             throw error;
  80  |         }
  81  |     }
  82  | 
  83  |     async clickSearch() {
  84  |         try {
  85  |             await this.btnSearch.click();
  86  |         } catch (error) {
  87  |             console.log(`Exception Occured while clicking 'Search' : ${error}`);
  88  |             throw error;
  89  |         }
  90  |     }
  91  | 
  92  |     async loginPageNavigation() {
  93  |         try {
  94  |             await this.clickMyAccount();
  95  |             await this.clickLogin();
  96  |         } catch (error) {
  97  |             console.log(`Error during Login page navigation : ${error}`);
  98  |             throw (error);
  99  |         }
  100 |     }
  101 | 
  102 |     async isLogoutLinkAvailable(): Promise<boolean> {
  103 |         try {
  104 |             return await this.lnkLogout.isVisible();
  105 |         } catch (error) {
  106 |             console.log(`Exception during Logout link visibility : ${error}`);
  107 |             throw (error);
  108 |         }
  109 |     }
  110 | 
  111 | 
  112 | }
```