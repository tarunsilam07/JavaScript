(function assam(){
    console.log("database connected");
})();             // this is how a fucntion is immediately invoked through this syntax and should have a semicolon to break the IIFI aswell

(()=>{
    console.log("database two is connected");
})();

((name)=>{
    console.log(`data base three is connected ${name}`);
})("tarun");