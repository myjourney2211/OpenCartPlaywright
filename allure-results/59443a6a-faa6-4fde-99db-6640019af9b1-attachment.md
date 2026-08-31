# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: E2ETestCase.spec.ts >> End To End Test @master @E2ETest @vj
- Location: tests\E2ETestCase.spec.ts:67:5

# Error details

```
TimeoutError: locator.click: Timeout 15000ms exceeded.
Call log:
  - waiting for locator('#button-confirm')

```

# Test source

```ts
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
  123 |             await this.page.waitForTimeout(3000);
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
> 188 |             await this.btnConfirmOrder.click();
      |                                        ^ TimeoutError: locator.click: Timeout 15000ms exceeded.
  189 |             return new orderConfirmationPage(this.page);
  190 |         } catch (error) {
  191 |             console.log(`Exception occured while clicking Confirm :${error}`);
  192 |             throw (error);
  193 |         }
  194 |     }
  195 | }
```