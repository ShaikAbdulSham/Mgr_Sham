import CommonPage from "../pageobjects/common.page"
//import homePage from "../pageobjects/home.page";
import HomePage from "../pageobjects/home.page"
//import sampleHomePage from "./../../pages/sampleHome"


describe("SignUp Login and Update Cart Application",function(){
   
    
   

    it('verify the Title',async function(){    
        CommonPage.openHomePage();
        console.log(await CommonPage.getPageTitle());
        expect(await CommonPage.getPageTitle()).toHaveTextContaining('My Store');

    })

    it('verify the SignIn Button',async function(){   
        CommonPage.openHomePage();
        expect(await (await HomePage.btnSignIn).isExisting()).toEqual(false);

    })
    it.skip('search any from Searchtext',async function(){
        CommonPage.openHomePage();

        await HomePage.searchText('sarees');
        await browser.pause(3000);
    })
    it.skip('navigate to Sign In Page',async function()
    {
        CommonPage.openHomePage();
        await  HomePage.navigatetoSignInPage();
        console.log("NAvigated to Authentication Page");
        await browser.pause(6000);
    })

    
})