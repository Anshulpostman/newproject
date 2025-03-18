const { test , expect } = require('@playwright/test')
const{CustomTest}=require('./fixture')

CustomTest('Verify login success', async ({ page }) => {
 
     const url=await page.url();
     const dashboardurl="http://13.126.176.199/"
    await expect(url).toBe(dashboardurl); // Modify with actual dashboard URL
});

