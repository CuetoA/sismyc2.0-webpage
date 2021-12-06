// Socket
//const socket = io();



// Funciones para enviar datos del árbol al SSF
function ArbolSSF(diccionario, port){

	console.log('Para enviar datos recibimos el objeto: ', diccionario)
	// Generando lista de datos
	let contenidoMensaje = [];
	contenidoMensaje = ordenarDatosArbolSSF(diccionario, contenidoMensaje);

	// Concatenando lista de datos en una string
	let contenidoMensajeStr = ''
	for (let elemento in contenidoMensaje){
		contenidoMensajeStr += contenidoMensaje[elemento] + ','
	};

	// Preparando mensaje
	let registroInicio = 17;
	let noRegistros = contenidoMensaje.length;
	let nodoDirigido = parseInt( diccionario.get('anilloRelacionado') );
	enviarDatosSSF('envio', registroInicio, noRegistros, nodoDirigido, contenidoMensaje, port);
};


// Ordenando el contenido de los datos del árbol
function ordenarDatosArbolSSF(diccionario, contenidoMensaje){

	contenidoMensaje.push( parseInt( diccionario.get('anilloRelacionado') ) ); 			 //R17
	contenidoMensaje.push(1);												  			 //R18
	contenidoMensaje.push(0);												  			 //R19
	contenidoMensaje.push(1);												  			 //R20
	contenidoMensaje.push(parseInt( diccionario.get('id') ) );				  			 //R21
	contenidoMensaje.push(0);												  			 //R22
	contenidoMensaje.push(0);												   			 //R23
	contenidoMensaje.push(0);												  			 //R24
	contenidoMensaje.push(parseInt( diccionario.get('ciclosDeRiego') ) );	 		     //R25
	contenidoMensaje.push(0);												   	    	 //R26 ESTÁ EN DÍAS POR DEFAULT
	contenidoMensaje.push(parseInt( diccionario.get('ciclosMedicionNumero') ) );	     //R27
	contenidoMensaje.push(0);												   	    	 //R28 ESTÁ EN DÍAS POR DEFAULT
	contenidoMensaje.push(parseInt( diccionario.get('aguaPorRiego') ) );			     //R29
	contenidoMensaje.push(parseInt( diccionario.get('fertilizantePorRiego') ) );	     //R30
	contenidoMensaje.push(parseInt( diccionario.get('rangoTemperaturaInferior') ) );     //R31
	contenidoMensaje.push(parseInt( diccionario.get('rangoTemperaturaSuperior') ) );     //R32
	contenidoMensaje.push(parseInt( diccionario.get('rangoHumedadInferior') ) );         //R33
	contenidoMensaje.push(parseInt( diccionario.get('rangoHumedadSuperior') ) );         //R34

	return contenidoMensaje
}




function enviarDatosSSF(inOrOut, registroInicio, noRegistros, nodoDirigido, contenidoMensaje, port){


	let comando = ''

	// Header del mensaje
	if (inOrOut == 'envio'){ comando = 'CMD0002'}
	else if (inOrOut == 'recepcion'){ comando = 'CMD0001'}
	else{ console.log('Error en registrar.js función enviarDatosSSF() línea 73')};

	// Concatenando mensaje
	let s = ','
	let mensajeSerial = comando + ' ' + registroInicio + s + noRegistros + s + nodoDirigido + s;
	mensajeSerial += '0,0' + s + contenidoMensaje;

	console.log(mensajeSerial)

	port.write(mensajeSerial);
	// AQUÍ DEBEMOS PONER LA FORMA DE ENVIAR LOS DATOS POR EL PUERTO
	//socket.emit('enviarSerial', mensajeSerial );
}


//export{enviarDatosArbolSSF};
module.exports.enviarDatosArbolSSF = ArbolSSF;