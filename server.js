// Constantes para inicial servidor
const http = require('http')
const express = require('express');
const app = express();
const server = http.createServer(app);
console.log('pasando por servidor');
const io = require('socket.io')(server);


// Constantes para abrir el puerto serial
const Serialport = require("serialport");
const Readline = Serialport.parsers.Readline;
const port = new Serialport('COM3', { baudRate: 9600, databits: 8, parity: 'none', stopbits: 1, flowControl: false, buffersize: 32768 });
const parser = port.pipe(new Readline());

//import {maquinaDeEstados} from '/3 Modelo/Comunicaciones S7/recepcionDatosS7.js';
//const recepcion = require('./3 Modelo/Comunicaciones S7/recepcionDatosS7');
//recepcion.maquinaDeEstados(10000);

//const recepcion = require('./2 Controlador/registrar.js');


// Instalando servidor
app.use(express.static(__dirname + '/')); // Main path
server.listen(8080, () => {
	console.log('Servidor escuchando en http://localhost:8080')
});


// Utilizando máquina de estados
maquinaDeEstados(10000);
function maquinaDeEstados(tiempo){
	//console.log('entrando');
	let mensaje = 'CMD0001 1,16,199,0,0';
	let complemento = ''
	let bandera = port.write(mensaje);
	if (bandera){ complemento = 'Mensaje enviado correctamente: ' + mensaje}
		else{ complemento = 'Mensaje fallido: ' + mensaje}
	console.log(complemento)

	setTimeout(() => maquinaDeEstados(tiempo), tiempo);
};


// Envío de datos externo
function escribiendoEnPuerto(mensaje){
	port.write(mensaje);
}

// Envío de datos interno
function enviandoInternamente(evento, ){

}


// Recepción de datos internos
io.on("connection", (socket) => {
	console.log("connected to the web-socket!");

	// Eventos que detonarán el envío
	socket.on('ir-a-registrar', (valor) => {
		app.get('/', function (req, res) { res.sendFile(__dirname + '/registrar.html') });
	});

	socket.on('apagar', (valor) => {
		
	});

	socket.on('enviarSerial', (mensaje) => {escribiendoEnPuerto(mensaje)});
});


// Recepción de datos externos
parser.on('data', function(data){
	console.log('Se ha recibido: ', data)
});





//Llamado a la página
app.get('/', function (req, res) { res.sendFile(__dirname + '/index.html') });