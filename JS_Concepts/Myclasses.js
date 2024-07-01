class User{
    constructor(username,email,password){
        this.username=username;
        this.email=email;
        this.password=password;
    }
    encrypt(){
        return `${this.password}assam`
    }
    changeuser(){
        return `${this.username.toUpperCase()}`
    }

}
const mg= new User("tarun","tarun@gmail.com","12345")
console.log(mg.encrypt());
console.log(mg.changeuser());

// Inheritance

class school{
    constructor(username){
        this.username=username
    }
    logme(){
        console.log(`Username is ${this.username}`);
    }
}
class teacher extends school{
    constructor(username,email,password){
        super(username)
        this.email=email;
        this.password=password
    }
    
    addcourse(){
        console.log(`A new course is added by ${this.username}`);
    }
}

const temp=new teacher("tarun","tarun@gmail.com","1234")
temp.addcourse();

// static propss

class user1{
    constructor(username){
        this.username=username
    }
    logme(){
        console.log(`Username :  ${this.username}`);
    }
    static createid(){
        return `123`
    }
}

const assam1=new user1('tarun')
//console.log(assam1.createid());



