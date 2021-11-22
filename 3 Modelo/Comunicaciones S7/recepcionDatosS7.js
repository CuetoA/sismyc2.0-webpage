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

function recibiendoDatos(datos){

	if (datos[0] != 0){
		// Significa que los datos son nuevos
		const cache = datos

	} else {
		// Significa que los datos son viejos

	}

}

function limpiarDatos(){
	// Deberemos enviar un mensaje, perio primero, arreglar socket
}







module.exports.maquinaDeEstados = maquinaDeEstados;