import { Page, Locator } from "@playwright/test";
import { logOut } from "./logOut";

export class myAccountPage {

    private readonly page: Page;

    //variables
    private readonly msgHeading: Locator;
    private readonly lnklogout: Locator;

    //constructor
    constructor(page: Page) {
        this.page = page;

        this.msgHeading = page.locator('h2:has-text("My Account")');
        this.lnklogout = page.getByText("Logout").nth(1);
    }

    //methods

    async isMyAccountPageExists(): Promise<boolean> {
        try {
            const isVisible: boolean = await this.msgHeading.isVisible();
            return isVisible;
        } catch (error) {
            console.log(`Error checking My Account heading vsiisbility : ${error}`);
            throw (error);
        }
    }

    async clickLogout(): Promise<logOut> {
        try {
            await this.lnklogout.click();
            return new logOut(this.page);
        } catch (error) {
            console.log(`Unable to click Logout link :${error}`);
            throw (error);
        }
    }

    async myAccountPageVisibility(): Promise<string> {
        try {
            return (this.page.title());
        } catch (error) {
            console.log(`Error returning the title of My Account page : ${error}`);
            throw (error);
        }
    }

}