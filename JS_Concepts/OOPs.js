 let name="tarun      "

 Object.prototype.truelength=function (){
    console.log(`True length is :${this.trim().length}`);
 }
let username="assam   "
 //username.truelength();
 //"tarun     ".truelength()


 // call and this function

 function user(username){
    this.username=username;
    console.log('called');
 }

 function createuser(username,email,password){
        user.call(this,username);

        this.email=email;
        this.password=password;
 }
 const assam=new createuser("mg","assam@gmail.com",123);
 console.log(assam);

 