# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: E2ETestCase.spec.ts >> End To End Test @master @E2ETest @vj
- Location: tests\E2ETestCase.spec.ts:64:5

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: "$244.00"
Received: "$122.00"
```

# Test source

```ts
  23  | import { randomDataGenerator } from "../utils/randomDataGenerator";
  24  | import { registrationPage } from "../pages/registrationPage";
  25  | import { searchResultPage } from "../pages/searchResultPage";
  26  | import { shoppingCartPage } from "../pages/shoppingCartPage";
  27  | import { checkOutPage } from "../pages/checkOutPage";
  28  | import { productPage } from "../pages/productPage";
  29  | 
  30  | 
  31  | let config: TestConfig;
  32  | let home: homePage;
  33  | let logOUT: logOut;
  34  | let loginPg: loginPage;
  35  | let accPG: myAccountPage;
  36  | let regisPg: registrationPage;
  37  | let searchPg: searchResultPage;
  38  | let shoppingCartPg: shoppingCartPage | undefined;
  39  | let checkOUTpg: checkOutPage;
  40  | let productPg: productPage;
  41  | 
  42  | //Hooks
  43  | test.beforeEach(async ({ page }) => {
  44  |     config = new TestConfig();
  45  |     await page.goto(config.appUrl);
  46  | 
  47  |     home = new homePage(page);
  48  |     logOUT = new logOut(page);
  49  |     loginPg = new loginPage(page);
  50  |     accPG = new myAccountPage(page);
  51  |     regisPg = new registrationPage(page);
  52  |     searchPg = new searchResultPage(page);
  53  |     shoppingCartPg = new shoppingCartPage(page);
  54  |     checkOUTpg = new checkOutPage(page);
  55  |     productPg = new productPage(page);
  56  | })
  57  | 
  58  | test.afterEach(async ({ page }) => {
  59  |     await page.waitForTimeout(3000);
  60  |     await page.close();
  61  | })
  62  | 
  63  | //test
  64  | test("End To End Test @master @E2ETest @vj", async ({ page }) => {
  65  | 
  66  |     //✍️ Register a new account
  67  |     await home.clickMyAccount();
  68  |     await home.clickRegister();
  69  | 
  70  |     let email: string = randomDataGenerator.getEmail();
  71  |     let pwd: string = randomDataGenerator.getPassword();
  72  | 
  73  |     await regisPg.completeRegistration(randomDataGenerator.getFirstName(), randomDataGenerator.getLastName(), email, randomDataGenerator.getPhoneNumber(), pwd);
  74  | 
  75  |     let msg: string | null = await regisPg.getConfirmationMsg();
  76  |     expect(msg).toContain("Your Account Has Been Created!");
  77  |     console.log("✅ Registration is Successfull");
  78  | 
  79  |     //👋 Logout after registration
  80  |     logOUT = await accPG.clickLogout();
  81  | 
  82  |     expect(logOUT.isContinueButtonVisible).toBeTruthy();
  83  | 
  84  |     home = await logOUT.clickContinue();
  85  |     expect(await home.isHomePageExists()).toBe(true);
  86  |     console.log("✅ Logout Successfull");
  87  | 
  88  |     // 🔑 Login with the same account
  89  |     home.loginPageNavigation();
  90  |     accPG = await loginPg.login(email, pwd);
  91  | 
  92  |     expect(await accPG.isMyAccountPageExists()).toBe(true);
  93  |     console.log("✅ Login Successfull");
  94  | 
  95  |     // 🛒 Search for a product and add it to the shopping cart
  96  |     let prod = config.productName7;
  97  |     await home.enterProductName(prod);
  98  |     await home.clickSearch();
  99  | 
  100 |     expect(await searchPg.isSearchResultsPageExists()).toBe(true);
  101 | 
  102 |     await searchPg.selectListView();
  103 | 
  104 |     expect(await searchPg.isProductExists(prod)).toBeTruthy();
  105 | 
  106 |     productPg = await searchPg.selectProduct(prod);
  107 | 
  108 |     let qty = config.productQuantity7;
  109 |     await productPg.setQuantity(qty);
  110 |     await productPg.addToCart();
  111 | 
  112 |     //await page.waitForTimeout(3000);
  113 | 
  114 |     expect(await productPg.isSuccessMsgVisible()).toBeTruthy();
  115 |     console.log("✅ Product Added to Cart Successfull");
  116 | 
  117 |     // ✅ Verify cart contents
  118 |     await productPg.clickItemsToNavigate();
  119 |     shoppingCartPg = await productPg.clickViewCart();
  120 | 
  121 |     expect(await shoppingCartPg?.isViewCartPageLoaded()).toBeTruthy();
  122 | 
> 123 |     expect(await shoppingCartPg?.getTotalPriceOfCart()).toBe(config.totalPrice2);
      |                                                         ^ Error: expect(received).toBe(expected) // Object.is equality
  124 |     console.log("✅ Cart contents are Verified");
  125 | 
  126 |     await shoppingCartPg.clickCheckout();
  127 | 
  128 |     expect(await checkOUTpg.isCheckOutPageAvailableByHeader()).toBeTruthy();
  129 | 
  130 |     await checkOUTpg.selectNewAddress();
  131 | 
  132 |     await checkOUTpg.setFirstName(randomDataGenerator.getFirstName());
  133 | 
  134 |     await checkOUTpg.setLastName(randomDataGenerator.getLastName());
  135 | 
  136 |     await checkOUTpg.setAddress1(randomDataGenerator.getRandomAddress());
  137 | 
  138 |     await checkOUTpg.setCity(randomDataGenerator.getRandomCity());
  139 | 
  140 |     await checkOUTpg.setPostCode(randomDataGenerator.getRandomPin());
  141 | 
  142 |     await checkOUTpg.setCountry(randomDataGenerator.getRandomCountry());
  143 | 
  144 |     await checkOUTpg.setState(randomDataGenerator.getRandomState());
  145 | 
  146 |     await checkOUTpg.selectContinue();
  147 | 
  148 | });
  149 | 
  150 | //functionalities
```