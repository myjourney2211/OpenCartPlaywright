import { Page, Locator } from "@playwright/test";
import { productPage } from "../pages/productPage";

export class searchResultPage {
    private readonly page: Page;

    //variabale
    private readonly searchPageHeader: Locator;
    private readonly searchProducts: Locator;

    //constructor
    constructor(page: Page) {
        this.page = page;
        this.searchPageHeader = page.locator("div#content h1");
        this.searchProducts = page.locator("div.caption h4 a");
    }

    //method

    async isSearchResultsPageExists(): Promise<boolean> {
        try {
            const headerText: string | null = await this.searchPageHeader.textContent();
            return headerText?.includes('Search -') ?? false;
        } catch (error) {
            console.log(`Error in Search Reulsts Page : ${error}`);
            throw (error);
        }
    }

    async isProductExists(productName: string) {
        try {
            const products = await this.searchProducts.all();
            for (const product of products) {
                let prodName = await product.textContent();
                if (prodName?.toLowerCase === productName.toLowerCase) {
                    return true;
                }
            }
        } catch (error) {
            console.log(`Error during Product exists : ${error}`);
            throw (error);
        }
        return false;
    }

    async selectProduct(productName: string): Promise<productPage | null> {
        try {
            const products = await this.searchProducts.all();
            for (const product of products) {
                let prodName = await product.textContent();
                if (prodName?.toLowerCase === productName.toLowerCase) {
                    await product.click();
                    return new productPage(this.page);
                }
            }
        } catch (error) {
            console.log(`Error during selecting Product : ${error}`);
            throw (error);
        }
        return null;
    }
}