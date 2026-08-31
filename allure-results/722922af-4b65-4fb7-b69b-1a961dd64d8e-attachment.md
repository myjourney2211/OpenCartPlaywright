# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: E2ETestCase.spec.ts >> End To End Test @master @E2ETest @vj
- Location: tests\E2ETestCase.spec.ts:64:5

# Error details

```
TimeoutError: locator.waitFor: Timeout 10000ms exceeded.
Call log:
  - waiting for locator('label').filter({ hasText: 'I want to use an existing address' }).last() to be visible

```

# Test source

```ts
  32  |         this.radioExistingAddress = this.page.locator('label').filter({ hasText: 'I want to use an existing address' }).last();
  33  |         this.btnContinueShipping = this.page.locator("#button-shipping-address");
  34  |     }
  35  |     //methods
  36  |     async isCheckOutPageAvailableByHeader(): Promise<boolean> {
  37  |         try {
  38  |             await this.lblPageHeader.waitFor({ state: "visible", timeout: 10000 });
  39  |             if (await this.lblPageHeader.textContent() == "Checkout") {
  40  |                 return true;
  41  |             }
  42  |         } catch (error) {
  43  |             console.log(`Exception during Checkout Page Title : ${error}`);
  44  |             throw (error);
  45  |         }
  46  |         return false;
  47  |     }
  48  | 
  49  |     async selectNewAddress(): Promise<void> {
  50  |         try {
  51  |             await this.radioNewAddress.waitFor({ state: "visible" });
  52  |             await this.radioNewAddress.click();
  53  |         } catch (error) {
  54  |             console.log(`Exception during selection of New Address radio button:${error}`);
  55  |             throw (error);
  56  |         }
  57  |     }
  58  |     async setFirstName(fname: string): Promise<void> {
  59  |         try {
  60  |             await this.txtFirstName.pressSequentially(fname);
  61  |         } catch (error) {
  62  |             console.log(`Exception occure while filling First Name :${error}`);
  63  |             throw (error);
  64  |         }
  65  |     }
  66  | 
  67  |     async setLastName(lname: string): Promise<void> {
  68  |         try {
  69  |             await this.txtLastName.pressSequentially(lname);
  70  |         } catch (error) {
  71  |             console.log(`Exception occure while filling Last Name :${error}`);
  72  |             throw (error);
  73  |         }
  74  |     }
  75  | 
  76  |     async setAddress1(addr: string): Promise<void> {
  77  |         try {
  78  |             await this.txtAddress1.pressSequentially(addr);
  79  |         } catch (error) {
  80  |             console.log(`Exception occure while filling Address1 :${error}`);
  81  |             throw (error);
  82  |         }
  83  |     }
  84  | 
  85  |     async setCity(city: string): Promise<void> {
  86  |         try {
  87  |             await this.txtcity.pressSequentially(city);
  88  |         } catch (error) {
  89  |             console.log(`Exception occure while filling City :${error}`);
  90  |             throw (error);
  91  |         }
  92  |     }
  93  | 
  94  |     async setPostCode(zip: string): Promise<void> {
  95  |         try {
  96  |             await this.txtPostCode.pressSequentially(zip);
  97  |         } catch (error) {
  98  |             console.log(`Exception occure while selecting Postal Code :${error}`);
  99  |             throw (error);
  100 |         }
  101 |     }
  102 | 
  103 |     async setCountry(country: string): Promise<void> {
  104 |         try {
  105 |             await this.txtCountry.pressSequentially(country);
  106 |         } catch (error) {
  107 |             console.log(`Exception occured while selecting Country :${error}`);
  108 |             throw (error);
  109 |         }
  110 |     }
  111 | 
  112 |     async setState(state: string): Promise<void> {
  113 |         try {
  114 |             await this.txtState.waitFor({state:"visible" , timeout: 10000});
  115 |             await this.txtState.pressSequentially(state);
  116 |         } catch (error) {
  117 |             console.log(`Exception occured while selecting State :${error}`);
  118 |             throw (error);
  119 |         }
  120 |     }
  121 | 
  122 |     async selectContinue(): Promise<void> {
  123 |         try {
  124 |             await this.btnContinue.click();
  125 |         } catch (error) {
  126 |             console.log(`Exception occured while clicking Continue :${error}`);
  127 |             throw (error);
  128 |         }
  129 |     }
  130 |     async selectExistingAddress(): Promise<void> {
  131 |         try {
> 132 |             await this.radioExistingAddress.waitFor({ state: "visible" , timeout: 10000});
      |                                             ^ TimeoutError: locator.waitFor: Timeout 10000ms exceeded.
  133 |             await this.radioExistingAddress.click();
  134 |         } catch (error) {
  135 |             console.log(`Exception during selection of Existing Address radio button:${error}`);
  136 |             throw (error);
  137 |         }
  138 |     }
  139 | 
  140 |     async selectContinueDelivery(): Promise<void> {
  141 |         try {
  142 |             await this.btnContinueShipping.click();
  143 |         } catch (error) {
  144 |             console.log(`Exception occured while clicking Continue :${error}`);
  145 |             throw (error);
  146 |         }
  147 |     }
  148 | 
  149 | 
  150 | 
  151 | 
  152 | }
```