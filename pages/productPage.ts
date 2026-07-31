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
    private readonly txtProductName: Locator;
    private readonly txtBrand: Locator;
    private readonly txtProductCode: Locator;
    private readonly txtPrice: Locator;
    private readonly txtAvailability: Locator;
    private readonly txtExclTaxPrice: Locator;

    //constructor
    constructor(page: Page) {
        this.page = page;

        //Initialize the locators with CSS selectors
        this.txtQuantity = page.locator("#input-quantity");
        this.btnAddToCart = page.locator("#button-cart");
        this.cnfMsg = page.locator("div.alert.alert-success");
        this.btnItems = page.locator("div#cart");
        this.lnkViewCart = page.locator("strong:has-text('View Cart')");
        this.btnCompareProduct = page.locator("#product-product div.btn-group button:nth-child(2)");
        this.lnkComaprisonPage = page.locator("div.alert.alert-success.alert-dismissible a[href*='route=product/compare']");
        this.txtProductName = page.locator("div#content h1");
        this.txtBrand = page.locator("a[href*='route=product/manufacturer/info&manufacturer_id']");
        this.txtProductCode = page.getByText('Product Code');
        this.txtPrice = page.locator("ul.list-unstyled li h2");
        this.txtExclTaxPrice = page.getByText('Ex Tax');
        this.txtAvailability = page.getByText('Availability');
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
            await this.cnfMsg.waitFor({ state: 'visible', timeout: 10000 });
            const msg: string | null = await this.cnfMsg.textContent();
            return msg?.includes("Success: You have added") ?? false;
        } catch (error) {
            console.log(`Success messsage not found : ${error}`);
            //throw (error);
            return false;
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

    async getProductName(): Promise<string | null> {
        try {
            return await this.txtProductName.textContent();
        } catch (error) {
            console.log(`Exception while getting Product Name: ${error}`);
            throw (error);
        }
    }

    async getBrandName(): Promise<string | null> {
        try {
            return await this.txtBrand.textContent();
        } catch (error) {
            console.log(`Exception while getting Brand Name: ${error}`);
            throw (error);
        }
    }

    async getProductCode(): Promise<string | null> {
        try {
            return await this.txtProductCode.textContent();
        } catch (error) {
            console.log(`Exception while getting Product Code: ${error}`);
            throw (error);
        }
    }

    async getProductPrice(): Promise<string | null> {
        try {
            return await this.txtPrice.textContent();
        } catch (error) {
            console.log(`Exception while getting Product Price: ${error}`);
            throw (error);
        }
    }

    async getProductPriceExcludingTax(): Promise<string | null> {
        try {
            return await this.txtExclTaxPrice.textContent();
        } catch (error) {
            console.log(`Exception while getting Product Price Excluding Tax: ${error}`);
            throw (error);
        }
    }

    async getProductAvailability(): Promise<string | null> {
        try {
            return await this.txtAvailability.textContent();
        } catch (error) {
            console.log(`Exception while getting Product Availability: ${error}`);
            throw (error);
        }
    }
}