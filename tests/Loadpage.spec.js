const{test , expect}=require('@playwright/test')


test("test the functionality of load the page" , async({page})=>{

const validurl="https://www.automationexercise.com/login";

await page.goto(validurl);
const currenturl= await page.url();
if(currenturl==validurl){
    console.log("page opened correctly" +currenturl)
    expect("currenturl").toBeTruthy();

}
else{
    console.log("page not opened correctly while project is not opened ")
}


})