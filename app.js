
//Hola Mundo de servidores :D
/*
var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send('Hola Mundo!');
});

app.listen(3000, function() {
  console.log('Aplicación ejemplo, escuchando el puerto 3000!');
});
*/

//Importación de librerías o módulos mediante require
var express = require('express'); //Mildware - Applicación
var http = require('http');       //Servidor
var socket = require('socket.io');   //Comunicación bidireccional
var serialport = require('serialport');

//Instancia de objetos
var app = express();
var server = http.Server(app);  
var io = socket(server);
var SerialPort = serialport.SerialPort;

var texto = 'Esta es una prueba';
var Prueba = [
{ author: "Carlos",
  text: "Hola! que tal?",
},
{ author: "Pepe",
  text: "Muy bien y tu??",
},
{ author: "Paco",
  text: "Genial",
},
];

  //Aplicando el middleware a respuestas con una URL específica
app.use(express.static(__dirname + '/')); // Main path

  //Manejador de ruta- Callback
  //Manda el archivo html a visualizar al servidor
app.get('/', function(req, res){
   res.sendFile(__dirname + 'index.html') 
});

  //El servidor escucha
server.listen(3000,() => 
  { console.log('Servidor corriendo en http://localhost:3000') });

//Necesitamos que el servidor este atento a una conexión, mediante el uso de io.on 


io.on('connection', function(socket){
  console.log("Un cliente se ha conectado...");
  //Número de usuarios conectados
  var connectedUsersCount = io.engine.clientsCount;
  console.log("Numero de usuarios conectados: " + connectedUsersCount);

  socket.emit("Prueba", texto);





}); //sockets io

