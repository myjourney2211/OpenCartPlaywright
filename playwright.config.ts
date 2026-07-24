import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  timeout: 30 * 1000,

  testDir: "./tests",
  fullyParallel: true,
  retries: 1,
  workers: 5,
  reporter: [
    ["html", { outputFolder: "../reports/html-report" }],
    [
      "allure-playwright",
      { outputFolder: "D:/openCartPlaywright/reports/allure-results" },
    ],
    ["list"],
  ],
  use: {
    trace: "on-first-retry",
    screenshot: "only-on-failure",
    video: "retain-on-failure",
    //headless: false,
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true, // Ignore SSL errors if any
    permissions: ['geolocation'], //Set necessary permission for geolocation based tests
  },

  //grep: /@master/,

  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },

/*     {
      name: "firefox",
      use: { ...devices["Desktop Firefox"] },
    },

    {
      name: "webkit",
      use: { ...devices["Desktop Safari"] },
    }, */
  ],
});
