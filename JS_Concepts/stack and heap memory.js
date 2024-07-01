// stack memory-->primitive data types;
// Heap memory -->non primitive data types; 

// stack memory addrssing and intialisation

let username="tarun"
let user1=username    // here when the user value is intialized to username the copy or the duplicate of the memory is assigned to user
console.log(user1);  
user1="assam"
console.log(user1);
console.log(username);   // resulting to no change in the original memory even though the user is altered later 


// heap memory addressing and intialization
let myuser ={
    name:"tarun",
    email: "tarun@gmailcom"
}
let usertwo= myuser     // here in the heap memory the original refrence is passed to the intialised variable
usertwo.email="tarun@yahoo.com"  //changes made in the intialised variable ressemble the change in the original memory aswell
console.log(usertwo.email);
console.log(myuser.email);