# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: E2ETestCase.spec.ts >> End To End Test @master @E2ETest @vj
- Location: tests\E2ETestCase.spec.ts:67:5

# Error details

```
Error: expect(received).toBeTruthy()

Received: false
```

# Test source

```ts
  65  | 
  66  | //test
  67  | test("End To End Test @master @E2ETest @vj", async ({ page }) => {
  68  | 
  69  |     //✍️ Register a new account
  70  |     await home.clickMyAccount();
  71  |     await home.clickRegister();
  72  | 
  73  |     let email: string = randomDataGenerator.getEmail();
  74  |     let pwd: string = randomDataGenerator.getPassword();
  75  | 
  76  |     await regisPg.completeRegistration(randomDataGenerator.getFirstName(), randomDataGenerator.getLastName(), email, randomDataGenerator.getPhoneNumber(), pwd);
  77  | 
  78  |     let msg: string | null = await regisPg.getConfirmationMsg();
  79  |     expect(msg).toContain("Your Account Has Been Created!");
  80  |     console.log("✅ Registration is Successfull");
  81  | 
  82  |     //👋 Logout after registration
  83  |     logOUT = await accPG.clickLogout();
  84  | 
  85  |     expect(logOUT.isContinueButtonVisible).toBeTruthy();
  86  | 
  87  |     home = await logOUT.clickContinue();
  88  |     expect(await home.isHomePageExists()).toBe(true);
  89  |     console.log("✅ Logout Successfull");
  90  | 
  91  |     // 🔑 Login with the same account
  92  |     home.loginPageNavigation();
  93  |     accPG = await loginPg.login(email, pwd);
  94  | 
  95  |     expect(await accPG.isMyAccountPageExists()).toBe(true);
  96  |     console.log("✅ Login Successfull");
  97  | 
  98  |     // 🛒 Search for a product and add it to the shopping cart
  99  |     let prod = config.productName7;
  100 |     await home.enterProductName(prod);
  101 |     await home.clickSearch();
  102 | 
  103 |     expect(await searchPg.isSearchResultsPageExists()).toBe(true);
  104 | 
  105 |     await searchPg.selectListView();
  106 | 
  107 |     expect(await searchPg.isProductExists(prod)).toBeTruthy();
  108 | 
  109 |     productPg = await searchPg.selectProduct(prod);
  110 | 
  111 |     let qty = config.productQuantity7;
  112 |     await productPg.setQuantity(qty);
  113 |     await productPg.addToCart();
  114 | 
  115 |     //await page.waitForTimeout(3000);
  116 | 
  117 |     expect(await productPg.isSuccessMsgVisible()).toBeTruthy();
  118 |     console.log("✅ Product Added to Cart Successfull");
  119 | 
  120 |     // ✅ Verify cart contents
  121 |     await productPg.clickItemsToNavigate();
  122 |     shoppingCartPg = await productPg.clickViewCart();
  123 | 
  124 |     expect(await shoppingCartPg?.isViewCartPageLoaded()).toBeTruthy();
  125 | 
  126 |     expect(await shoppingCartPg?.getTotalPriceOfCart()).toBe(config.totalPrice7);
  127 |     console.log("✅ Cart contents are Verified");
  128 | 
  129 |     await shoppingCartPg.clickCheckout();
  130 | 
  131 |     expect(await checkOUTpg.isCheckOutPageAvailableByHeader()).toBeTruthy();
  132 | 
  133 |     //await checkOUTpg.selectNewAddress();
  134 | 
  135 |     await checkOUTpg.setFirstName(randomDataGenerator.getFirstName());
  136 | 
  137 |     await checkOUTpg.setLastName(randomDataGenerator.getLastName());
  138 | 
  139 |     await checkOUTpg.setAddress1(randomDataGenerator.getRandomAddress());
  140 | 
  141 |     await checkOUTpg.setCity(randomDataGenerator.getRandomCity());
  142 | 
  143 |     await checkOUTpg.setPostCode(randomDataGenerator.getRandomPin());
  144 | 
  145 |     //await checkOUTpg.setCountry(randomDataGenerator.getRandomCountry());
  146 |     await checkOUTpg.setCountry("Iceland");
  147 | 
  148 |     //await checkOUTpg.setState(randomDataGenerator.getRandomState());
  149 |     await checkOUTpg.setState("Austurland");
  150 | 
  151 |     await checkOUTpg.selectContinue();
  152 | 
  153 |     await checkOUTpg.selectExistingAddress();
  154 | 
  155 |     await checkOUTpg.selectContinueDeliveryDetails();
  156 | 
  157 |     await checkOUTpg.selectContinueDeliveryMethod();
  158 | 
  159 |     await checkOUTpg.checkTermsandCondition();
  160 | 
  161 |     await checkOUTpg.selectContinuePaymentMethod();
  162 | 
  163 |     await checkOUTpg.selectConfirmOrder();
  164 | 
> 165 |     expect(await orderConfPg.isOrderConfirmationPageAvailable()).toBeTruthy();
      |                                                                  ^ Error: expect(received).toBeTruthy()
  166 | 
  167 |     await orderConfPg.selectContinueButton();
  168 | 
  169 |     expect(await home.isHomePageExists()).toBeTruthy();
  170 | });
  171 | 
  172 | 
  173 | //functionalities
```