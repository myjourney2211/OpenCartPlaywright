import { Page, Locator } from "@playwright/test";
import { shoppingCartPage } from "./shoppingCartPage";
import { prodComaparisonPage } from "./prodComparisonPage";
import { wishlistPage } from "./wishlishPage";

export class productPage {

    private readonly page: Page;
    //variables for locators
    private readonly txtQuantity: Locator;
    private readonly btnAddToCart: Locator;
    private readonly cnfMsg: Locator;
    private readonly btnItems: Locator;
    private readonly lnkViewCart: Locator;
    private readonly btnCompareProduct: Locator;
    private readonly lnkComaprisonPage: Locator;
    private readonly txtProductName: Locator;
    private readonly txtBrand: Locator;
    private readonly txtProductCode: Locator;
    private readonly txtPrice: Locator;
    private readonly txtAvailability: Locator;
    private readonly txtExclTaxPrice: Locator;
    private readonly lblRelatedProductSection: Locator;
    private readonly lnkRelatedProducts: Locator;
    private readonly btnAddToWishlistFromRelateProduct: Locator;
    private readonly lnkWishListPage: Locator;
    private readonly lnkShoppingCartPage : Locator;

    //constructor
    constructor(page: Page) {
        this.page = page;

        //Initialize the locators with CSS selectors
        this.txtQuantity = this.page.locator("#input-quantity");
        this.btnAddToCart = this.page.locator("#button-cart");
        this.cnfMsg = this.page.locator("div.alert.alert-success");
        this.btnItems = this.page.locator("div#cart");
        this.lnkViewCart = this.page.locator("strong:has-text('View Cart')");
        this.btnCompareProduct = this.page.locator("#product-product div.btn-group button:nth-child(2)");
        this.lnkComaprisonPage = this.page.locator("div.alert.alert-success.alert-dismissible a[href*='route=product/compare']");
        this.txtProductName = this.page.locator("div#content h1");
        this.txtBrand = this.page.locator("a[href*='route=product/manufacturer/info&manufacturer_id']");
        this.txtProductCode = this.page.getByText('Product Code');
        this.txtPrice = this.page.locator("ul.list-unstyled li h2");
        this.txtExclTaxPrice = this.page.getByText('Ex Tax');
        this.txtAvailability = this.page.getByText('Availability');
        this.lblRelatedProductSection = this.page.getByText('Related Products');
        this.lnkRelatedProducts = this.page.locator("div.caption h4 a");
        this.btnAddToWishlistFromRelateProduct = this.page.locator("div[class='button-group'] button[data-original-title*='Add to Wish List'] i");
        this.lnkWishListPage = this.page.locator("div[class*='alert alert-success'] a[href*='route=account/wishlist']");
        this.lnkShoppingCartPage = this.page.locator("div#product-product a[href*='route=checkout/cart']");
    }

    //methods
    async setQuantity(qty: string): Promise<void> {
        try {
            await this.txtQuantity.clear();
            await this.txtQuantity.fill(qty);
        } catch (error) {
            console.log(`Error duting updating Quantity in Product Page : ${error}`);
            throw (error);
        }
    }

    async addToCart(): Promise<void> {
        try {
            await this.btnAddToCart.waitFor({ state: 'visible', timeout: 10000 });
            const [response] = await Promise.all([
                this.page.waitForResponse(
                    resp => resp.url().includes('route=checkout/cart/add') && resp.status() === 200,
                    { timeout: 10000 }
                ),
                this.btnAddToCart.click(),
            ]);
        } catch (error) {
            console.log(`Error during click of Add To Cart : ${error}`);
            throw (error);
        }
    }

    async isSuccessMsgVisible(): Promise<boolean> {
        try {
            const msg = await this.cnfMsg.evaluate(el => el.textContent, { timeout: 10000 });
            return msg?.includes("Success: You have added") ?? false;
        } catch (error) {
            console.log(`Success message not found : ${error}`);
            return false;
        }
    }

    async clickItemsToNavigate() {
        try {
            await this.btnItems.click();
        } catch (error) {
            console.log(`Error during Click of items button : ${error}`);
            throw (error);
        }
    }

    async clickViewCart(): Promise<shoppingCartPage> {
        try {
            await this.lnkViewCart.click();
            return new shoppingCartPage(this.page);
        } catch (error) {
            console.log(`Error during Click of items button : ${error}`);
            throw (error);
        }
    }

    async addProductToCart(qty: string) {
        try {
            await this.setQuantity(qty);
            await this.addToCart();
            await this.isSuccessMsgVisible();
        } catch (error) {
            console.log(`Add to Cart has some error : ${error}`);
            throw (error);
        }
    }

    async clickCompareProduct() {
        try {
            await this.btnCompareProduct.click();
        } catch (error) {
            console.log(`Exception during click of Compare Product : ${error}`);
            throw (error);
        }
    }
    async isCompareSuccessMsgVisible(): Promise<boolean> {
        try {
            await this.cnfMsg.waitFor({ state: 'visible', timeout: 10000 });
            let msg: string | null = await this.cnfMsg.textContent();
            return msg?.includes("product comparison") ?? false;
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

    async getProductName(): Promise<string | null> {
        try {
            return await this.txtProductName.textContent();
        } catch (error) {
            console.log(`Exception while getting Product Name: ${error}`);
            throw (error);
        }
    }

    async getBrandName(): Promise<string | null> {
        try {
            return await this.txtBrand.textContent();
        } catch (error) {
            console.log(`Exception while getting Brand Name: ${error}`);
            throw (error);
        }
    }

    async getProductCode(): Promise<string | null> {
        try {
            return await this.txtProductCode.textContent();
        } catch (error) {
            console.log(`Exception while getting Product Code: ${error}`);
            throw (error);
        }
    }

    async getProductPrice(): Promise<string | null> {
        try {
            return await this.txtPrice.textContent();
        } catch (error) {
            console.log(`Exception while getting Product Price: ${error}`);
            throw (error);
        }
    }

    async getProductPriceExcludingTax(): Promise<string | null> {
        try {
            return await this.txtExclTaxPrice.textContent();
        } catch (error) {
            console.log(`Exception while getting Product Price Excluding Tax: ${error}`);
            throw (error);
        }
    }

    async getProductAvailability(): Promise<string | null> {
        try {
            return await this.txtAvailability.textContent();
        } catch (error) {
            console.log(`Exception while getting Product Availability: ${error}`);
            throw (error);
        }
    }

    async isRelatedProductSectionAvailable(): Promise<boolean> {
        try {
            return await this.lblRelatedProductSection.isVisible();
        } catch (error) {
            console.log(`Exception during Related Product Visibility : ${error}`);
            throw (error);
        }
    }

    async isRelatedProductExists(productName: string): Promise<boolean> {
        try {
            const products = await this.lnkRelatedProducts.all();
            for (const product of products) {
                let prodName = await product.textContent();
                if (prodName?.toLowerCase === productName.toLowerCase) {
                    return true;
                }
            }
        } catch (error) {
            console.log(`Exception during Related Product exists : ${error}`);
            throw (error);
        }
        return false;
    }

    async selectAddToWishListFromRelatedProduct(productName: string): Promise<null> {
        try {
            const products = await this.lnkRelatedProducts.all();
            const count = products.length;
            for (let i = 0; i < count; i++) {
                let prodName = await products[i].textContent();
                if (prodName?.toLowerCase() === productName.toLowerCase()) {
                    await this.btnAddToWishlistFromRelateProduct.nth(i).click();
                }
            }
        } catch (error) {
            console.log(`Error during selecting Product : ${error}`);
            throw (error);
        }
        return null;
    }

    async isWishlistSuccessMsgVisible(): Promise<boolean> {
        try {
            await this.cnfMsg.waitFor({ state: 'visible', timeout: 10000 });
            let msg: string | null = await this.cnfMsg.textContent();
            return msg?.includes("wish list") ?? false;
        } catch (error) {
            console.log(`Success messsage not found : ${error}`);
            throw (error);
        }
    }

    async navigateWishListPage(): Promise<wishlistPage> {
        try {
            await this.lnkWishListPage.click();
            return new wishlistPage(this.page);
        } catch (error) {
            console.log(`Exception during navigating to WishList Page : ${error}`);
            throw (error);
        }
    }
    //Shopping cart from Success Message after Add to Cart
        async clickShoppingCartLink(): Promise<shoppingCartPage> {
        try {
            await this.lnkShoppingCartPage.click();
            return new shoppingCartPage(this.page);
        } catch (error) {
            console.log(`Error during Click of Shoppingcart from Success message : ${error}`);
            throw (error);
        }
    }
}