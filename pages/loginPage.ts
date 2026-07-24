import { Page, Locator } from "@playwright/test";
import { myAccountPage } from "./myAccountPage";

export class loginPage {

    private readonly page: Page;

    //variables
    private readonly txtEmailAddress: Locator;
    private readonly txtPassword: Locator;
    private readonly btnLogin: Locator;
    private readonly txtErrorMessage: Locator;

    //constructor
    constructor(page: Page) {
        this.page = page;

        this.txtEmailAddress = page.locator("#input-email");
        this.txtPassword = page.locator("#input-password");
        this.btnLogin = page.locator("input[value='Login']");
        this.txtErrorMessage = page.locator(".alert.alert-danger.alert-dismissible");
    }

    //method
    async setEmail(email: string): Promise<void> {
        try {
            await this.txtEmailAddress.fill(email);
        } catch (error) {
            console.log(`Exception Occured while filling 'Email' : ${error}`);
            throw (error);
        }
    }

    async setPassword(password: string): Promise<void> {
        try {
            await this.txtPassword.fill(password);
        } catch (error) {
            console.log(`Exception Occured while filling 'Password' : ${error}`);
            throw (error);
        }
    }

    async clickLoginBtn(): Promise<void> {
        try {
            await this.btnLogin.click();
        } catch (error) {
            console.log(`Exception Occured while clicking 'Login' : ${error}`);
            throw (error);
        }
    }

    async getLoginErrorMessage(): Promise<string | null> {
        try {
            return await this.txtErrorMessage.textContent();
        } catch (error) {
            console.log(`Exception Occured while returning login error message : ${error}`);
            throw (error);
        }
    }

    async login(email: string, pwd: string): Promise<myAccountPage> {
        try {
            await this.setEmail(email);
            await this.setPassword(pwd);
            await this.clickLoginBtn();
            return new myAccountPage(this.page);
        } catch (error) {
            console.log(`Exception Occured while login : ${error}`);
            throw (error);
        }
    }
}