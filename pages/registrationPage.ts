import { Page, Locator } from "@playwright/test";

export class registrationPage {
    private readonly page: Page;
    //variables
    private readonly txtFirstName: Locator;
    private readonly txtLastName: Locator;
    private readonly txtEmail: Locator;
    private readonly txtTelephone: Locator;
    private readonly txtPassword: Locator;
    private readonly txtConfirmPassword: Locator;
    private readonly chkPolicy: Locator;
    private readonly btnContinue: Locator;
    private readonly msgConfirmation: Locator;

    //constructor
    constructor(page: Page) {
        this.page = page;
        this.txtFirstName = this.page.locator("#input-firstname");
        this.txtLastName = this.page.locator("#input-lastname");
        this.txtEmail = this.page.locator("#input-email");
        this.txtTelephone = this.page.locator("#input-telephone");
        this.txtPassword = this.page.locator("#input-password");
        this.txtConfirmPassword = this.page.locator("#input-confirm");
        this.chkPolicy = this.page.locator("input[name='agree']");
        this.btnContinue = this.page.locator("input[value='Continue']");
        this.msgConfirmation = this.page.locator("div[id='content'] h1");
    }

    //methods
    async setFirstName(fname: string): Promise<void> {
        try {
            await this.txtFirstName.pressSequentially(fname);
        } catch (error) {
            console.log(`Exception occure while filling First Name :${error}`);
            throw (error);
        }
    }

    async setLastName(lname: string): Promise<void> {
        try {
            await this.txtLastName.pressSequentially(lname);
        } catch (error) {
            console.log(`Exception occure while filling Last Name :${error}`);
            throw (error);
        }
    }

    async setEmail(email: string): Promise<void> {
        try {
            await this.txtEmail.pressSequentially(email);
        } catch (error) {
            console.log(`Exception occure while filling Email :${error}`);
            throw (error);
        }
    }

    async setTelephone(telephone: string): Promise<void> {
        try {
            await this.txtTelephone.pressSequentially(telephone);
        } catch (error) {
            console.log(`Exception occure while filling Telephone :${error}`);
            throw (error);
        }
    }

    async setPassword(password: string): Promise<void> {
        try {
            await this.txtPassword.pressSequentially(password);
        } catch (error) {
            console.log(`Exception occure while filling Password :${error}`);
            throw (error);
        }
    }

    async setConfirmPassword(confirmpassword: string): Promise<void> {
        try {
            await this.txtConfirmPassword.pressSequentially(confirmpassword);
        } catch (error) {
            console.log(`Exception occure while filling Confirm Password :${error}`);
            throw (error);
        }
    }

    async clickCheckPloicy(): Promise<void> {
        try {
            await this.chkPolicy.check();
        } catch (error) {
            console.log(`Exception occure while clicking Check Policy :${error}`);
            throw (error);
        }
    }

    async clickContinueButton(): Promise<void> {
        try {
            await this.btnContinue.click();
        } catch (error) {
            console.log(`Exception occure while clicking Continue button :${error}`);
            throw (error);
        }
    }

    async getConfirmationMsg(): Promise<string | null> {
        try {
            return await this.msgConfirmation.textContent();
        } catch (error) {
            console.log(`Exception occure while getting Confirmation message :${error}`);
            throw (error);
        }
    }

    async completeRegistration(fname: string, lname:string, email:string, telephone:string, password:string) {

        await this.setFirstName(fname);
        await this.setLastName(lname);
        await this.setEmail(email);
        await this.setTelephone(telephone);
        await this.setPassword(password);
        await this.setConfirmPassword(password);
        await this.clickCheckPloicy();
        await this.clickContinueButton();
    }

}