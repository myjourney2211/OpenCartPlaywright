# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: AccountRegistration.spec.ts >> User Registration test @master
- Location: tests\AccountRegistration.spec.ts:23:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.pressSequentially: Target page, context or browser has been closed
Call log:
  - waiting for locator('#input-firstname')

```

# Test source

```ts
  1   | import { Page, Locator } from "@playwright/test";
  2   | 
  3   | export class registrationPage {
  4   |     private readonly page: Page;
  5   |     //variables
  6   |     private readonly txtFirstName: Locator;
  7   |     private readonly txtLastName: Locator;
  8   |     private readonly txtEmail: Locator;
  9   |     private readonly txtTelephone: Locator;
  10  |     private readonly txtPassword: Locator;
  11  |     private readonly txtConfirmPassword: Locator;
  12  |     private readonly chkPolicy: Locator;
  13  |     private readonly btnContinue: Locator;
  14  |     private readonly msgConfirmation: Locator;
  15  | 
  16  |     //constructor
  17  |     constructor(page: Page) {
  18  |         this.page = page;
  19  |         this.txtFirstName = this.page.locator("#input-firstname");
  20  |         this.txtLastName = this.page.locator("#input-lastname");
  21  |         this.txtEmail = this.page.locator("#input-email");
  22  |         this.txtTelephone = this.page.locator("#input-telephone");
  23  |         this.txtPassword = this.page.locator("#input-password");
  24  |         this.txtConfirmPassword = this.page.locator("#input-confirm");
  25  |         this.chkPolicy = this.page.locator("input[name='agree']");
  26  |         this.btnContinue = this.page.locator("input[value='Continue']");
  27  |         this.msgConfirmation = this.page.locator("div[id='content'] h1");
  28  |     }
  29  | 
  30  |     //methods
  31  |     async setFirstName(fname: string): Promise<void> {
  32  |         try {
> 33  |             await this.txtFirstName.pressSequentially(fname);
      |                                     ^ Error: locator.pressSequentially: Target page, context or browser has been closed
  34  |         } catch (error) {
  35  |             console.log(`Exception occure while filling First Name :${error}`);
  36  |             throw (error);
  37  |         }
  38  |     }
  39  | 
  40  |     async setLastName(lname: string): Promise<void> {
  41  |         try {
  42  |             await this.txtLastName.pressSequentially(lname);
  43  |         } catch (error) {
  44  |             console.log(`Exception occure while filling Last Name :${error}`);
  45  |             throw (error);
  46  |         }
  47  |     }
  48  | 
  49  |     async setEmail(email: string): Promise<void> {
  50  |         try {
  51  |             await this.txtEmail.pressSequentially(email);
  52  |         } catch (error) {
  53  |             console.log(`Exception occure while filling Email :${error}`);
  54  |             throw (error);
  55  |         }
  56  |     }
  57  | 
  58  |     async setTelephone(telephone: string): Promise<void> {
  59  |         try {
  60  |             await this.txtTelephone.pressSequentially(telephone);
  61  |         } catch (error) {
  62  |             console.log(`Exception occure while filling Telephone :${error}`);
  63  |             throw (error);
  64  |         }
  65  |     }
  66  | 
  67  |     async setPassword(password: string): Promise<void> {
  68  |         try {
  69  |             await this.txtPassword.pressSequentially(password);
  70  |         } catch (error) {
  71  |             console.log(`Exception occure while filling Password :${error}`);
  72  |             throw (error);
  73  |         }
  74  |     }
  75  | 
  76  |     async setConfirmPassword(confirmpassword: string): Promise<void> {
  77  |         try {
  78  |             await this.txtConfirmPassword.pressSequentially(confirmpassword);
  79  |         } catch (error) {
  80  |             console.log(`Exception occure while filling Confirm Password :${error}`);
  81  |             throw (error);
  82  |         }
  83  |     }
  84  | 
  85  |     async clickCheckPloicy(): Promise<void> {
  86  |         try {
  87  |             await this.chkPolicy.check();
  88  |         } catch (error) {
  89  |             console.log(`Exception occure while clicking Check Policy :${error}`);
  90  |             throw (error);
  91  |         }
  92  |     }
  93  | 
  94  |     async clickContinueButton(): Promise<void> {
  95  |         try {
  96  |             await this.btnContinue.click();
  97  |         } catch (error) {
  98  |             console.log(`Exception occure while clicking Continue button :${error}`);
  99  |             throw (error);
  100 |         }
  101 |     }
  102 | 
  103 |     async getConfirmationMsg(): Promise<string | null> {
  104 |         try {
  105 |             return await this.msgConfirmation.textContent();
  106 |         } catch (error) {
  107 |             console.log(`Exception occure while getting Confirmation message :${error}`);
  108 |             throw (error);
  109 |         }
  110 |     }
  111 | 
  112 |     async completeRegistration(fname: string, lname:string, email:string, telephone:string, password:string) {
  113 | 
  114 |         await this.setFirstName(fname);
  115 |         await this.setLastName(lname);
  116 |         await this.setEmail(email);
  117 |         await this.setTelephone(telephone);
  118 |         await this.setPassword(password);
  119 |         await this.setConfirmPassword(password);
  120 |         await this.clickCheckPloicy();
  121 |         await this.clickContinueButton();
  122 |     }
  123 | 
  124 | }
```