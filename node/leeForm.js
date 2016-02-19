var http = require("http"),
    fs = require("fs");


    http.createServer(function(req,res){ // Esta funcion se ejecuta cada vez que se genera una peticion

      

      fs.readFile("./index.html",function(err,html){ // y esta funcion lee el html

        var html_string = html.toString();
        var variables = html_string.match(/[^\{\}]+(?=\})/g﻿); // Busco la coincidencia de "{}" que me va a devolver "{nombre}"
        var arreglo_parametros = []; // array que va a contener datos "nombre=algo"
        var parametros = {}; // hash para que "nombre" sea el dato y "algo" el valor "nombre:algo"


        if (req.url.indexOf("?") > 0) { // Si entra a este if es por que tiene un nombre para pasar ya que encontro el signo "?"
          //http://localhost:8080/?nombre=nico
          var url_data = req.url.split("?");
          //?nombre=nico
          var arreglo_parametros = url_data[1].split("&");
        }

        for (var i = arreglo_parametros.length - 1; i >= 0; i--) {
            var parametro = arreglo_parametros[i]; // Parametro va a ser igual a "nombre=nico"

            var param_data = parametro.split("="); // ["nombre","nico"]

            parametros[param_data[0]] = param_data[1]; // {nombre:nico}
        };

        for (var i = variables.length -1 ; i >= 0; i--) {

          var variable = variables[i]; /* Variable va a tomar el valor "nombre" entonces le digo que dentro de parametros
          busque el valor del dato "nombre"
          */

          html_string = html_string.replace("{"+variables[i]+"}",parametros[variable]); // lo remplazo
        };

        res.write(html_string);
        res.end();
      });

    }).listen(8080);
