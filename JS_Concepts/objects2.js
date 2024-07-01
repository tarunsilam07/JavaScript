// const assam= new Object()  // singleton declaration of object
// console.log(assam)  
// const assam1={}
// console.log(assam1)   // object literal declaration
// assam1.name="tarun"
// assam1.num=52
// console.log(assam1)
// const user={
//     userdetails:{
//         username:{
//             firstname:"tarun",    // nested objectss
//             num:52
//         }
//     }
// }
// console.log(user)
// console.log(user.userdetails)
// console.log(user.userdetails.username);   // accessing of the objects in nestsz
// console.log(user.userdetails.username.firstname);
const obj1={a:3,b:2}
const obj2={c:7,d:5}
// const obj3={obj1,obj2}     //merging of two objectss
// console.log(obj3);
// const obj4=Object.assign({}, obj1, obj2)
// console.log(obj4)  // another way  of merging objectsss {}-->safety parameter
const obj5={...obj1,...obj2} // better way of merging the objects
console.log(obj5)
