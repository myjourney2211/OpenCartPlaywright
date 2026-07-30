import { Page, Locator } from "@playwright/test";
import { checkOutPage } from "./checkOutPage";

export class shoppingCartPage {
    private readonly page: Page;
    //variables
    private readonly lblTotalProice: Locator;
    private readonly btnCheckout: Locator;
    private readonly lnkProducts: Locator;

    //constructor
    constructor(page: Page) {
        this.page = page;
        //Initialize the variables
        this.lblTotalProice = page.locator("div.col-sm-4.col-sm-offset-8 table tr:nth-child(4) td:nth-child(2)");
        this.btnCheckout = page.locator("a.btn.btn-primary");
        this.lnkProducts = page.locator("div[class='table-responsive'] table[class='table table-bordered'] tbody td:nth-child(2) a");
    }

    //methods
    async getTotalPriceOfCart(): Promise<string | null> {
        try {
            return await this.lblTotalProice.textContent();
        } catch (error) {
            console.log(`Error during fetching Cart Total : ${error}`);
            throw (error);
        }
    }

    async clickCheckout(): Promise<checkOutPage> {
        try {
            await this.btnCheckout.click();
            return new checkOutPage(this.page);
        } catch (error) {
            console.log(`Error during click of Checkout button : ${error}`);
            throw (error);
        }
    }

    async isViewCartPageLoaded(): Promise<boolean> {
        try {
            return await this.btnCheckout.isVisible();
        } catch (error) {
            console.log(`Error during Checkout page Loading : ${error}`);
            throw (error);
        }
    }

    async isProductExists(productName: String): Promise<boolean> {
        try {
            let products = await this.lnkProducts.all();

            for (let product of products) {
                let prod1 = await product.textContent();
                if (prod1?.toLowerCase() === productName.toLowerCase()) {
                    return true;
                }
            }
        } catch (error) {
            console.log(': ${error}');
            throw (error);
        }
        return false;
    }
}