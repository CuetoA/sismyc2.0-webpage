// Socket
//const socket = io();
const ObjetoArbol = require('./Esquemas');

function enviarDatosArbolBD(diccionario){
	/*
		
		- Importar objetos

		Debemos recibir el diccionario y pasar esa información al esquema

		Posteriormente debemos crear el objeto y salvarlo

		Generar cofirmación

		Enviar confirmación
	*/
	console.log('diccionario en el enviardatos db: ', diccionario)

	const arbolito = new ObjetoArbol({
	    datosDeRegistro: {
	    	identificaciónDelArbol: diccionario.get('id'),
			fechaDeRegistro: 'Test',
			edadDeIngresoAlSistema: 'Test',
			responsableDelRegistro: diccionario.get('registrante'),
			tamañoDeIngresoAlSistema: {
				alturaDeIngreso: 'Test',
				diámetroDeIngreso: 'Test'
			}
		}
	});
	arbolito.save()
		.then(() => console.log('Creando arbolito'))
		.catch((err) => console.log('Sin crear el arbolito'));
}

//export {enviarDatosArbolBD};
module.exports.enviarDatosArbolBD = enviarDatosArbolBD;
