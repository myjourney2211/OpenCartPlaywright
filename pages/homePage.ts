import { Page, Locator, expect } from "@playwright/test";
import { wishlistPage } from "./wishlishPage";
import { shoppingCartPage } from "./shoppingCartPage";

export class homePage {
    //variables
    private readonly page: Page;
    private readonly lnkMyAccount: Locator;
    private readonly lnkRegister: Locator;
    private readonly lnkLogin: Locator;
    private readonly txtSearchBox: Locator;
    private readonly btnSearch: Locator;
    private readonly lnkLogout: Locator;
    private readonly lnkWishlist: Locator;
    private readonly lblFeatured: Locator;
    private readonly lnkFeaturedProducts: Locator;
    private readonly btnAddToWishlistFromFeaturedProduct: Locator;
    private readonly cnfMsg: Locator;
    private readonly lnkWishListPageFromMsg: Locator;
    private readonly lnkCheckout: Locator;
    private readonly btnShoppingCart: Locator;

    //constructos
    constructor(page: Page) {
        this.page = page;
        this.lnkMyAccount = this.page.locator("a[title='My Account']");
        this.lnkRegister = this.page.locator("a[href='https://tutorialsninja.com/demo/index.php?route=account/register']");
        this.lnkLogin = this.page.locator("a[href='https://tutorialsninja.com/demo/index.php?route=account/login']");
        this.txtSearchBox = this.page.locator("input[placeholder='Search']");
        this.btnSearch = this.page.locator("button[class='btn btn-default btn-lg']");
        this.lnkLogout = this.page.locator("a[href='https://tutorialsninja.com/demo/index.php?route=account/logout']");
        this.lnkWishlist = this.page.locator('span:has-text("Wish List")');
        this.lblFeatured = this.page.locator("div[id='content'] h3");
        this.lnkFeaturedProducts = this.page.locator("div.caption h4 a");
        this.btnAddToWishlistFromFeaturedProduct = this.page.locator("div[class='button-group'] button[data-original-title*='Add to Wish List'] i");
        this.cnfMsg = this.page.locator("div.alert.alert-success");
        this.lnkWishListPageFromMsg = this.page.locator("div[class*='alert alert-success'] a[href*='route=account/wishlist']");
        this.lnkCheckout = this.page.locator(".fa.fa-share");
        this.btnShoppingCart = this.page.locator(".btn.btn-inverse.btn-block.btn-lg.dropdown-toggle span#cart-total");
    }

    //action methods
    async isHomePageExists() {
        let title = await this.page.title();
        if (title == "Your Store") {
            return true;
        }
        return false;
    }

    async clickMyAccount() {
        try {
            await this.lnkMyAccount.click();
        } catch (error) {
            console.log(`Exception Occured while clicking 'My Account' : ${error}`);
            throw error;
        }
    }

    async goToMyWishlistPage(): Promise<wishlistPage> {
        try {
            await this.lnkWishlist.click();
            return new wishlistPage(this.page);
        } catch (error) {
            console.log(`Exception Occured while clicking 'Wishlist' : ${error}`);
            throw error;
        }
    }

    async clickRegister() {
        try {
            await this.lnkRegister.click();
        } catch (error) {
            console.log(`Exception Occured while clicking 'Register' : ${error}`);
            throw error;
        }
    }

    async clickLogin() {
        try {
            await this.lnkLogin.click();
        } catch (error) {
            console.log(`Exception Occured while clicking 'Login' : ${error}`);
            throw error;
        }
    }

    async enterProductName(pName: string) {
        try {
            await this.txtSearchBox.clear();
            await this.txtSearchBox.pressSequentially(pName);
        } catch (error) {
            console.log(`Exception Occured while entering product name : ${error}`);
            throw error;
        }
    }

    async clickSearch() {
        try {
            await this.btnSearch.click();
        } catch (error) {
            console.log(`Exception Occured while clicking 'Search' : ${error}`);
            throw error;
        }
    }

    async loginPageNavigation() {
        try {
            await this.clickMyAccount();
            await this.clickLogin();
        } catch (error) {
            console.log(`Error during Login page navigation : ${error}`);
            throw (error);
        }
    }

    async isLogoutLinkAvailable(): Promise<boolean> {
        try {
            return await this.lnkLogout.isVisible();
        } catch (error) {
            console.log(`Exception during Logout link visibility : ${error}`);
            throw (error);
        }
    }

    async isFeaturedSectionAvailable(): Promise<boolean> {
        try {
            return await this.lblFeatured.isVisible();
        } catch (error) {
            console.log(`Exception during Featured label visibility : ${error}`);
            throw (error);
        }
    }

    async isFeaturedProductExists(productName: string): Promise<boolean> {
        try {
            const products = await this.lnkFeaturedProducts.all();
            for (const product of products) {
                let prodName = await product.textContent();
                if (prodName?.toLowerCase === productName.toLowerCase) {
                    return true;
                }
            }
        } catch (error) {
            console.log(`Exception during Related Product exists : ${error}`);
            throw (error);
        }
        return false;
    }

    async selectAddToWishListFromFeaturedProduct(productName: string): Promise<null> {
        try {
            const products = await this.lnkFeaturedProducts.all();
            const count = products.length;
            for (let i = 0; i < count; i++) {
                let prodName = await products[i].textContent();
                if (prodName?.toLowerCase() === productName.toLowerCase()) {
                    await this.btnAddToWishlistFromFeaturedProduct.nth(i).click();
                }
            }
        } catch (error) {
            console.log(`Error during selecting Product : ${error}`);
            throw (error);
        }
        return null;
    }

    async isWishlistSuccessMsgVisible(): Promise<boolean> {
        try {
            await this.cnfMsg.waitFor({ state: 'visible', timeout: 10000 });
            let msg: string | null = await this.cnfMsg.textContent();
            return msg?.includes("wish list") ?? false;
        } catch (error) {
            console.log(`Success messsage not found : ${error}`);
            throw (error);
        }
    }

    async navigateWishListPage(): Promise<wishlistPage> {
        try {
            await this.lnkWishListPageFromMsg.click();
            return new wishlistPage(this.page);
        } catch (error) {
            console.log(`Exception during navigating to WishList Page : ${error}`);
            throw (error);
        }
    }

    async isShoppingCartEmpty(): Promise<boolean> {
        try {
            const cartMsg = await this.btnShoppingCart.textContent();
            if (cartMsg === "0 item(s) - $0.00") {
                return true;
            }
        } catch (error) {
            console.log(`Exception during reading Shopping Cart item count:${error}`);
            throw (error);
        }
        return false;
    }

    async clickCheckout() {
        try {
            await this.lnkCheckout.waitFor({ state: "visible", timeout: 10000 });
            await this.lnkCheckout.click();
            return new shoppingCartPage(this.page);
        } catch (error) {
            console.log(`Exception during click of Checkout link : ${error}`);
            throw (error);
        }
    }

}