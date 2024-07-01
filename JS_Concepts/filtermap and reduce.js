const nums=[1,2,3,4,5,6,7,8,9,10]
const assam =nums.filter((nums)=> nums>5)   //conditional accessing
//console.log(assam);

const mynums=nums.filter((nums)=>{
    return nums>=7           // when scope is intialized we need to return 
})
//console.log(mynums);
const mul=nums.map((num)=>num*10)
//console.log(mul);

const newnums=[1,2,3,4,5,6]
const intial=0
const total=newnums.reduce((accc,curr)=> accc+curr,0)
console.log(total);