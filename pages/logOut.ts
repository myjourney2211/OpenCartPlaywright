import { Page, Locator } from "@playwright/test";
import {homePage} from "../pages/homePage";

export class logOut {
    private readonly page: Page;

    //variables
    private readonly btnContinue: Locator;

    //constructor
    constructor(page: Page) {
        this.page = page;
        this.btnContinue = page.locator(".btn.btn-primary");
    }

    //method
    async clickContinue(): Promise<homePage> {
        try {
            await this.btnContinue.click();
            return new homePage(this.page);
        } catch (error) {
            console.log(`Error during click of Logout button : ${error}`);
            throw (error);
        }
    }

    async isContinueButtonVisible(): Promise<boolean> {
        try {
            return await this.btnContinue.isVisible();
        } catch (error) {
            console.log(`Error during visibility of Continue Button after clicking Logout button : ${error}`);
            throw (error);
        }
    }
}