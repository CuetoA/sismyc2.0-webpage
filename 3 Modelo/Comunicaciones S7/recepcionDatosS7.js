// Socket
//const socket = io();

//export {maquinaDeEstados}

function maquinaDeEstados(tiempo){
	mensaje = 'CMD0001 1,16,0,0,0';
	//socket.emit('enviarSerial', mensaje );
	console.log('hola')
	setTimeout(() => maquinaDeEstados(tiempo), tiempo);
};



function recibiendoDatos(datos){



}









module.exports.maquinaDeEstados = maquinaDeEstados;