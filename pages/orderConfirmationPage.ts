import { Page, Locator } from "@playwright/test";
import { homePage } from "./homePage";

export class orderConfirmationPage {
    private readonly page: Page;

    //variables
    private readonly lblOrderConfirmed: Locator;
    private readonly btnContinue: Locator;

    //constructor
    constructor(page: Page) {
        this.page = page;
        this.lblOrderConfirmed = this.page.locator('h1').filter({ hasText: 'Your order has been placed!' });
        //this.lblOrderConfirmed = this.page.locator("#content h1");
        this.btnContinue = this.page.locator(".btn.btn-primary");
    }

    //method
    async isOrderConfirmationPageAvailable(): Promise<boolean> {
        try {
            await this.lblOrderConfirmed.waitFor({ state: "visible", timeout: 10000 });
            const succmsg = await this.lblOrderConfirmed.textContent();
            if (succmsg === "Your order has been placed!") {
                return true;
            }
        } catch (error) {
            console.log(`Exception during loading of Confirmation Page : ${error}`);
            throw (error);
        }
        return false;
    }

    async selectContinueButton(): Promise<homePage> {
        try {
            await this.btnContinue.click();
            return new homePage(this.page);
        } catch (error) {
            console.log(`Exception during loading of Confirmation Page :${error}`);
            throw (error);
        }
    }

}