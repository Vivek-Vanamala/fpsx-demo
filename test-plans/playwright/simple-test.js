import { test, expect } from '@playwright/test';

/**
 * Simple Playwright test script with minimal operations
 * This script performs basic page navigation and verification
 */
test('Simple page test', async ({ page }) => {
  // Set test timeout to 60 seconds
  test.setTimeout(60000);

  // Set viewport size
  await page.setViewportSize({ width: 1280, height: 720 });

  // Navigate to a reliable URL
  await page.goto('https://example.com');

  // Wait for page to load
  await page.waitForLoadState('networkidle');

  // Take a screenshot
  await page.screenshot({ path: 'results/simple-test-screenshot.png' });

  // Verify page title
  const title = await page.title();
  expect(title).toBeTruthy();

  // Verify page loaded successfully
  const heading = page.locator('h1');
  await expect(heading).toBeVisible();

  // Simple delay before completion
  await page.waitForTimeout(2000);

  console.log('Test completed successfully');
});

