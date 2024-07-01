let mydate= new Date();
console.log(mydate.toString());   //differnt types of declarations of the dates
console.log(mydate.toDateString())
console.log(typeof mydate)   // date is an object

let ndate= new Date(2024,5,20)  // 5 denotes the month of the year and in the javascript the month starts from 0
console.log(ndate.toDateString());   // 0-->january like wise 05 --> june

let yydate= new Date("2024-10-7");  //yyyy-mm-dd if declared in this way the month starts from 1 itself becoz this is not an array;
console.log(yydate.toDateString()) 

let newtimestamp = Date.now()
console.log(newtimestamp);  // generates the timestamp in milliseconds

