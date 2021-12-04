// Socket
//const socket = io();
const ObjetoArbol = require('./Esquemas');

function enviarDatosArbolBD(diccionario){
	
	let flag = false;
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
	});

	arbolito.save()
		.then(() => flag = confirmarCreacion(true))
		.catch((err) => {
			flag = confirmarCreacion(false)
			console.log(err)
			console.log()
			});

	return flag
}

function confirmarCreacion(flag){
	if (flag){
		console.log('')
		console.log('El arbolito se ha creado exitosamente')
		console.log('')
	}
	else{
		console.log('')
		console.log('El arbolito NO se ha creado')
		console.log('')	
	}
	return flag
}

module.exports.enviarDatosArbolBD = enviarDatosArbolBD;
