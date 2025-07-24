import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://seleniumbase.io/coffee/');
  const firstCoffee = page.getByText('Espresso $10.00espresso')
  await expect(firstCoffee).toHaveScreenshot();
});