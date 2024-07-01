//IF
if(true)
    {
        // this block gets executed when written as default true
    }

// falsy values
//---> BigInt 0n, 0,-0,false,undefined,null,NaN, ""
// Truthy values
//---> true,1,"0",'false'," ",[],{},function(){}

//Nullish coalescing operator(??) : null undefined

let val1
val1=null ?? 10
let val2= undefined?? 73
console.log(val1);
console.log(val2);

// ternary operator

// condition ? true : false
100<80 ? console.log("true"): console.log("false");
