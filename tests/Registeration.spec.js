    const{test , expect , request}=require('@playwright/test');
    const { openurl, Alreadyregister } = require('./AutomationMethod'); 
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

        await openurl(page);
        await Alreadyregister(page);

      })

      
  

    test("test the functionality of Enter the data information" , async({page})=>{
    
     await openurl(page);
     await page.locator("//a[normalize-space()='Signup / Login']").click();
    
    const validtionmessagename=await page.locator("//input[@placeholder='Name']").fill("abcd");
    const validationmessageemail=await page.locator("//input[@data-qa='signup-email']").fill("abc5678@yopmail.com");
    await page.locator("//button[normalize-space()='Signup']").click();
    await page.locator("//input[@value='Mr']");
    await page.locator("//input[@type='password']").fill("abc111@123")
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

    expect(Accountcreated).toBe("https://www.automationexercise.com/account_created")
    console.log("user account created successfully" +Accountcreated )
    await page.pause();
})
      
          // API Testing

        test.only("test the api of login with valid email and password" , async({request})=>{

        const responseget=await request.post('https://automationexercise.com/api/verifyLogin',{

        data: {

         email:   "abc567@yopmail.com",
         password:   "abc11@123",
         }
 
        })
      // ✅ Check if API response is 200 (Success)
       expect(responseget.status()).toBe(200);

      // ✅ Get response body
      const reponsebody=await responseget.json();
      console.log("Response is getting"+reponsebody)

      // ✅ Validate response contains token or success message
  expect(reponsebody).toBe('token')

})


   //Registeration Api

   test("test the functionality of registeration api" , async({request})=>{

    const response=await request.post('https://automationexercise.com/api/createAccount'{

        data: name="Aditya", 
        email: "Aditya7@yopmail.com", 
        password: "Aditya11@123",
         title : "Mr", 
         birth_date:"11", 
         birth_month: "October" birth_year, firstname, lastname, company, address1, address2, country, zipcode, state, city, mobile_number
    }


   })


