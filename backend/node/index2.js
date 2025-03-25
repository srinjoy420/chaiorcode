const http=require("http");
const express=require("express");

const app=express();

// const server=http.createServer(function(res,req){
//     console.log("incoming ....");
   
//     console.log(req.method);
    
//     console.log(req.url);
    
//     res.send("ye lo")
    

// });

app.get("/", function(req, res){
    res.send("Hello World");
})
app.listen(8000,function(){
    console.log('server listening on');
    
})