import { Page, Locator } from "@playwright/test";
import { myAccountPage } from "./myAccountPage";
import { forgotPasswordPage } from "./forgotPasswordPage";

export class loginPage {

    private readonly page: Page;

    //variables
    private readonly txtEmailAddress: Locator;
    private readonly txtPassword: Locator;
    private readonly btnLogin: Locator;
    private readonly txtErrorMessage: Locator;
    private readonly lnkForgottenPassword: Locator;
    private readonly txtEmailLinkSent: Locator;

    //constructor
    constructor(page: Page) {
        this.page = page;

        this.txtEmailAddress = page.locator("#input-email");
        this.txtPassword = page.locator("#input-password");
        this.btnLogin = page.locator("input[value='Login']");
        this.txtErrorMessage = page.locator(".alert.alert-danger.alert-dismissible");
        this.lnkForgottenPassword = page.locator("div[class='form-group'] a");
        this.txtEmailLinkSent = page.locator(".alert.alert-success.alert-dismissible");
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

    async isForgottenPasswordAvailable(): Promise<boolean> {
        try {
            return await this.lnkForgottenPassword.isVisible();
        } catch (error) {
            console.log(`Exception Occured for Forgotten Password Visibility : ${error}`);
            throw (error);
        }
    }

    async clickForgottenPassword(): Promise<forgotPasswordPage> {
        try {
            await this.lnkForgottenPassword.click();
            return new forgotPasswordPage(this.page);
        } catch (error) {
            console.log(`Exception Occured during click of Forgotten Password : ${error}`);
            throw (error);
        }
    }

    async getForgotSuccessMessage(): Promise<string | null> {
        try {
            return await this.txtEmailLinkSent.textContent();
        } catch (error) {
            console.log(`Exception Occured while returning Forgot success message : ${error}`);
            throw (error);
        }
    }
}