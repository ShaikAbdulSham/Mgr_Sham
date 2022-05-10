const { getCapabilities } = require("@wdio/cli/build/utils");

describe('sample product search',async function(){

it('check search items',async function(){
/*
    await browser.url('https://www.amazon.in/');  
    const searchText= await $('#twotabsearchtextbox');
    await searchText.setValue('mobile');
    await browser.pause(2000);
    const searchBtn=await $('#nav-search-submit-button');
    await searchBtn.click();
    const productlist=await $$("span[class='a-size-medium a-color-base a-text-normal']");

     for(let i=0;i<productlist.length;i++)
    {
       // console.log(await productlist[i].getText());

    }

    const productPrice=await $$("span[class='a-price-whole']");
    const priceArray=[];
    for(let i=0;i<productPrice.length;i++)
    {
        priceArray[i]= (await productPrice[i].getText()).replace(/\D/g,'');
       // console.log(priceArray[i]);

    }
const minPrice=Math.min.apply(Math,priceArray);
console.log('The mimimum price is ',minPrice);
   
*/
//console.log({}+[]);
//console.log({}+5);
//console.dir(this)


/**
 * const profile={age:20, status:'single'};
const {age:ProfileAge,status:ProfileSatatus}=profile;
//console.log(ProfileAge,ProfileSatatus);

const arr=[1,2,2,2,2,2,1,3];
const arr1=[... new Set(arr)];
console.log(arr1);

*/

/*
const hasSameElements= (a,b)=>{

    return a.length===b.length && a.every((v,i)=> v===b[i])

}
console.log(hasSameElements([1,4,5],[1,4]));
*/


/*
const arr_sort=[1,3,4,5,2,7];
let j;
for(let i=0;i<arr_sort.length;i++)
{
    //console.log(Math.random());
    j=Math.floor(Math.random() *(i+1));
   // console.log(j);
    [arr_sort[i],arr_sort[j]]=[arr_sort[j],arr_sort[i]];

}
//console.log(arr_sort);

*/

/*
let y=[1,2,3] + [4,5,6];
//console.log(y);
*/

1/*
const x=[1,2,3];
x[-1]=-9;
console.log(x[x.indexOf(10000)]);
*/


/*const ary=[1,2,15,30,5,45,7];

console.log(ary.sort((a,b)=>{
    return  b-a;
    
    }));

    */

/*
console.log("Not a Number");
    console.log(NaN===NaN);

let i=Number.MAX_VALUE;
    console.log(i*i);
    console.log(i+1);
    console.log(i-1);
    console.log(i/i);

    */
/*
    const s={
        a:1,b:2
    
    }
const arr_s=[];
for(const k in s)
{
    arr_s.push(s[k])
}
console.log(arr_s);

*/
function findsecond_greatest_smallest(arr)
{
    //arr.sort((a,b)=> {return a-b});
    const unique_arr=[...new Set(arr.sort((a,b)=>{return a-b}))];
     console.log(unique_arr);
     console.log('second smallest and second greatest numbers are '+unique_arr[1],unique_arr[unique_arr.length-1]);

}
findsecond_greatest_smallest([1,5,6,7,3,2,7,8,9,22,44,33,1]);

console.log(Math.max.apply(Math,[1,5,6,7,3,2,7,8,9,22,44,33,1]))

console.log(Math.max.call(Math,1,5,3,4,9));
})


})

