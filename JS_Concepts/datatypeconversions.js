let score="77abc"
console.log(typeof score)  

let convert= Number(score)   //type conversion from string to number
console.log(typeof convert)   //NAN appears when we call the value of mixed string and number conversions

console.log(convert);    // "" =false  "ccbas" =true