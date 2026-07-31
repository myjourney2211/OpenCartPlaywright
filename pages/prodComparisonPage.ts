import { Page, Locator } from "@playwright/test";

export class prodComaparisonPage {
    private readonly page: Page;
    //variables
    private readonly lblPageHeading: Locator;
    private readonly lnkproduct: Locator;


    //constructor
    constructor(page: Page) {
        this.page = page;
        this.lblPageHeading = page.locator("div[id='content'] h1");
        this.lnkproduct = page.locator("tbody tr td a strong");

    }

    //methods
    async isProductExists(prodName: string): Promise<boolean> {
        try {
            await this.lnkproduct.waitFor({ state: 'visible', timeout: 10000 });
            const actualProduct = await this.lnkproduct.textContent();
            return actualProduct?.includes(prodName) ?? false;
        } catch (error) {
            console.log(`Exception during Product Name Comparison :${error}`);
            throw (error);
        }
    }

    async isProductComparisonPageExists(): Promise<string | null> {
        try {
            return await this.lblPageHeading.textContent();
        } catch (error) {
            console.log(`Exception during Product Name Comparison :${error}`);
            throw (error);
        }
    }



}