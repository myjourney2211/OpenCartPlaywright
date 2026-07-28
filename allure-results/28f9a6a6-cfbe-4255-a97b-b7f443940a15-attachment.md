# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Login.spec.ts >> Login Test @sanity @master
- Location: tests\Login.spec.ts:26:5

# Error details

```
Error: page.goto: net::ERR_ABORTED at https://tutorialsninja.com/demo/
Call log:
  - navigating to "https://tutorialsninja.com/demo/", waiting until "load"

```

```
Error: page.waitForTimeout: Target page, context or browser has been closed
```

```
Error: browserContext.close: Target page, context or browser has been closed
```