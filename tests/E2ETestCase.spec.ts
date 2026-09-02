/**
 * Test Case: End-to-End Test on Demo E-commerce Application
 *
 * Purpose:
 * This test simulates a complete user flow on an e-commerce site.
 * 
 * Steps:
 * 1) ✍️ Register a new account
 * 2) 👋 Logout after registration
 * 3) 🔑 Login with the same account
 * 4) 🛒 Search for a product and add it to the shopping cart
 * 5) ✅ Verify cart contents
 * 6) ⛔ Attempt checkout (disabled since feature isn't available on demo site)
 */

//import all POMs
import { test, expect } from "@playwright/test";
import { TestConfig } from "../test.config";
import { homePage } from "../pages/homePage";
import { logOut } from "../pages/logOut";
import { loginPage } from "../pages/loginPage";
import { myAccountPage } from "../pages/myAccountPage";
import { randomDataGenerator } from "../utils/randomDataGenerator";
import { registrationPage } from "../pages/registrationPage";
import { searchResultPage } from "../pages/searchResultPage";
import { shoppingCartPage } from "../pages/shoppingCartPage";
import { checkOutPage } from "../pages/checkOutPage";
import { productPage } from "../pages/productPage";
import { orderConfirmationPage } from "../pages/orderConfirmationPage";


let config: TestConfig;
let home: homePage;
let logOUT: logOut;
let loginPg: loginPage;
let accPG: myAccountPage;
let regisPg: registrationPage;
let searchPg: searchResultPage;
let shoppingCartPg: shoppingCartPage | undefined;
let checkOUTpg: checkOutPage;
let productPg: productPage;
let orderConfPg: orderConfirmationPage;

//Hooks
test.beforeEach(async ({ page }) => {
    config = new TestConfig();
    await page.goto(config.appUrl);

    home = new homePage(page);
    logOUT = new logOut(page);
    loginPg = new loginPage(page);
    accPG = new myAccountPage(page);
    regisPg = new registrationPage(page);
    searchPg = new searchResultPage(page);
    shoppingCartPg = new shoppingCartPage(page);
    checkOUTpg = new checkOutPage(page);
    productPg = new productPage(page);
    orderConfPg = new orderConfirmationPage(page);
})

test.afterEach(async ({ page }) => {
    await page.waitForTimeout(3000);
    await page.close();
})

//test
test("End To End Test @master @E2ETest @vj", async ({ page }) => {

    //✍️ Register a new account
    await home.clickMyAccount();
    await home.clickRegister();

    let email: string = randomDataGenerator.getEmail();
    let pwd: string = randomDataGenerator.getPassword();

    await regisPg.completeRegistration(randomDataGenerator.getFirstName(), randomDataGenerator.getLastName(), email, randomDataGenerator.getPhoneNumber(), pwd);

    let msg: string | null = await regisPg.getConfirmationMsg();
    expect(msg).toContain("Your Account Has Been Created!");
    //console.log("✅ Registration is Successfull");

    //👋 Logout after registration
    logOUT = await accPG.clickLogout();

    expect(logOUT.isContinueButtonVisible).toBeTruthy();

    home = await logOUT.clickContinue();
    expect(await home.isHomePageExists()).toBe(true);
    //console.log("✅ Logout Successfull");

    // 🔑 Login with the same account
    home.loginPageNavigation();
    accPG = await loginPg.login(email, pwd);

    expect(await accPG.isMyAccountPageExists()).toBe(true);
    //console.log("✅ Login Successfull");

    // 🛒 Search for a product and add it to the shopping cart
    let prod = config.productName7;
    await home.enterProductName(prod);
    await home.clickSearch();

    expect(await searchPg.isSearchResultsPageExists()).toBe(true);

    await searchPg.selectListView();

    expect(await searchPg.isProductExists(prod)).toBeTruthy();

    productPg = await searchPg.selectProduct(prod);

    let qty = config.productQuantity7;
    await productPg.setQuantity(qty);
    await productPg.addToCart();

    //await page.waitForTimeout(3000);

    expect(await productPg.isSuccessMsgVisible()).toBeTruthy();
    //console.log("✅ Product Added to Cart Successfull");

    // ✅ Verify cart contents
    await productPg.clickItemsToNavigate();
    shoppingCartPg = await productPg.clickViewCart();

    expect(await shoppingCartPg?.isViewCartPageLoaded()).toBeTruthy();

    expect(await shoppingCartPg?.getTotalPriceOfCart()).toBe(config.totalPrice7);
    //console.log("✅ Cart contents are Verified");

    await shoppingCartPg.clickCheckout();

    expect(await checkOUTpg.isCheckOutPageAvailableByHeader()).toBeTruthy();

    //await checkOUTpg.selectNewAddress();

    await checkOUTpg.setFirstName(randomDataGenerator.getFirstName());

    await checkOUTpg.setLastName(randomDataGenerator.getLastName());

    await checkOUTpg.setAddress1(randomDataGenerator.getRandomAddress());

    await checkOUTpg.setCity(randomDataGenerator.getRandomCity());

    await checkOUTpg.setPostCode(randomDataGenerator.getRandomPin());

    //await checkOUTpg.setCountry(randomDataGenerator.getRandomCountry());
    await checkOUTpg.setCountry("Iceland");

    //await checkOUTpg.setState(randomDataGenerator.getRandomState());
    await checkOUTpg.setState("Austurland");

    await checkOUTpg.selectContinue();

    await checkOUTpg.selectExistingAddress();

    await checkOUTpg.selectContinueDeliveryDetails();

    await checkOUTpg.selectContinueDeliveryMethod();

    await checkOUTpg.checkTermsandCondition();

    await checkOUTpg.selectContinuePaymentMethod();

    await checkOUTpg.selectConfirmOrder();

    expect(await orderConfPg.isOrderConfirmationPageAvailable()).toBeTruthy();

    await orderConfPg.selectContinueButton();

    expect(await home.isHomePageExists()).toBeTruthy();
});
//

//functionalities