describe('herokuapp website sample test',async function(){
        describe('nesgted describe', async function(){

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

                    it('some simple calculations' , async()=>{
                            try{
                      
                        (function findMinMax(){
                                const arr1=[1,4,623,8,3,2];
                                const minNum=Math.min.apply(Math,arr1);
                                const maxNum=Math.max.apply(Math,arr1);
                                const total=arr1.reduce((acct,item)=>{ return acct=acct+item},0);
                                console.log(total-minNum,total-maxNum);

                        })();
                }
                catch(er)
                {
                        console.log('error message',er);
                }

                        
                    })

        })
 

});
describe('second describe block',async =>{
        it('second describe it block',async ()=>{
               
                console.log('hello');
        })
        
})
