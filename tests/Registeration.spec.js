    const{test , expect}=require('@playwright/test')

    test("test the functionality of registration if user click on signup with name and emailid" , async({page})=>{
    
    const url="https://www.automationexercise.com/login"
    await page.goto(url);
    
    const validtionmessagename=await page.locator("//input[@placeholder='Name']").fill("Anshul");
    const validationmessageemail=await page.locator("//input[@data-qa='signup-email']").fill("Anshul.a.iper@gmail.com");
    await page.locator("//button[normalize-space()='Signup']").click();
    const signupurl="https://www.automationexercise.com/signup"
    expect(signupurl).toBe("https://www.automationexercise.com/signup");
    console.log("user redirect successfully" + signupurl)

})

    test("test the functionality of registration if user click on signup with emailid only" , async({page})=>{
    
    const url="https://www.automationexercise.com/login"
    await page.goto(url);
    
    const validtionmessagename=await page.locator("//input[@placeholder='Name']");
    const validationmessageemail=await page.locator("//input[@data-qa='signup-email']").fill("Anshul.a.iper@gmail.com");
    await page.locator("//button[normalize-space()='Signup']").click();
    const signupurl="https://www.automationexercise.com/login"
    signupurl=="https://www.automationexercise.com/login"
    expect(signupurl).toBe("https://www.automationexercise.com/login");
    console.log("user not able to redirect to registration page" + signupurl)

})


    test("test the functionality if already register user try to register" , async ({page})=>{


        
    })
  

    test.only("test the functionality of Enter the data information" , async({page})=>{
    
    const url="https://www.automationexercise.com/login"
    await page.goto(url);
    
    const validtionmessagename=await page.locator("//input[@placeholder='Name']").fill("abc");
    const validationmessageemail=await page.locator("//input[@data-qa='signup-email']").fill("abc567@yopmail.com");
    await page.locator("//button[normalize-space()='Signup']").click();
    await page.locator("//input[@value='Mr']");
    await page.locator("//input[@type='password']").fill("abc11@123")
    await page.locator("//select[@data-qa='days']").selectOption({label : "12"});
    await page.locator("//select[@data-qa='months']").selectOption({label : "June"});
    await page.locator("//select[@data-qa='years']").selectOption({label : "2001"});
    await page.locator("(//input[@value='1'])[1]").check();
    await page.locator("(//input[@value='1'])[2]").check();
    await page.locator("//input[@data-qa='first_name']").fill("abc");
    await page.locator("//input[@data-qa='last_name']").fill("xyz");
    await page.locator("//input[@data-qa='company']").fill("abcxyz");
    await page.locator("//input[@data-qa='address']").fill("111")
    await page.locator("//select[@data-qa='country']").selectOption({label : "India"});
    await page.locator("//input[@data-qa='state']").fill("uttakhand");
    await page.locator("//input[@data-qa='city']").fill("Noida")
    await page.locator("//input[@data-qa='zipcode']").fill("20107");
    await page.locator("//input[@data-qa='mobile_number']").fill("8989898989");
    const create=await page.locator("//button[normalize-space()='Create Account']");
    const createaccount=await create.click();
    //
    const Accountcreated="https://www.automationexercise.com/account_created";

    expect(Accountcreated).toHaveURL("https://www.automationexercise.com/account_created")
    console.log("user account created successfully" +Accountcreated )
    await page.pause();
})