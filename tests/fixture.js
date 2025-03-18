const{test}=require('@playwright/test');


exports.CustomTest=test.extend({ async page({page}, use){

    await page.goto("https://www.automationexercise.com/login");
    await page.locator("//body//div//header//div//div//div//div//div//header//div//div//div//div//ul//li//a[@href='#login']//i").click();
    await page.locator("(//input[@placeholder='Email address'])[1]").fill("Anshul.gupta@resourcifi.com");
    await page.locator("(//input[@placeholder='Password'])[1]").fill("Anshul11@123");
    await page.locator("//button[normalize-space()='Login']").click();
    console.log("Anshul logged in successfully")

    await use(page)


}




})