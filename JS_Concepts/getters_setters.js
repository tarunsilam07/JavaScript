class user{
    constructor(email,password){
        this.email=email;
        this.password=password
    }
    get password(){
        return this._password.toUpperCase()
    }

    set password(value){
        this._password=value
    }
}
const assam=new user("tarun@gmail.com","abc")
console.log(assam.password);