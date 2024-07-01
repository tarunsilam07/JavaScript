const arr1=[1,2,3,4]
const arr2=[5,6,7,8]
arr1.push(arr2)
console.log(arr1)  // the two arrays doesnt get merged but the the intake array considers the pushed array as a indexed element
const a=["assam","agartala","arunachal","andaman"]
const b=["bengaluru","badwel","belgaon","bharatpur"]
const ab=a.concat(b)
console.log(ab)
const c=["chandigarh","chennai","cubban"]
const newab=[...a, ...b, ...c]    // same as concat but can concat more than two
console.log(newab)

console.log(Array.isArray("tarun"))
console.log(Array.from("tarun"))   //converts the string into array