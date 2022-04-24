describe('herokuapp website sample test',async function(){

        it('verify simple login test', async function(){
            await browser.url('https://the-internet.herokuapp.com/login');
             const userName= await $('#username');
             const password =await $('#password');
             const submitBtn=await $('//button[@type="submit"]');
             const flashLabel=await $('#flash');

             await userName.setValue('tomsmith');
             await password.setValue('SuperSecretPassword!');
             await submitBtn.click();

             expect(flashLabel).toHaveTextContaining('You logged into a secure area!');

        })

})