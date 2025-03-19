// @ts-nocheck

const{test , expect}=require('@playwright/test')
/**
 * Opens the given URL in Playwright.
 * @param {import('@playwright/test').Page} page - The Playwright page object.
 */
async function openurl(page){

const url="https://www.automationexercise.com/"

await page.goto(url);

}

/**
 * Opens the given URL in Playwright.
 * @param {import('@playwright/test').Page} page - The Playwright page object.
 */

async function Alreadyregister(page){

    const url="https://www.automationexercise.com/login"
    await page.goto(url);
    const validtionmessagename=await page.locator("//input[@placeholder='Name']").fill("abc");
    const validationmessageemail=await page.locator("//input[@data-qa='signup-email']").fill("abc567@yopmail.com");
    await page.locator("//button[normalize-space()='Signup']").click();
    const message=await page.locator("//p[normalize-space()='Email Address already exist!']");
    const validmessage=await message.textContent();
    if (validmessage.includes("Email Address already exist!")) {  
        expect(validmessage).toBe("Email Address already exist!");
        console.log("User not able to register again: " + validmessage);
    } else {
        console.log("Validation message not shown for already registered user.");
    }
}

module.exports = { openurl, Alreadyregister };
