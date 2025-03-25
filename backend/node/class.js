const { log } = require("console"); //1
const crypto = require("crypto");
const fs=require("fs");

setTimeout(()=>console.log('set timeout'),0); //2

setImmediate(()=>console.log('setImmediate')) //3

const start =Date.now();

fs.readFile("sampl.txt", "utf8", function(err, data){
    setTimeout(()=>console.log("set inside fs "),0);
    setImmediate(()=>console.log('setImmediate fs 1'))
    crypto.pbkdf2("password","salt1",10000,1024,"sha512",function(err,data){
      
        
    })
})
// if log in not set immediate fist call
 console.log("hello"); //1

