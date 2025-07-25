import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("https://www.google.com/");
  // Delay time to wait for OTP
  //   await page.waitForTimeout(5000); // Adjust the timeout as needed
  // Fetch data from the API endpoint
  const response = await page.request.get(
    "http://localhost:3000/api/otp?ref=your_ref_value"
  );

  // Fill in the OTP input field
  const otpInput = page.locator('textarea[name="q"]');
  await otpInput.fill(await response.json().then((data) => data.otp));
  await page.waitForTimeout(5000); // Adjust the timeout as needed
});

// http://localhost:${port}/api/otp?ref=your_ref_value
