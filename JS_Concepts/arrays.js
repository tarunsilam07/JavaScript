const arr= [1,2,3,4,4,2,"tarun"] // array declaration  // dynamical -->elements can be added after declaration aswell
     // can be a mix of datatypes 
     // array indexing starts from 0 
     // when copied it makes shallow copies -->takes the refrence of the original ->same as heap memory 

const arr1= new Array(1,2,3,4,5)
// console.log(arr[6]);

// Array methods
// arr.push(7)
// arr.push(8)
// console.log(arr);
// arr.pop()
// console.log(arr);   
// arr.unshift(9) // adds at the beginning of the array
// arr.shift() // removess the added element

// console.log(arr.includes(7))
// console.log(arr.indexOf(37)) //

 const arr2= [1,2,3,4,5]
// const arr3=arr2.join()
// console.log(arr2);
// console.log(arr3);
// console.log(typeof arr3)

//--> slice , splice
console.log("A ", arr2);
const sl= arr2.slice(1,3)   // doesnt include the last element or index in the range
console.log(sl);
console.log(arr2);         // slice doesnt effect the orginal array

const sp =arr2.splice(1,3)   // includes the last index also in the range
console.log(sp)
console.log(arr2)            // splice manipulates the original array