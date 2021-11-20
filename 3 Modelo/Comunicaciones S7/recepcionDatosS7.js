// Socket
const socket = io();

//export {maquinaDeEstados}

function maquinaDeEstados(tiempo){
	mensaje = 'CMD0001 1,16,0,0,0';
	socket.emit('enviarSerial', mensaje );
	console.log('hola')
	setTimeout(() => maquinaDeEstados(tiempo), tiempo);
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