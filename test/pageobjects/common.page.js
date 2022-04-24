class CommonPage{

  async openHomePage()
  { 
      await  browser.url("http://automationpractice.com/index.php");

  }
  async getPageTitle()
  {
      return await browser.getTitle();
  }

}

export default new CommonPage();