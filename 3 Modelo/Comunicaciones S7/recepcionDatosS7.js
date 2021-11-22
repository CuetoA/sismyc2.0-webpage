// Socket
//const socket = io.connect('http://localhost:8080');
//const socket = io();

//export {maquinaDeEstados}

function maquinaDeEstados(tiempo){
	console.log('entrando');
	mensaje = 'CMD0001 1,16,0,0,0';
	//socket.emit('enviarSerial', mensaje );
	port.write(mensaje);
	console.log('esto: ', port.write(mensaje))
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