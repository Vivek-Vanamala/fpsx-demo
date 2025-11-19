import { test, expect } from '@playwright/test';

/**
 * Flaky test script that occasionally fails and captures screenshots
 * This script randomly fails about 20% of the time to simulate real-world flakiness
 */
test('Flaky test with screenshot capture', async ({ page }) => {
  // Set test timeout to 90 seconds
  test.setTimeout(90000);

  // Set viewport size
  await page.setViewportSize({ width: 1280, height: 720 });

  console.log('Starting flaky test...');

  try {
    // Navigate to a test page
    await page.goto('https://example.com');
    
    // Wait for page to load
    await page.waitForLoadState('networkidle');
    
    // Random delay between 1-3 seconds
    const randomDelay = Math.floor(Math.random() * 2000) + 1000;
    await page.waitForTimeout(randomDelay);
    
    // Generate random number to determine if test should fail (20% failure rate)
    const shouldFail = Math.random() < 0.2;
    
    if (shouldFail) {
      console.log('Test is intentionally failing - capturing failure screenshot');
      
      // Take screenshot before failure
      const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
      const screenshotPath = `results/failure-screenshot-${timestamp}.png`;
      await page.screenshot({ 
        path: screenshotPath,
        fullPage: true 
      });
      
      console.log(`Screenshot saved to: ${screenshotPath}`);
      
      // Intentionally fail the test
      throw new Error('Intentional test failure to simulate flakiness');
    }
    
    // If not failing, perform normal test operations
    const title = await page.title();
    expect(title).toBeTruthy();
    
    // Verify page heading
    const heading = page.locator('h1');
    await expect(heading).toBeVisible();
    
    // Take success screenshot
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    await page.screenshot({ 
      path: `results/success-screenshot-${timestamp}.png` 
    });
    
    console.log('Test completed successfully');
    
  } catch (error) {
    // Capture screenshot on any error
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const errorScreenshotPath = `results/error-screenshot-${timestamp}.png`;
    
    try {
      await page.screenshot({ 
        path: errorScreenshotPath,
        fullPage: true 
      });
      console.log(`Error screenshot saved to: ${errorScreenshotPath}`);
    } catch (screenshotError) {
      console.error('Failed to capture error screenshot:', screenshotError);
    }
    
    // Re-throw the error to mark test as failed
    throw error;
  }
});

