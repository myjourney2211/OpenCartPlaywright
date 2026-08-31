import { Page, Locator } from "@playwright/test";
import { orderConfirmationPage } from "./orderConfirmationPage";

export class checkOutPage {
    private readonly page: Page;
    //variables
    private readonly lblPageHeader: Locator;
    private readonly radioNewAddress: Locator;
    private readonly txtFirstName: Locator;
    private readonly txtLastName: Locator;
    private readonly txtAddress1: Locator;
    private readonly txtcity: Locator;
    private readonly txtPostCode: Locator;
    private readonly txtCountry: Locator;
    private readonly txtState: Locator;
    private readonly btnContinue: Locator;
    private readonly radioExistingAddress: Locator;
    private readonly btnContinueDeliveryDetails: Locator;
    private readonly btnContinueDeliveryMethod: Locator;
    private readonly chkPaymentMethodCheckBox: Locator;
    private readonly btnContinuePaymentMethod: Locator;
    private readonly btnConfirmOrder: Locator;

    //constructor
    constructor(page: Page) {
        this.page = page;
        this.lblPageHeader = this.page.locator("div[id='content'] h1");
        this.radioNewAddress = this.page.getByLabel('I want to use a new address');
        this.txtFirstName = this.page.locator("#input-payment-firstname");
        this.txtLastName = this.page.locator("#input-payment-lastname");
        this.txtAddress1 = this.page.locator("#input-payment-address-1");
        this.txtcity = this.page.locator("#input-payment-city");
        this.txtPostCode = this.page.locator("#input-payment-postcode");
        this.txtCountry = this.page.locator("#input-payment-country");
        this.txtState = this.page.locator("#input-payment-zone");
        this.btnContinue = this.page.locator("#button-payment-address");
        this.radioExistingAddress = this.page.locator('label').filter({ hasText: 'I want to use an existing address' }).last();
        this.btnContinueDeliveryDetails = this.page.locator("#button-shipping-address");
        this.btnContinueDeliveryMethod = this.page.locator("#button-shipping-method");
        this.chkPaymentMethodCheckBox = this.page.locator("input[name='agree']");
        this.btnContinuePaymentMethod = this.page.locator("#button-payment-method");
        this.btnConfirmOrder = this.page.locator("#button-confirm");
    }
    //methods
    async isCheckOutPageAvailableByHeader(): Promise<boolean> {
        try {
            await this.lblPageHeader.waitFor({ state: "visible", timeout: 10000 });
            if (await this.lblPageHeader.textContent() == "Checkout") {
                return true;
            }
        } catch (error) {
            console.log(`Exception during Checkout Page Title : ${error}`);
            throw (error);
        }
        return false;
    }

    async selectNewAddress(): Promise<void> {
        try {
            await this.radioNewAddress.waitFor({ state: "visible" });
            await this.radioNewAddress.click();
        } catch (error) {
            console.log(`Exception during selection of New Address radio button:${error}`);
            throw (error);
        }
    }
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

    async setAddress1(addr: string): Promise<void> {
        try {
            await this.txtAddress1.pressSequentially(addr);
        } catch (error) {
            console.log(`Exception occure while filling Address1 :${error}`);
            throw (error);
        }
    }

    async setCity(city: string): Promise<void> {
        try {
            await this.txtcity.pressSequentially(city);
        } catch (error) {
            console.log(`Exception occure while filling City :${error}`);
            throw (error);
        }
    }

    async setPostCode(zip: string): Promise<void> {
        try {
            await this.txtPostCode.pressSequentially(zip);
        } catch (error) {
            console.log(`Exception occure while selecting Postal Code :${error}`);
            throw (error);
        }
    }

    async setCountry(country: string): Promise<void> {
        try {
            await this.txtCountry.pressSequentially(country);
        } catch (error) {
            console.log(`Exception occured while selecting Country :${error}`);
            throw (error);
        }
    }

    async setState(state: string): Promise<void> {
        try {
            await this.page.waitForTimeout(3000);
            //await this.txtState.waitFor({state:"visible" , timeout: 10000});
            await this.txtState.pressSequentially(state);
        } catch (error) {
            console.log(`Exception occured while selecting State :${error}`);
            throw (error);
        }
    }

    async selectContinue(): Promise<void> {
        try {
            await this.btnContinue.click();
        } catch (error) {
            console.log(`Exception occured while clicking Continue :${error}`);
            throw (error);
        }
    }
    async selectExistingAddress(): Promise<void> {
        try {
            await this.radioExistingAddress.waitFor({ state: "visible", timeout: 10000 });
            await this.radioExistingAddress.click();
        } catch (error) {
            console.log(`Exception during selection of Existing Address radio button:${error}`);
            throw (error);
        }
    }

    async selectContinueDeliveryDetails(): Promise<void> {
        try {
            await this.btnContinueDeliveryDetails.click();
        } catch (error) {
            console.log(`Exception occured while clicking Continue :${error}`);
            throw (error);
        }
    }

    async selectContinueDeliveryMethod(): Promise<void> {
        try {
            await this.btnContinueDeliveryMethod.click();
        } catch (error) {
            console.log(`Exception occured while clicking Continue :${error}`);
            throw (error);
        }
    }

    async checkTermsandCondition(): Promise<void> {
        try {
            await this.chkPaymentMethodCheckBox.click();
        } catch (error) {
            console.log(`Exception occured while clicking T&C :${error}`);
            throw (error);
        }
    }

    async selectContinuePaymentMethod(): Promise<void> {
        try {
            await this.btnContinuePaymentMethod.click();
        } catch (error) {
            console.log(`Exception occured while clicking Continue :${error}`);
            throw (error);
        }
    }

    async selectConfirmOrder() {
        try {
            await this.btnConfirmOrder.click();
            return new orderConfirmationPage(this.page);
        } catch (error) {
            console.log(`Exception occured while clicking Confirm :${error}`);
            throw (error);
        }
    }
}