const enrutador = require('../enrutador');

function maquinaDeEstados(tiempo, port){
	let mensaje = 'CMD0001 1,16,199,0,0\r';
	let complemento = ''
	let bandera = port.write(mensaje);

	if (bandera){ complemento = 'Mensaje enviado correctamente: ' + mensaje}
		else{ complemento = 'Mensaje fallido: ' + mensaje}
	console.log(complemento)

	setTimeout(() => maquinaDeEstados(tiempo, port), tiempo);
};


function recibiendoDatos(datos, port){

	let notFound = -1;
	datos = datos.toString()
	
	console.log('');
	if(datos.search('-Net') != notFound){
		console.log('Negociando comunicación, mensaje');
	}else if (datos.search('Reg') != notFound){
		console.log('Confirmando comunicación');
	}else if (datos.search('RSP0001') != notFound) {
		enrutador.iniciarProcesamientoDeDatos(datos, port);
	}else{
		console.log('Recibiendo datos no programados');
	}
	//console.log('Mensaje recibido: ', datos);
}



module.exports.maquinaDeEstados = maquinaDeEstados;
module.exports.recibiendoDatos = recibiendoDatos;