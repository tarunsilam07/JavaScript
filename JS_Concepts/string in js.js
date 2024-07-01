const name="tarun "
const value=52
console.log(name+value); // older version of the string concatenation
console.log(`my name is ${name} and my value is ${value}`)  // modern way of concatenation of a string  // string interpolation
const user= new String('Assam')  // used to access all the prototypes
console.log(user[0]);
console.log(user.length)
console.log(user.toUpperCase());
console.log(user.charAt(3));
console.log(user.indexOf('m'));
const sub=user.substring(0,3)
console.log(sub);
const sl=user.slice(0,2) // can use negative to start from reverse
console.log(sl);
const str="      mg    " 
console.log(str);
console.log(str.trim());
