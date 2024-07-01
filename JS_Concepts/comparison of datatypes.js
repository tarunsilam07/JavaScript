// console.log(2>3);
// console.log(2<3);
// console.log(2<"3");
// console.log("2">3);   //here although we are comparing a string to a number we are getting the correct boolean value
                     // this occurs due to js directly coverts the string to a number when intialized
console.log(null==0);  // the equality check operator doesnt convert the null into a number thats why we are gettig false as the output
console.log(null>=0); // the assignment operators(check) does convert the null into a number there by we are getting true
console.log(null>0);

/// === this triple check does check not only the value but also checks the data type equality
console.log("2"==2);
console.log("2"===2)