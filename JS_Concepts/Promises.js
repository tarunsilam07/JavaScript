const one=new Promise((resolve,reject)=>{
    //doing an async task
    //DB calls , cryptography,network
    setTimeout(()=>
    {
        console.log('Async task is completed');
        resolve();
    },1000)
})

one.then(()=>{
    console.log("promise consumed");
})

new Promise((resolve,reject)=>
{
    setTimeout(()=>
    {
        console.log("async task2");
        resolve();
    },1000)
}).then(()=>{
    console.log("task 2 is complete");
})

const two=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve({username:"tarun",email:"tarun79767@gmail.com"})
    },1000)
})

two.then((user)=>{
    console.log(user);
})

const three=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error=true
        if(!error){
            resolve({username:"assam",password:"MG"})
        }
        else reject('ERROR: something went wrong')
    },1000)
})

three.then((user)=>{
    console.log(user);
    return user.username;
}).then((username)=>{
    console.log(username);
}).catch((error)=>{
    console.log(error);
}).finally(()=>{
    console.log("the promise is either resolved or rejected");
})

const four=new Promise((resolve,reject)=>{
    setTimeout(()=>{
       let error=true;
       if(!error)
        {
            resolve({username:"dhoni",password:"777"})
        } 
        else reject("ERROR: Dhoni went wrong")
    },1000)
})

async function consumefour(){
    try {
        const response=await four
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumefour()

async function getusers(){
   try {
    const response=await fetch('https://jsonplaceholder.typicode.com/users')
    const data=await response.json();
    console.log(data);
   } catch (error) {
    console.log('E:',error);
   }
}

getusers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data)
})
.catch((error)=>{
    console.log(error);
})



