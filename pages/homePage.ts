import { Page, Locator } from "@playwright/test";

export class homePage {
    //variables
    private readonly page: Page;
    private readonly lnkMyAccount: Locator;
    private readonly lnkRegister: Locator;
    private readonly lnkLogin: Locator;
    private readonly txtSearchBox: Locator;
    private readonly btnSearch: Locator;

    //constructos
    constructor(page: Page) {
        this.page = page;
        this.lnkMyAccount = this.page.locator("a[title='My Account']");
        this.lnkRegister = this.page.locator("a[href='https://tutorialsninja.com/demo/index.php?route=account/register']");
        this.lnkLogin = this.page.locator("a[href='https://tutorialsninja.com/demo/index.php?route=account/login']");
        this.txtSearchBox = this.page.locator("input[placeholder='Search']");
        this.btnSearch = this.page.locator("button[class='btn btn-default btn-lg']");
    }

    //action methods

    async isHomePageExists() {
        let title = await this.page.title();
        if (title == "Your Store") {
            return true;
        }
        return false;
    }

    async clickMyAccount() {
        try {
            await this.lnkMyAccount.click();
        } catch (error) {
            console.log(`Exception Occured while clicking 'My Account' : ${error}`);
            throw error;
        }
    }

    async clickRegister() {
        try {
            await this.lnkRegister.click();
        } catch (error) {
            console.log(`Exception Occured while clicking 'Register' : ${error}`);
            throw error;
        }
    }

    async clickLogin() {
        try {
            await this.lnkLogin.click();
        } catch (error) {
            console.log(`Exception Occured while clicking 'Login' : ${error}`);
            throw error;
        }
    }

    async enterProductName(pName: string) {
        try {
            await this.txtSearchBox.pressSequentially(pName);
        } catch (error) {
            console.log(`Exception Occured while entering product name : ${error}`);
            throw error;
        }
    }

    async clickSearch() {
        try {
            await this.btnSearch.click();
        } catch (error) {
            console.log(`Exception Occured while clicking 'Search' : ${error}`);
            throw error;
        }
    }

    async loginPageNavigation() {
        try {
            await this.clickMyAccount();
            await this.clickLogin();
        } catch (error) {
            console.log(`Error during Login page navigation : ${error}`);
            throw (error);
        }
    }


}