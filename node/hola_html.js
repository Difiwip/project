var http = require("http"),
    fs = require("fs");


    http.createServer(function(req,res){ // Esta funcion se ejecuta cada vez que se genera una peticion
      fs.readFile("./index.html",function(err,html){ // y esta funcion lee el html
        res.writeHead(200,{"Content-type":"text/html"});
        res.write(html); // esta lo muestra en pantalla
        res.end();
      });
    }).listen(8080);
