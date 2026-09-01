# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: E2ETestCase.spec.ts >> End To End Test @master @E2ETest @vj
- Location: tests\E2ETestCase.spec.ts:67:5

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: page.waitForTimeout: Target page, context or browser has been closed
```

# Test source

```ts
  23  | 
  24  |     //constructor
  25  |     constructor(page: Page) {
  26  |         this.page = page;
  27  |         this.lblPageHeader = this.page.locator("div[id='content'] h1");
  28  |         this.radioNewAddress = this.page.getByLabel('I want to use a new address');
  29  |         this.txtFirstName = this.page.locator("#input-payment-firstname");
  30  |         this.txtLastName = this.page.locator("#input-payment-lastname");
  31  |         this.txtAddress1 = this.page.locator("#input-payment-address-1");
  32  |         this.txtcity = this.page.locator("#input-payment-city");
  33  |         this.txtPostCode = this.page.locator("#input-payment-postcode");
  34  |         this.txtCountry = this.page.locator("#input-payment-country");
  35  |         this.txtState = this.page.locator("#input-payment-zone");
  36  |         this.btnContinue = this.page.locator("#button-payment-address");
  37  |         this.radioExistingAddress = this.page.locator('label').filter({ hasText: 'I want to use an existing address' }).last();
  38  |         this.btnContinueDeliveryDetails = this.page.locator("#button-shipping-address");
  39  |         this.btnContinueDeliveryMethod = this.page.locator("#button-shipping-method");
  40  |         this.chkPaymentMethodCheckBox = this.page.locator("input[name='agree']");
  41  |         this.btnContinuePaymentMethod = this.page.locator("#button-payment-method");
  42  |         this.btnConfirmOrder = this.page.locator("#button-confirm");
  43  |     }
  44  |     //methods
  45  |     async isCheckOutPageAvailableByHeader(): Promise<boolean> {
  46  |         try {
  47  |             await this.lblPageHeader.waitFor({ state: "visible", timeout: 10000 });
  48  |             if (await this.lblPageHeader.textContent() == "Checkout") {
  49  |                 return true;
  50  |             }
  51  |         } catch (error) {
  52  |             console.log(`Exception during Checkout Page Title : ${error}`);
  53  |             throw (error);
  54  |         }
  55  |         return false;
  56  |     }
  57  | 
  58  |     async selectNewAddress(): Promise<void> {
  59  |         try {
  60  |             await this.radioNewAddress.waitFor({ state: "visible" });
  61  |             await this.radioNewAddress.click();
  62  |         } catch (error) {
  63  |             console.log(`Exception during selection of New Address radio button:${error}`);
  64  |             throw (error);
  65  |         }
  66  |     }
  67  |     async setFirstName(fname: string): Promise<void> {
  68  |         try {
  69  |             await this.txtFirstName.pressSequentially(fname);
  70  |         } catch (error) {
  71  |             console.log(`Exception occure while filling First Name :${error}`);
  72  |             throw (error);
  73  |         }
  74  |     }
  75  | 
  76  |     async setLastName(lname: string): Promise<void> {
  77  |         try {
  78  |             await this.txtLastName.pressSequentially(lname);
  79  |         } catch (error) {
  80  |             console.log(`Exception occure while filling Last Name :${error}`);
  81  |             throw (error);
  82  |         }
  83  |     }
  84  | 
  85  |     async setAddress1(addr: string): Promise<void> {
  86  |         try {
  87  |             await this.txtAddress1.pressSequentially(addr);
  88  |         } catch (error) {
  89  |             console.log(`Exception occure while filling Address1 :${error}`);
  90  |             throw (error);
  91  |         }
  92  |     }
  93  | 
  94  |     async setCity(city: string): Promise<void> {
  95  |         try {
  96  |             await this.txtcity.pressSequentially(city);
  97  |         } catch (error) {
  98  |             console.log(`Exception occure while filling City :${error}`);
  99  |             throw (error);
  100 |         }
  101 |     }
  102 | 
  103 |     async setPostCode(zip: string): Promise<void> {
  104 |         try {
  105 |             await this.txtPostCode.pressSequentially(zip);
  106 |         } catch (error) {
  107 |             console.log(`Exception occure while selecting Postal Code :${error}`);
  108 |             throw (error);
  109 |         }
  110 |     }
  111 | 
  112 |     async setCountry(country: string): Promise<void> {
  113 |         try {
  114 |             await this.txtCountry.pressSequentially(country);
  115 |         } catch (error) {
  116 |             console.log(`Exception occured while selecting Country :${error}`);
  117 |             throw (error);
  118 |         }
  119 |     }
  120 | 
  121 |     async setState(state: string): Promise<void> {
  122 |         try {
> 123 |             await this.page.waitForTimeout(3000);
      |                             ^ Error: page.waitForTimeout: Target page, context or browser has been closed
  124 |             //await this.txtState.waitFor({state:"visible" , timeout: 10000});
  125 |             await this.txtState.pressSequentially(state);
  126 |         } catch (error) {
  127 |             console.log(`Exception occured while selecting State :${error}`);
  128 |             throw (error);
  129 |         }
  130 |     }
  131 | 
  132 |     async selectContinue(): Promise<void> {
  133 |         try {
  134 |             await this.btnContinue.click();
  135 |         } catch (error) {
  136 |             console.log(`Exception occured while clicking Continue :${error}`);
  137 |             throw (error);
  138 |         }
  139 |     }
  140 |     async selectExistingAddress(): Promise<void> {
  141 |         try {
  142 |             await this.radioExistingAddress.waitFor({ state: "visible", timeout: 10000 });
  143 |             await this.radioExistingAddress.click();
  144 |         } catch (error) {
  145 |             console.log(`Exception during selection of Existing Address radio button:${error}`);
  146 |             throw (error);
  147 |         }
  148 |     }
  149 | 
  150 |     async selectContinueDeliveryDetails(): Promise<void> {
  151 |         try {
  152 |             await this.btnContinueDeliveryDetails.click();
  153 |         } catch (error) {
  154 |             console.log(`Exception occured while clicking Continue :${error}`);
  155 |             throw (error);
  156 |         }
  157 |     }
  158 | 
  159 |     async selectContinueDeliveryMethod(): Promise<void> {
  160 |         try {
  161 |             await this.btnContinueDeliveryMethod.click();
  162 |         } catch (error) {
  163 |             console.log(`Exception occured while clicking Continue :${error}`);
  164 |             throw (error);
  165 |         }
  166 |     }
  167 | 
  168 |     async checkTermsandCondition(): Promise<void> {
  169 |         try {
  170 |             await this.chkPaymentMethodCheckBox.click();
  171 |         } catch (error) {
  172 |             console.log(`Exception occured while clicking T&C :${error}`);
  173 |             throw (error);
  174 |         }
  175 |     }
  176 | 
  177 |     async selectContinuePaymentMethod(): Promise<void> {
  178 |         try {
  179 |             await this.btnContinuePaymentMethod.click();
  180 |         } catch (error) {
  181 |             console.log(`Exception occured while clicking Continue :${error}`);
  182 |             throw (error);
  183 |         }
  184 |     }
  185 | 
  186 |     async selectConfirmOrder() {
  187 |         try {
  188 |             await this.btnConfirmOrder.click();
  189 |             return new orderConfirmationPage(this.page);
  190 |         } catch (error) {
  191 |             console.log(`Exception occured while clicking Confirm :${error}`);
  192 |             throw (error);
  193 |         }
  194 |     }
  195 | }
```