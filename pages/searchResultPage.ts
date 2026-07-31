import { Page, Locator } from "@playwright/test";
import { productPage } from "../pages/productPage";
import { prodComaparisonPage } from "./prodComparisonPage";

export class searchResultPage {
    private readonly page: Page;

    //variabale
    private readonly searchPageHeader: Locator;
    private readonly searchProducts: Locator;
    private readonly msgNoProductFound: Locator;
    private readonly btnCompareProduct: Locator;
    private readonly btnListView: Locator;
    private readonly cnfMsg: Locator;
    private readonly lnkComaprisonPage: Locator;
    private readonly btnAddToWishlist: Locator;

    //constructor
    constructor(page: Page) {
        this.page = page;
        this.searchPageHeader = page.locator("div#content h1");
        this.searchProducts = page.locator("div.caption h4 a");
        this.msgNoProductFound = page.getByText('There is no product that matches the search criteria.');
        this.btnCompareProduct = page.locator("div[class='product-layout product-list col-xs-12'] button:nth-child(3)");
        this.btnListView = page.locator("#list-view");
        this.cnfMsg = page.locator("div.alert.alert-success.alert-dismissible");
        this.lnkComaprisonPage = page.locator("div.alert.alert-success.alert-dismissible a[href*='route=product/compare']");
        this.btnAddToWishlist = page.locator("button[data-original-title*='Add to Wish List'] i");
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
        //Non-Existing Product
        if (await this.msgNoProductFound.isVisible()) {
            return false;
        }
    }

    async selectProduct(productName: string): Promise<productPage> {
        try {
            const products = await this.searchProducts.all();
            for (const product of products) {
                let prodName = await product.textContent();
                if (prodName?.toLowerCase() === productName.toLowerCase()) {
                    await product.click();
                    return new productPage(this.page);
                }
            }
            throw new Error(`Product not found: ${productName}`);
        } catch (error) {
            console.log(`Error during selecting Product : ${error}`);
            throw (error);
        }
        //return false;
    }

    async selectlistViewProductComapre(productName: string): Promise<null> {
        try {
            const products = await this.searchProducts.all();
            const count = products.length;

            for (let i = 0; i < count; i++) {
                let prodName1 = await products[i].textContent();
                if (prodName1?.toLowerCase() === productName.toLowerCase()) {
                    await this.btnCompareProduct.nth(i).click();
                }
            }
        } catch (error) {
            console.log(`Error during Product Comparison page navigation : ${error}`);
            throw (error);
        }
        return null;
    }

    async selectListView(): Promise<void> {
        try {
            await this.btnListView.click();
        } catch (error) {
            console.log(`Exception during click of List view button : ${error}`);
            throw (error);
        }
    }

    async isCompareSuccessMsgVisible(): Promise<boolean> {
        try {
            let msg: string | null = await this.cnfMsg.textContent();
            return msg?.includes("product comparison") ?? false;
        } catch (error) {
            console.log(`Success messsage not found : ${error}`);
            throw (error);
        }
    }

    async isWishListSuccessMsgVisible(): Promise<boolean> {
        try {
            let msg: string | null = await this.cnfMsg.textContent();
            return msg?.includes("wish list") ?? false;
        } catch (error) {
            console.log(`Success messsage not found : ${error}`);
            throw (error);
        }
    }

    async naviageProdComaparisonPage(): Promise<prodComaparisonPage> {
        try {
            await this.lnkComaprisonPage.click();
            return new prodComaparisonPage(this.page);
        } catch (error) {
            console.log(`Exception during navigating to Product Comparison Page : ${error}`);
            throw (error);
        }
    }

    async clickAddToWishlist(productName: string): Promise<void> {
        try {
            const products = await this.searchProducts.all();
            const count = products.length;

            for (let i = 0; i < count; i++) {
                let prodName1 = await products[i].textContent();
                if (prodName1?.toLowerCase() === productName.toLowerCase()) {
                    await this.btnAddToWishlist.nth(i).click();
                }
            }
        } catch (error) {
            console.log(`Error during Add To Cart from Wishlist : ${error}`);
            throw (error);
        }
    }
}