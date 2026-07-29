import { Page, Locator } from "@playwright/test";
import { shoppingCartPage } from "./shoppingCartPage";
import { prodComaparisonPage } from "./prodComparisonPage";

export class productPage {

    private readonly page: Page;
    //variables for locators
    private readonly txtQuantity: Locator;
    private readonly btnAddToCart: Locator;
    private readonly cnfMsg: Locator;
    private readonly btnItems: Locator;
    private readonly lnkViewCart: Locator;
    private readonly btnCompareProduct: Locator;
    private readonly lnkComaprisonPage: Locator;

    //constructor
    constructor(page: Page) {
        this.page = page;

        //Initialize the locators with CSS selectors
        this.txtQuantity = page.locator("#input-quantity");
        this.btnAddToCart = page.locator("#button-cart");
        this.cnfMsg = page.locator("div.alert.alert-success.alert-dismissible");
        this.btnItems = page.locator("div#cart");
        this.lnkViewCart = page.locator("strong:has-text('View Cart')");
        this.btnCompareProduct = page.locator("#product-product div.btn-group button:nth-child(2)");
        this.lnkComaprisonPage = page.locator("div.alert.alert-success.alert-dismissible a[href*='route=product/compare']");
    }

    //methods
    async setQuantity(qty: string) {
        try {
            await this.txtQuantity.clear();
            await this.txtQuantity.fill(qty);
        } catch (error) {
            console.log(`Error duting updating Quantity in Product Page : ${error}`);
            throw (error);
        }
    }

    async addToCart() {
        try {
            await this.btnAddToCart.click();
        } catch (error) {
            console.log(`Error during click of Add To Cart : ${error}`);
            throw (error);
        }
    }

    async isSuccessMsgVisible(): Promise<boolean> {
        try {
            let msg: string | null = await this.cnfMsg.textContent();
            return msg?.includes("Success: You have added") ?? false;
        } catch (error) {
            console.log(`Success messsage not found : ${error}`);
            throw (error);
        }
    }

    async clickItemsToNavigate() {
        try {
            await this.btnItems.click();
        } catch (error) {
            console.log(`Error during Click of items button : ${error}`);
            throw (error);
        }
    }

    async clickViewCart(): Promise<shoppingCartPage> {
        try {
            await this.lnkViewCart.click();
            return new shoppingCartPage(this.page);
        } catch (error) {
            console.log(`Error during Click of items button : ${error}`);
            throw (error);
        }
    }

    async addProductToCart(qty: string) {
        try {
            await this.setQuantity(qty);
            await this.addToCart();
            await this.isSuccessMsgVisible();
        } catch (error) {
            console.log(`Add to Cart has some error : ${error}`);
            throw (error);
        }
    }

    async clickCompareProduct() {
        try {
            await this.btnCompareProduct.click();
        } catch (error) {
            console.log(`Exception during click of Compare Product : ${error}`);
            throw (error);
        }
    }
    async isCompareSuccessMsgVisible(): Promise<boolean> {
        try {
            let msg: string | null = await this.cnfMsg.textContent();
            return msg?.includes("product comparison") ?? false;
        } catch (error) {
            console.log(`Success messsage not found : ${error}`);
            throw (error);
        }
    }

    async naviageProdComaparisonPage(): Promise<prodComaparisonPage> {
        try {
            await this.lnkComaprisonPage.click();
            return new prodComaparisonPage(this.page);
        } catch (error) {
            console.log(`Exception during navigating to Product Comparison Page : ${error}`);
            throw (error);
        }
    }


}