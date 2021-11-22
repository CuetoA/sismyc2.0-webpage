// Socket
//const socket = io.connect('http://localhost:8080');
//const socket = io();

//export {maquinaDeEstados}
function maquinaDeEstados(tiempo, port){
	//console.log('entrando');
	let mensaje = 'CMD0001 1,16,199,0,0\r';
	let complemento = ''
	let bandera = port.write(mensaje);
	if (bandera){ complemento = 'Mensaje enviado correctamente: ' + mensaje}
		else{ complemento = 'Mensaje fallido: ' + mensaje}
	console.log(complemento)

	setTimeout(() => maquinaDeEstados(tiempo, port), tiempo);
};

function recibiendoDatos(datos, port){

	datos = datos.toString()
	let notFound = -1;

	if (datos.search('RSP') != notFound) {
		// Qué pasa cuando la cadena contiene RSP
		let mensaje = datos
		datosArr = procesandoDatos(datos);
		limpiarDatos(datosArr, port);

	}else if (datos.search('Reg') != notFound){
		// Qué pasa cuando la cadena contiene Reg
		console.log('Confirmando comunicación: ', datos)
	}else if (datos.search('-Net') != notFound){
		// Que pasa cuando la carena contiene Net
		console.log('Negociando comunicación, mensaje: ', datos)
	}else{
		console.log('Recibiendo datos no programados: ', datos);
	}
}
function procesandoDatos(datos){
	let comando = 'RSP0001';
	let pinit = datos.search(comando) + comando.length
	datos = datos.slice(pinit, -1);
	let datosArr = datos.split(',');
	return datosArr
}

function limpiarDatos(datosArr, port){
	// Deberemos enviar un mensaje, perio primero, arreglar socket
	let registroInicio = datosArr[0];
	let registrosNumero = datosArr.length - 1;
	let numeroNodo = 12;

	//Creando mensaje
	let comando = 'CMD0004 '
	let mensaje = comando + registroInicio + ',' + registrosNumero + ',' + numeroNodo +',0,0'

	for (let i = 1; i < datosArr.length; i++){
		mensaje += ',0';
	}
	mensaje += '\r';
	port.write(mensaje);
}







module.exports.maquinaDeEstados = maquinaDeEstados;
module.exports.recibiendoDatos = recibiendoDatos;