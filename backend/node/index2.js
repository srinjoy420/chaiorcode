const http = require("http");
function handelerfunction(req,res){
    console.log("incoming request");
    
    switch(req.method) {
        case "GET":{
            if(req.url==="/"){
                res.end("homepage");
            }
            if(req.url==="/contact"){
                res.end("Contact page");
            }
            if(req.url==="/about"){
                res.end("About page");
            }

        }
        break;
        case "POST":{

        }
        break
    }
}

const server = http.createServer(handelerfunction)
  
    // console.log(req.method);
    // console.log(req.url);
 

    // Set response headers
    // res.writeHead(200, { "Content-Type": "text/plain" });
    
    // Send response
    res.end("Ye lo ji response");
;

// Start the server
server.listen(7000, function () {
    console.log("Server is running on port 7000");
});