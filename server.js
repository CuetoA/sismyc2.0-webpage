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


// Instalando servidor
app.use(express.static(__dirname + '/')); // Main path
server.listen(8080, () => {
	console.log('Server listening on http://localhost:8080')
});

// socket está escuchando
io.on("connection", (socket) => {
	console.log("connected to the web-socket!");

	// Eventos que detonarán el envío
	socket.on('ir-a-registrar', (valor) => {
		app.get('/', function (req, res) { res.sendFile(__dirname + '/registrar.html') });
	});

	socket.on('apagar', (valor) => {
		
	});

	socket.on('enviarSerial', (mensaje) => {port.write(mensaje)});
});



//Llamado a la página
app.get('/', function (req, res) { res.sendFile(__dirname + '/index.html') });