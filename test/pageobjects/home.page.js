class HomePage
{
//WebElement Locators

    get btnSignIn()
    {
        return $('a.login');

    }
    get link_ContactUs()
    {
        return $('#contact-link');
    }
    get img_Logo()
    {
        return $('img.logo.img-responsive');
    }
    get search_Box()
    {
        return $('#search_query_top');
    }
    get btn_Search()
    {
        return $("//button[@name='submit_search']");
    }

//actions

    async navigatetoSignInPage()
    {
        await (await this.btnSignIn).click();
        console.log("signIn btn is clicked");
    }

    async searchText(data)
    {
        await (await this.search_Box).setValue(data);
        await (await this.btn_Search).click();
    }

}

export default new HomePage();