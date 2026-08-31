# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: E2ETestCase.spec.ts >> End To End Test @master @E2ETest @vj
- Location: tests\E2ETestCase.spec.ts:64:5

# Error details

```
TimeoutError: locator.waitFor: Timeout 15000ms exceeded.
Call log:
  - waiting for getByLabel('I want to use a new address') to be visible

```

# Test source

```ts
  1   | import { Page, Locator, expect } from "@playwright/test";
  2   | 
  3   | export class checkOutPage {
  4   |     private readonly page: Page;
  5   |     //variables
  6   |     private readonly lblPageHeader: Locator;
  7   |     private readonly radioNewAddress: Locator;
  8   |     private readonly txtFirstName: Locator;
  9   |     private readonly txtLastName: Locator;
  10  |     private readonly txtAddress1: Locator;
  11  |     private readonly txtcity: Locator;
  12  |     private readonly txtPostCode: Locator;
  13  |     private readonly txtCountry: Locator;
  14  |     private readonly txtState: Locator;
  15  |     private readonly btnContinue: Locator;
  16  | 
  17  |     //constructor
  18  |     constructor(page: Page) {
  19  |         this.page = page;
  20  |         this.lblPageHeader = this.page.locator("div[id='content'] h1");
  21  |         this.radioNewAddress = this.page.getByLabel('I want to use a new address');
  22  |         this.txtFirstName = this.page.locator("#input-payment-firstname");
  23  |         this.txtLastName = this.page.locator("#input-payment-lastname");
  24  |         this.txtAddress1 = this.page.locator("#input-payment-address-1");
  25  |         this.txtcity = this.page.locator("#input-payment-city");
  26  |         this.txtPostCode = this.page.locator("#input-payment-postcode");
  27  |         this.txtCountry = this.page.locator("#input-payment-country");
  28  |         this.txtState = this.page.locator("#input-payment-zone");
  29  |         this.btnContinue = this.page.locator("#button-payment-address");
  30  | 
  31  |     }
  32  |     //methods
  33  |     async isCheckOutPageAvailableByHeader(): Promise<boolean> {
  34  |         try {
  35  |             await this.lblPageHeader.waitFor({ state: "visible", timeout: 10000 });
  36  |             if (await this.lblPageHeader.textContent() == "Checkout") {
  37  |                 return true;
  38  |             }
  39  |         } catch (error) {
  40  |             console.log(`Exception during Checkout Page Title : ${error}`);
  41  |             throw (error);
  42  |         }
  43  |         return false;
  44  |     }
  45  | 
  46  |     async selectNewAddress(): Promise<void> {
  47  |         try {
> 48  |             await this.radioNewAddress.waitFor({ state: "visible" });
      |                                        ^ TimeoutError: locator.waitFor: Timeout 15000ms exceeded.
  49  |             await this.radioNewAddress.click();
  50  |         } catch (error) {
  51  |             console.log(`Exception during selection of New Address radio button:${error}`);
  52  |             throw (error);
  53  |         }
  54  |     }
  55  |     async setFirstName(fname: string): Promise<void> {
  56  |         try {
  57  |             await this.txtFirstName.pressSequentially(fname);
  58  |         } catch (error) {
  59  |             console.log(`Exception occure while filling First Name :${error}`);
  60  |             throw (error);
  61  |         }
  62  |     }
  63  | 
  64  |     async setLastName(lname: string): Promise<void> {
  65  |         try {
  66  |             await this.txtLastName.pressSequentially(lname);
  67  |         } catch (error) {
  68  |             console.log(`Exception occure while filling Last Name :${error}`);
  69  |             throw (error);
  70  |         }
  71  |     }
  72  | 
  73  |     async setAddress1(addr: string): Promise<void> {
  74  |         try {
  75  |             await this.txtAddress1.pressSequentially(addr);
  76  |         } catch (error) {
  77  |             console.log(`Exception occure while filling Address1 :${error}`);
  78  |             throw (error);
  79  |         }
  80  |     }
  81  | 
  82  |     async setCity(city: string): Promise<void> {
  83  |         try {
  84  |             await this.txtcity.pressSequentially(city);
  85  |         } catch (error) {
  86  |             console.log(`Exception occure while filling City :${error}`);
  87  |             throw (error);
  88  |         }
  89  |     }
  90  | 
  91  |     async setPostCode(zip: string): Promise<void> {
  92  |         try {
  93  |             await this.txtPostCode.pressSequentially(zip);
  94  |         } catch (error) {
  95  |             console.log(`Exception occure while selecting Postal Code :${error}`);
  96  |             throw (error);
  97  |         }
  98  |     }
  99  | 
  100 |     async setCountry(country: string): Promise<void> {
  101 |         try {
  102 |             await this.txtCountry.pressSequentially(country);
  103 |         } catch (error) {
  104 |             console.log(`Exception occured while selecting Country :${error}`);
  105 |             throw (error);
  106 |         }
  107 |     }
  108 | 
  109 |     async setState(state: string): Promise<void> {
  110 |         try {
  111 |             await this.txtState.pressSequentially(state);
  112 |         } catch (error) {
  113 |             console.log(`Exception occured while selecting State :${error}`);
  114 |             throw (error);
  115 |         }
  116 |     }
  117 | 
  118 |     async selectContinue(): Promise<void> {
  119 |         try {
  120 |             await this.btnContinue.click();
  121 |         } catch (error) {
  122 |             console.log(`Exception occured while clicking Continue :${error}`);
  123 |             throw (error);
  124 |         }
  125 |     }
  126 | 
  127 | 
  128 | }
```