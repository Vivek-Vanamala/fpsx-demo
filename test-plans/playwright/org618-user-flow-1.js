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

  // await page.waitForURL('https://synthetic618org28a.ist28.lightning.stm.force.com/lightning/page/home', {
  //   waitUntil: 'networkidle',
  // })

  //   await page.click(
  //     'div[aria-label="App"] button[title="App Launcher"] div.slds-r5',
  //   );
  // await page.fill(
  //   'lightning-input.searchBar > lightning-primitive-input-simple input[type="search"]',
  //   'lightning',
  // );

  // await page.waitForURL('https://synthetic618org28a.ist28.lightning.stm.force.com/lightning/page/home', {
  //   waitUntil: 'networkidle',
  // })

  // await page.click('a[data-label="Lightning"] > div.slds-size_small b')

  // await delay(5000)
  
  // await page.click(
  //   'button[type="button"] > div.tooltipTrigger span.uiImage',
  // );
  
  // page.click('div.panel-content > div.oneUserProfileCard a.logout')
  // await delay(5000)

  // page.waitForURL('https://synthetic618org28a.ist28.my.stm.salesforce.com/', {
  //   waitUntil: 'networkidle',
  // })
});
