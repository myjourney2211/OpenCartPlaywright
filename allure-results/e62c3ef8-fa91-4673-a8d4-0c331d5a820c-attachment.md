# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: LogoutSessionAbruptBrowserClose.spec.ts >> Logout Session after Abrupt Browser Closure @sanity @master
- Location: tests\LogoutSessionAbruptBrowserClose.spec.ts:25:5

# Error details

```
Error: page.goto: Target page, context or browser has been closed
```

```
Error: page.waitForTimeout: Target page, context or browser has been closed
```

# Test source

```ts
  1  | import { test, expect } from "@playwright/test";
  2  | import { homePage } from "../pages/homePage";
  3  | import { TestConfig } from "../test.config";
  4  | import { loginPage } from "../pages/loginPage";
  5  | import { myAccountPage } from "../pages/myAccountPage";
  6  | 
  7  | let config: TestConfig;
  8  | let home: homePage;
  9  | let loginpg: loginPage;
  10 | let myAccPg: myAccountPage;
  11 | 
  12 | test.beforeEach(async ({ page }) => {
  13 |     home = new homePage(page);
  14 |     loginpg = new loginPage(page);
  15 |     myAccPg = new myAccountPage(page);
  16 |     config = new TestConfig();
  17 |     await page.goto(config.appUrl);
  18 | })
  19 | 
  20 | test.afterEach(async ({ page }) => {
> 21 |     await page.waitForTimeout(3000);
     |                ^ Error: page.waitForTimeout: Target page, context or browser has been closed
  22 |     await page.close();
  23 | })
  24 | 
  25 | test("Logout Session after Abrupt Browser Closure @sanity @master", async ({page}) => {
  26 |     await home.clickMyAccount();
  27 |     await home.clickLogin();
  28 | 
  29 |     await loginpg.setEmail(config.email);
  30 |     await loginpg.setPassword(config.password);
  31 | 
  32 |     await loginpg.clickLoginBtn();
  33 | 
  34 |     expect(await myAccPg.isMyAccountPageExists()).toBeTruthy();
  35 | 
  36 |     await page.close();
  37 | 
  38 |     await page.goto(config.appUrl);
  39 | 
  40 |     await home.clickMyAccount();
  41 | 
  42 |     expect(await home.isLogoutLinkAvailable()).toBe(true);
  43 | })
  44 | 
```