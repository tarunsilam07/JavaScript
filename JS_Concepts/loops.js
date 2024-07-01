// For of Loop

const arr=[1,2,3,4,5]
for (const val of arr) {
   // console.log(val);
}
const greet="assam"
for (const it of greet) {
   // console.log(it);
}

const mpp= new Map();
mpp.set(1,2)
mpp.set(3,4)
mpp.set(5,6)
mpp.set(5,6)
//console.log(mpp);
for (const [it,value] of mpp) {
   // console.log(it, "-",value);
}

const obb={
    name:"tarun",
    num:52,
    country:"india"
}
for (const key in obb) {
    //console.log(`${key} ---${obb[key]}`);  // way of looping in the objectss  // can be used for arrays aswell
}

const city=["vizag","hyderabad","bangalore","mumbai","delhi"]
city.forEach((item)=>
{
  // console.log(item);    //for each
})

city.forEach((item,index,arr)=>{
   //console.log(item,index,arr)
})

const coding=[
   {
      language :"javascript",
      short:"js"
   },
   {
      language :"python",
      short:"py"
   },
   {
      language :"java",
      short:"java"
   }
]

coding.forEach((item)=>{
      console.log(item.short)
})