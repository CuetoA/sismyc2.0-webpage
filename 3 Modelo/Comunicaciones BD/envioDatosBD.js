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
	    
		datosDeRiego: {
			rangoTemperaturaInferior: diccionario.get('rangoTemperaturaInferior'),
			rangoTemperaturaSuperior: diccionario.get('rangoTemperaturaSuperior'),
			rangoHumedadInferior: diccionario.get('rangoHumedadInferior'),

			rangoHumedadSuperior: diccionario.get('rangoHumedadSuperior'),
			ciclosMedicionNumero: diccionario.get('ciclosMedicionNumero'),
			ciclosMedicionUnidad: diccionario.get('ciclosMedicionUnidad'),

			fertilizantePorRiego: diccionario.get('fertilizantePorRiego'),
			aguaPorRiego: diccionario.get('aguaPorRiego'),
			ciclosDeRiego: diccionario.get('ciclosDeRiego'),
			ciclosDeRiegoUnidad: diccionario.get('ciclosDeRiegoUnidad')
		},



	    datosDeRegistro: {
	    	id: diccionario.get('id'),
			fechaDeRegistro: diccionario.get('fechaDeRegistro'),
			edadDeIngreso: diccionario.get('edadDeIngreso'),
			registrante: diccionario.get('registrante'),
			tamañoDeIngresoAlSistema: {
				alturaDeRegistro: diccionario.get('alturaDeRegistro'),
				diametroDeRegistro: diccionario.get('diametroDeRegistro')
			}
	    },
		

	    informacionDelArbol:{
	    	anilloRelacionado: diccionario.get('anilloRelacionado'),
			ubicacion: diccionario.get('ubicacion'),
			taxonomia: {
				familia: diccionario.get('familia'),
				genero: diccionario.get('genero'),
				especie: diccionario.get('especie')
			}
	    },

	    datosDeTelemetria: {type: [datosTelemetriaSchema], required: false}
	});
	arbolito.save()
		.then(() => console.log('Creando arbolito'))
		.catch((err) => console.log('Sin crear el arbolito'));
}

//export {enviarDatosArbolBD};
module.exports.enviarDatosArbolBD = enviarDatosArbolBD;
