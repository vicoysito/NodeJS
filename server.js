/* 
 *ESTE ARCHIVO GENERA UN SERVIDOR EN NODEJS Y ES EL CORAZÓN DEL NODE.JS
 */

var http = require("http");

http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write("Hola Mundo con esto tambien puedo escribir html <h1>YUJUU!!</h1>");
  response.end();
}).listen(9080);


