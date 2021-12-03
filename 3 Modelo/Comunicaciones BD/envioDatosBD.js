// Socket
//const socket = io();
const ObjetoArbol = require('/Esquemas');

function enviarDatosArbolBD(diccionario){
	/*
		
		- Importar objetos

		Debemos recibir el diccionario y pasar esa información al esquema

		Posteriormente debemos crear el objeto y salvarlo

		Generar cofirmación

		Enviar confirmación
	*/

	const arbolito = new ObjetoArbol({
		identificacion : diccionario.get('id'),
	    responsableDeRegistro : diccionario.get('registrante')
	})
	arbolito.save()
		.then(() => console.log('Creando arbolito'))
		.catch((err) => console.log('Sin crear el arbolito'));
}

export {enviarDatosArbolBD};
