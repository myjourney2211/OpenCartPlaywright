# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: E2ETestCase.spec.ts >> End To End Test @master @E2ETest
- Location: tests\E2ETestCase.spec.ts:64:5

# Error details

```
Error: "logOut" is read-only.
```

# Test source

```ts
  1  | /**
  2  |  * Test Case: End-to-End Test on Demo E-commerce Application
  3  |  *
  4  |  * Purpose:
  5  |  * This test simulates a complete user flow on an e-commerce site.
  6  |  * 
  7  |  * Steps:
  8  |  * 1) ✍️ Register a new account
  9  |  * 2) 👋 Logout after registration
  10 |  * 3) 🔑 Login with the same account
  11 |  * 4) 🛒 Search for a product and add it to the shopping cart
  12 |  * 5) ✅ Verify cart contents
  13 |  * 6) ⛔ Attempt checkout (disabled since feature isn't available on demo site)
  14 |  */
  15 | 
  16 | //import all POMs
  17 | import { test, Page, expect } from "@playwright/test";
  18 | import { TestConfig } from "../test.config";
  19 | import { homePage } from "../pages/homePage";
  20 | import { logOut } from "../pages/logOut";
  21 | import { loginPage } from "../pages/loginPage";
  22 | import { myAccountPage } from "../pages/myAccountPage";
  23 | import { randomDataGenerator } from "../utils/randomDataGenerator";
  24 | import { registrationPage } from "../pages/registrationPage";
  25 | import { searchResultPage } from "../pages/searchResultPage";
  26 | import { shoppingCartPage } from "../pages/shoppingCartPage";
  27 | import { checkOutPage } from "../pages/checkOutPage";
  28 | import { productPage } from "../pages/productPage";
  29 | 
  30 | 
  31 | let config: TestConfig;
  32 | let home: homePage;
  33 | let logOUT: logOut;
  34 | let loginPg: loginPage;
  35 | let accPG: myAccountPage;
  36 | let regisPg: registrationPage;
  37 | let searchPg: searchResultPage;
  38 | let shoppingCartPg: shoppingCartPage;
  39 | let checkOUTpg: checkOutPage;
  40 | let productPg: productPage;
  41 | 
  42 | //Hooks
  43 | test.beforeEach(async ({ page }) => {
  44 |     config = new TestConfig();
  45 |     await page.goto(config.appUrl);
  46 | 
  47 |     home = new homePage(page);
  48 |     logOUT = new logOut(page);
  49 |     loginPg = new loginPage(page);
  50 |     accPG = new myAccountPage(page);
  51 |     regisPg = new registrationPage(page);
  52 |     searchPg = new searchResultPage(page);
  53 |     shoppingCartPg = new shoppingCartPage(page);
  54 |     checkOUTpg = new checkOutPage(page);
  55 |     productPg = new productPage(page);
  56 | })
  57 | 
  58 | test.afterEach(async ({ page }) => {
  59 |     await page.waitForTimeout(3000);
  60 |     await page.close();
  61 | })
  62 | 
  63 | //test
  64 | test("End To End Test @master @E2ETest", async ({ page }) => {
  65 | 
  66 |     //✍️ Register a new account
  67 |     await home.clickMyAccount();
  68 |     await home.clickRegister();
  69 | 
  70 |     let email: string = randomDataGenerator.getEmail();
  71 |     let pwd: string = randomDataGenerator.getPassword();
  72 | 
  73 |     await regisPg.completeRegistration(randomDataGenerator.getFirstName(), randomDataGenerator.getLastName(), email, randomDataGenerator.getPhoneNumber(), pwd);
  74 | 
  75 |     let msg: string | null = await regisPg.getConfirmationMsg();
  76 |     expect(msg).toContain("Your Account Has Been Created!");
  77 |     console.log("✅ Registration is Successfull");
  78 | 
> 79 |     logOUT: logOut = await accPG.clickLogout();
     |                                               ^ Error: "logOut" is read-only.
  80 |     
  81 |     expect(await logOUT.isContinueButtonVisible).toBeTruthy();
  82 | 
  83 |     home:homePage = await logOUT.clickContinue();
  84 |     expect(await home.isHomePageExists()).toBe(true);
  85 |     console.log("✅ Logout Successfull");
  86 | 
  87 | 
  88 |     // 🔑 Login with the same account
  89 |     // 🛒 Search for a product and add it to the shopping cart
  90 |     // ✅ Verify cart contents
  91 |     // ⛔ Attempt checkout (disabled since feature isn't available on demo site)
  92 | 
  93 | 
  94 | 
  95 | });
  96 | 
  97 | //functionalities
```