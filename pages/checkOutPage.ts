import { Page, Locator, expect } from "@playwright/test";

export class checkOutPage {
    private readonly page: Page;
    //variables
    private readonly lblPageHeader: Locator;

    //constructor
    constructor(page: Page) {
        this.page = page;
        this.lblPageHeader = this.page.locator("div[id='content'] h1");
    }
    //methods
    async isCheckOutPageAvailableByHeader(): Promise<boolean> {
        try {
            if (await this.lblPageHeader.textContent() == "Checkout") {
                return true;
            }
        } catch (error) {
            console.log(`Exception during Checkout Page Title : ${error}`);
            throw (error);
        }
        return false;
    }


}