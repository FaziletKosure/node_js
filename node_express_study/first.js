let http = require("http");
var dt = require('./myfirstmodule');
//create a server object:
http.createServer(function (req, res){
    res.writeHead(200, {"Content-Type": "text/html"});//write a response to the client
    if(req.url=="/admin"){
        res.writeHead(200, {"Content-Type": "text/html"});//write a response to the client
        res.write(<html><body>
            <strong>"Admin sayfasi"</strong>
        </body></html>)
    }else if(req.url=='/') {
        res.writeHead(200, {"Content-Type": "text/html"});//write a response to the client
        res.write("Ana sayfa")
    }else if(req.url=='/customer') {
        res.writeHead(200, {"Content-Type": "application/json"});//write a response to the client
        res.write(JSON.stringify({name:'Fazilet',lastName:'Kosure'}))
    }
    res.end(" Hello World!");//end the response
}).listen(8080)//the server object listens on port 8080


// var counter = require('./counter')

// console.log(counter(['fazi','let','kosu','re']));