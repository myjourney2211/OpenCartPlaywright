import { Page, Locator } from "@playwright/test";
import { loginPage } from "./loginPage";

export class forgotPasswordPage {
    private readonly page: Page;
    //variables
    private readonly lblForgotPassword: Locator;
    private readonly txtEmailAddress: Locator;
    private readonly btnContinue: Locator;

    //constructor
    constructor(page: Page) {
        this.page = page;
        this.lblForgotPassword = page.locator("div[id='content'] h1");
        this.txtEmailAddress = page.locator("#input-email");
        this.btnContinue = page.locator("input[value='Continue']");
    }

    //message
    async islblForgotPasswordAvailable(): Promise<boolean> {
        try {
            return await this.lblForgotPassword.isVisible();
        } catch (error) {
            console.log(`Exception Occured for Forgot Your Password label Visibility : ${error}`);
            throw (error);
        }
    }

    async setEmail(email: string): Promise<void> {
        try {
            await this.txtEmailAddress.fill(email);
        } catch (error) {
            console.log(`Exception Occured while filling 'Email' : ${error}`);
            throw (error);
        }
    }

    async clickContinueBtn(): Promise<loginPage> {
        try {
            await this.btnContinue.click();
            return new loginPage(this.page);
        } catch (error) {
            console.log(`Exception Occured while clicking 'Continue' : ${error}`);
            throw (error);
        }
    }
}