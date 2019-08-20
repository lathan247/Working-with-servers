"use strict"

var http = require("http");

function onRequest(request, response){
    console.log("User made request" + request.url);
    response.writeHead(200, {"Context-Type": "text/html"});
    response.write("<h1>Hello World!</h1>");
    response.end();
}

http.createServer(onRequest).listen(8888);
console.log("Server is up")