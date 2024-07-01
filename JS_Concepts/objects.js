//object Literals
const sym= Symbol("assam")
const user={
    name: "tarun" ,      //keys and the values are defined by us
    num:52,
    [sym]:"assam",
    email:"tarun@gmail.com",
    isloggedin:true,
    login:["monday","tuesday","saturday"]   
}
// console.log(user.name)
// console.log(user["num"]) // better way of accesing the keys or values in the objects
// console.log(user[sym])   // if the symbol is not declared in the above syntax its type would always be as string 
// console.log(typeof user[sym])  //if it is  refered as this it gives string but it acts as symbol

user.email="assam@gmail.com" // to overwrite the object
console.log(user.email)
Object.freeze(user)
user.name="assam"  //here although the object is overwritten it does not prpogate as the object is freezed
console.log(user.name)
console.log(user);