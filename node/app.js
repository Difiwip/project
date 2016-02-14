var http = require("http"); // Variable http

// Creo la funcion que va adentro del createServer IMPORTANTE dar como paramentros solicitud y respuesta
var manejador = function(solicitud, respuesta){
  console.log("Se genero una peticion");
  respuesta.end("Hola mundo");
};

var servidor = http.createServer(manejador);

servidor.listen(8080);
