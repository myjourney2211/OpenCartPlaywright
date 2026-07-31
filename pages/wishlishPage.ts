import { Page, Locator } from "@playwright/test";
import { shoppingCartPage } from "./shoppingCartPage";

export class wishlistPage {
    private readonly page: Page;
    //variables
    private readonly lblMyWishlist: Locator;
    private readonly btnAddToCart: Locator;
    private readonly btnRemove: Locator;
    private readonly btnContinue: Locator;
    private readonly lnkproduct: Locator;
    private readonly cnfMsg: Locator;
    private readonly lnkShoppingCart: Locator;

    //constructor
    constructor(page: Page) {
        this.page = page;
        this.lblMyWishlist = this.page.locator("div[id='content'] h2");
        this.btnAddToCart = this.page.locator("td[class='text-right'] button");
        this.btnRemove = this.page.locator(".btn.btn-danger");
        this.btnContinue = this.page.locator("a[class='btn btn-primary']");
        this.lnkproduct = this.page.locator("table[class='table table-bordered table-hover'] tbody td[class='text-left']:nth-child(2)");
        this.cnfMsg = this.page.locator(".alert.alert-success.alert-dismissible")
        this.lnkShoppingCart = this.page.getByText('shopping cart', { exact: true });
    }

    //methods
    async isProductExists(prodName: string): Promise<boolean> {
        try {
            const actualProduct = await this.lnkproduct.all();
            for (let prod of actualProduct) {
                let prodName1 = await prod.textContent()
                if (prodName1?.toLowerCase() === prodName.toLowerCase()) {
                    return true;
                }
            }
        } catch (error) {
            console.log(`Exception in My Wishlist :${error}`);
            throw (error);
        }
        return false;
    }

    async isMyWishlistPageExists(): Promise<boolean> {
        try {
            const label = await this.lblMyWishlist.textContent();
            return label?.includes("My Wish List") ?? false;
        } catch (error) {
            console.log(`Exception during My Wishlist Page :${error}`);
            throw (error);
        }
    }

    async selectAddToCart(productName: string) {
        try {
            const products = await this.lnkproduct.all();
            const count = products.length;

            for (let i = 0; i < count; i++) {
                let prodName1 = await products[i].textContent();
                if (prodName1?.toLowerCase() === productName.toLowerCase()){
                    await this.btnAddToCart.nth(i).click();
                }
            }
        } catch (error) {
            console.log(`Error during Add To Cart from Wishlist : ${error}`);
            throw (error);
        }
        return null;
    }

    async isSuccessMsgVisible(): Promise<boolean> {
        try {
            let msg: string | null = await this.cnfMsg.textContent();
            return msg?.includes("Success: You have added") ?? false;
        } catch (error) {
            console.log(`Success messsage not found : ${error}`);
            throw (error);
        }
    }

    async goToShoppingCart(): Promise<shoppingCartPage> {
        try {
            await this.lnkShoppingCart.click();
            return new shoppingCartPage(this.page);
        } catch (error) {
            console.log(`Exception during navigation to Shopping Cart from Wishlist Page : ${error}`);
            throw (error);
        }
    }

}

