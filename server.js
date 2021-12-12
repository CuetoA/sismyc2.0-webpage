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
const puertoSerie = 'COM17'
const port = new Serialport(puertoSerie, { baudRate: 9600, databits: 8, parity: 'none', stopbits: 1, flowControl: false, buffersize: 32768 })
const parser = port.pipe(new Readline());

// Constantes de bibliotecas
const recepcion = require('./3 Modelo/Comunicaciones S7/recepcionDatosS7');
const envioDatosBD = require('./3 Modelo/Comunicaciones BD/envioDatosBD');
const enviarDatosSSF = require('./3 Modelo/Comunicaciones S7/envioDatosS7.js');
const solicitudyRecepcionDeDatos = require('./3 Modelo/Comunicaciones BD/solicitudyRecepcionDeDatos');
// Constantes para MongodB
const mongoose = require('mongoose')
const mdburi = 'mongodb+srv://andres-cueto:amox1.0@cluster0.uur9i.mongodb.net/sismyc-db';
mongoose.connect(mdburi)
	.then((result) => console.log('connected to moongo db'))
	.catch((err) => console.log(err))


// Instalando servidor
app.use(express.static(__dirname + '/')); // Main path
server.listen(8080, () => {	
	console.log('Servidor escuchando en http://localhost:8080')
});

// Utilizando máquina de estados
setTimeout(() => recepcion.maquinaDeEstados(10000, port), 60 )// * 1000 * 2);

// Envío de datos externo
function escribiendoEnPuerto(mensaje){port.write(mensaje);}

// Envío de datos interno

//function enviandoInternamente(evento, ){}


// Recepción de datos internos
io.on("connection", (socket) => {
	console.log("connected to the web-socket!");

	// Eventos que detonarán el envío
	socket.on('ir-a-registrar', (valor) => {
		app.get('/', function (req, res) { res.sendFile(__dirname + '/registrar.html') });
	});

	//socket.on('apagar', (valor) => {
		
	//});

	socket.on('enviarBD', (arreglo) => {
		console.log('arreglo en server es: ', arreglo);
		diccionario = new Map(arreglo);
		let flag = envioDatosBD.enviarDatosArbolBD(diccionario);
		enviarDatosSSF.enviarDatosArbolSSF(diccionario, port)
	});

	socket.on('listaArboles', (mensaje) =>{solicitarLista()});

	async function solicitarLista(){
		let lista = await solicitudyRecepcionDeDatos.listaDeArboles();
		socket.emit(('listaDropdown'),lista);
	}

	socket.on('solicitudDatos', (elemento) =>{
		solicitandoDatos(elemento)
	});

	async function solicitandoDatos(elemento){
		let datos = await solicitudyRecepcionDeDatos.solicitarDatos(elemento);
		socket.emit(('datosSolicitados'),datos);
	}
	socket.on('enviarSerial', (mensaje) => {escribiendoEnPuerto(mensaje)});

	socket.on('modificarBD', (arreglo) => {
		diccionario = new Map(arreglo);
		//console.log('\npopo', diccionario)
		envioDatosBD.modificarDatosArbolBD(diccionario);
	});

	socket.on('eliminarBD', (idMongo) => envioDatosBD.eliminarArbolBD(idMongo) )

	socket.on('modoManual', (arreglo) => enviarDatosSSF.modoManual(arreglo, port))

});

// Recepción de datos externos
parser.on('data', function(data){
	recepcion.recibiendoDatos(data, port);
});


//Llamado a la página
app.get('/', function (req, res) { res.sendFile(__dirname + '/index.html') });