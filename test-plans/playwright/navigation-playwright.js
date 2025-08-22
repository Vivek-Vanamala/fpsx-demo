import { test } from '@playwright/test';
import config from '@/config/config';
import random from '@/utils/random';

const delay = (ms) => {
      return new Promise((resolve) => setTimeout(resolve, ms));
};
test('Salesforce Recording - Tue Aug 19 2025 11:44:52 GMT+0530 (India Standard Time)', async ({
      page,
}) => {
      test.setTimeout(0);
      page.setDefaultTimeout(120000);
      await page.setViewportSize({ width: 3440, height: 1318 });
      await page.goto('https://sdb30.perf2t.pc-rnd.pc-aws.salesforce.com/');

      const username = process.env.username;
      // tagName = "INPUT", inputType = "email", value = "cwchatteruser1@618.org", alternative selectors = ['aria/Username[role="textbox"]']
      await page.fill('div > form[name="login"] input[type="email"]', username);
      await delay(968);
      // tagName = "INPUT", inputType = "password", alternative selectors = ['aria/Password']
      await page.click('div > div input[type="password"]');
      await delay(1134);
      
      const password = process.env.password;
      // tagName = "INPUT", inputType = "password", value = "******", alternative selectors = ['aria/Password']
      await page.fill('div > div input[type="password"]', password);
      await delay(573);
      // tagName = "INPUT", inputType = "submit", alternative selectors = ['aria/Log In[role="button"]']
      await page.click('div > div input[type="submit"]');
      await page.waitForLoadState('domcontentloaded');
      await delay(155);
      // tagName = "SPAN", alternative selectors = ['text/ProductIQ']
      await page.click(
            'nav[aria-label="Global"] one-app-nav-bar-item-root[data-id="0KD0M00000151OQWAY"] span.slds-truncate',
      );
      await page.waitForLoadState('domcontentloaded');
      await delay(11219);
      // tagName = "DIV", parentSelectors = [["header.slds-global-header_container span[aria-label=\"Global Header\"] ul.slds-global-actions"]]
      await page.click(
            'div.uiPopupTrigger a.menuTriggerLink > div.headerTrigger',
      );
      await delay(5621);
      const pageEvent1 = page.waitForEvent('popup');
      // tagName = "SPAN", parentSelectors = [["div.setupGear > div.uiMenu ul.scrollable"]], alternative selectors = ['text/Setup for current app']
      await page.click(
            'li.slds-dropdown__item > a[data-id="related_setup_app_home"] span.slds-form-element__label',
      );
      const tab1 = await pageEvent1;
      await delay(1000);
      // tagName = "DIV", parentSelectors = [["div.slds-brand-band > div.slds-template__container ul[aria-label=\"Setup Tree\"]"],["aria/Setup Tree[role=\"tree\"]"]], alternative selectors = ['aria/Salesforce Go[role="generic"]']
      await tab1.click(
            'div.windowViewMode-maximized ul[aria-label="Setup Tree"] div[title="Salesforce Go"]',
      );
      await delay(7300);
      // tagName = "A", parentSelectors = [["div.slds-brand-band > div.slds-template__container ul[aria-label=\"Setup Tree\"]"],["aria/Setup Tree[role=\"tree\"]"]], alternative selectors = ['aria/Release Updates[role="link"]']
      await tab1.click(
            'div.slds-tree_container li[aria-label="Release Updates"] a.slds-tree__item-label',
      );
      await tab1.waitForLoadState('domcontentloaded');
      await delay(3093);
      // tagName = "A", parentSelectors = [["div.slds-brand-band > div.slds-template__container ul[aria-label=\"Setup Tree\"]"],["aria/Setup Tree[role=\"tree\"]"]], alternative selectors = ['aria/Sales Cloud Everywhere[role="link"]']
      await tab1.click(
            'div.slds-tree_container li[aria-label="Sales Cloud Everywhere"] a.slds-tree__item-label',
      );
      await tab1.waitForLoadState('domcontentloaded');
      await delay(2787);
      // tagName = "H4", parentSelectors = [["div.slds-brand-band > div.slds-template__container ul[aria-label=\"Setup Tree\"]"],["aria/Setup Tree[role=\"tree\"]"]], alternative selectors = ['aria/Platform Tools[role="heading"]']
      await tab1.click(
            'div.windowViewMode-maximized li[aria-label="Platform Tools"] > h4.slds-text-title_caps',
      );
      await delay(4456);
      // tagName = "LIGHTNING-PRIMITIVE-ICON", parentSelectors = [["div.slds-brand-band > div.slds-template__container ul[aria-label=\"Setup Tree\"]"],["aria/Setup Tree[role=\"tree\"]"]]
      await tab1.click(
            'ul[aria-label="Setup Tree"] > li[aria-label="Apps"] lightning-primitive-icon',
      );
      await delay(1144);
      // tagName = "DIV", parentSelectors = [["div.windowViewMode-maximized ul[aria-label=\"Setup Tree\"] ul"]], alternative selectors = ['aria/AppExchange Marketplace[role="generic"]']
      await tab1.click(
            'ul[aria-label="Setup Tree"] > li[aria-label="Apps"] div[title="AppExchange Marketplace"]',
      );
      await delay(904);
      // tagName = "A", parentSelectors = [["div.windowViewMode-maximized ul[aria-label=\"Setup Tree\"] ul"]], alternative selectors = ['aria/AppExchange Marketplace[role="link"]']
      await tab1.click(
            'li[aria-label="Apps"] li[aria-label="AppExchange Marketplace"] a.slds-tree__item-label',
      );
      await tab1.waitForLoadState('domcontentloaded');
      await delay(2623);
      // tagName = "BUTTON", inputType = "button", alternative selectors = ['aria/Cancel[role="button"]']
      await tab1.click('div.modal-body > div.appx_main button[type="button"]');
      await tab1.waitForLoadState('domcontentloaded');
      await delay(8284);
      // tagName = "LIGHTNING-PRIMITIVE-ICON", parentSelectors = [["div.windowViewMode-maximized ul[aria-label=\"Setup Tree\"] ul"]]
      await tab1.click(
            'ul > li[aria-label="Intelligent Apps"] lightning-primitive-icon',
      );
      await delay(1726);
      // tagName = "A", parentSelectors = [["ul[aria-label=\"Setup Tree\"] li[aria-label=\"Intelligent Apps\"] > ul"],["text/App HubTemplates"]], alternative selectors = ['aria/App Hub[role="link"]']
      await tab1.click(
            'li[aria-label="Intelligent Apps"] li[aria-label="App Hub"] a.slds-tree__item-label',
      );
      await tab1.waitForLoadState('domcontentloaded');
      await delay(1276);
      // tagName = "A", parentSelectors = [["ul[aria-label=\"Setup Tree\"] li[aria-label=\"Intelligent Apps\"] > ul"],["text/App HubTemplates"]], alternative selectors = ['aria/Templates[role="link"]']
      await tab1.click(
            'li[aria-label="Intelligent Apps"] li[aria-label="Templates"] a.slds-tree__item-label',
      );
      await tab1.waitForLoadState('domcontentloaded');
      await delay(4109);
      // tagName = "LIGHTNING-PRIMITIVE-ICON", parentSelectors = [["div.slds-brand-band > div.slds-template__container ul[aria-label=\"Setup Tree\"]"],["aria/Setup Tree[role=\"tree\"]"]]
      await tab1.click(
            'ul[aria-label="Setup Tree"] > li[aria-label="Einstein"] lightning-primitive-icon',
      );
      await delay(5688);
      // tagName = "SPAN", parentSelectors = [["div.tabsetHeader div[aria-label=\"Workspaces\"] ul.tabBarItems"],["text/HomeObject ManagerObject"]]
      await tab1.click(
            'div[aria-label="Workspace tabs for Setup"] a[title="Object Manager"] > span.title',
      );
      await tab1.waitForLoadState('domcontentloaded');
      await delay(6135);
      // tagName = "SPAN", parentSelectors = [["div.tabsetHeader div[aria-label=\"Workspaces\"] ul.tabBarItems"],["text/HomeObject ManagerObject"]]
      await tab1.click(
            'div[aria-label="Workspace tabs for Setup"] a[title="Home"] > span.title',
      );
      await tab1.waitForLoadState('domcontentloaded');
      await delay(7542);
      // tagName = "A", parentSelectors = [["div.slds-brand-band > div.slds-template__container ul[aria-label=\"Setup Tree\"]"],["aria/Setup Tree[role=\"tree\"]"]], alternative selectors = ['aria/Identity[role="link"]']
      await tab1.click(
            'div.slds-tree_container li[aria-label="Identity"] a.slds-tree__item-label',
      );
      await delay(4125);
      // tagName = "A", parentSelectors = [["div.windowViewMode-maximized li[aria-label=\"Identity\"] > ul"],["text/Identity ProviderLogin"]], alternative selectors = ['aria/Identity Provider[role="link"]']
      await tab1.click(
            'li[aria-label="Identity"] li[aria-label="Identity Provider"] a.slds-tree__item-label',
      );
      await tab1.waitForLoadState('domcontentloaded');
      await delay(1342);
      // tagName = "A", parentSelectors = [["div.windowViewMode-maximized li[aria-label=\"Identity\"] > ul"],["text/Identity ProviderLogin"]], alternative selectors = ['aria/Login History[role="link"]']
      await tab1.click(
            'li[aria-label="Identity"] li[aria-label="Login History"] a.slds-tree__item-label',
      );
      await tab1.waitForLoadState('domcontentloaded');
      await delay(7130);
      // tagName = "SPAN", parentSelectors = [["header.slds-global-header_container span[aria-label=\"Global Header\"] ul.slds-global-actions"]]
      await tab1.click(
            'button[type="button"] > div.tooltipTrigger span.uiImage',
      );
      await delay(4644);
      // tagName = "A", alternative selectors = ['aria/Log Out[role="link"]']
      await tab1.click('div.panel-content > div.oneUserProfileCard a.logout');
      await tab1.waitForLoadState('domcontentloaded');
      await delay(3091);
});
