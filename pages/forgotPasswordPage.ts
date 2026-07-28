import { Page, Locator } from "@playwright/test";

export class forgotPasswordPage {
    private readonly page: Page;
    //variables
    private readonly lblForgotPassword: Locator;

    //constructor
    constructor(page: Page) {
        this.page = page;
        this.lblForgotPassword = page.locator("div[id='content'] h1");
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
}