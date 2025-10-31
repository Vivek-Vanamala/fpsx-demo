import { test } from '@playwright/test';

const delay = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms))
}

test('Salesforce Recording - Wed Oct 09 2024 12:49:56 GMT+0530 (India Standard Time)', async ({
    page,
}) => {
    test.setTimeout(120000)
    await page.setViewportSize({ width: 1792, height: 974 });
    await page.goto('https://sdb30.perf2t.pc-rnd.pc-aws.salesforce.com');
    await page.screenshot({ path: '/results/screenshot.png' });

    const username = process.env.username;
    const password = process.env.password;

    await page.click('div > form[name="login"] input[type="email"]');
    await page.fill(
        'div > form[name="login"] input[type="email"]',
        username,
    );
    await page.click('div > div input[type="password"]');
    await page.fill('div > div input[type="password"]', password);

    await page.click('div > div input[type="submit"]')

    // The waitForURL is kept commented out as in your original script
    // await page.waitForURL('https://synthetic618org28a.ist28.lightning.stm.force.com/lightning/page/home', {
    //    waitUntil: 'networkidle',
    // })

    // --- New Steps to Open Google.com ---
    
    // Step 1: Navigate to Google's main page
    await page.goto('https://www.google.com');

    // Step 2 (Optional but recommended): Add a screenshot to confirm navigation
    await page.screenshot({ path: '/results/google_screenshot.png' });

    // Step 3 (Optional): Wait for the main search input field to be visible 
    // to confirm the page has loaded (replace '#APjFqb' with the current Google search input selector if needed)
    await page.waitForSelector('textarea[name="q"]');
    
});
