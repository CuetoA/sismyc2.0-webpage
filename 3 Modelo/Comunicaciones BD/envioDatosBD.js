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


function actualizarDatosTelemetricos(dict){
	//console.log('Si ves esto me debes un elote');
	//console.log('analizando entrada:', dict)
	let [filtro, datos] = generandoObjetosJsoon(dict);
	actualizandoDatos(filtro , datos);

}

function actualizandoDatos(filtro , datos){
	console.log('Actualizando el objeto')
	console.log('filtro: ', filtro)
	console.log('datos: ', datos)
	//let respuesta = ObjetoArbol.findOneAndUpdate(filtro, datos);
	let done = function(err, result) {
		console.log('No sé que hago')
	}
	//let respuesta = ObjetoArbol.update(filtro, datos, done);
	ObjetoArbol.updateOne(filtro, datos, done);
	//console.log('Viendo que regresa Objeto arbol: ', respuesta);
}

function generandoObjetosJsoon(dict){
	//console.log('analizando entrada 2:', dict)
	let datosTelemetriaObj = {datosDeTelemetria: {
			fechayHora: dict.get('fechayHora'),
			temperatura: dict.get('temperatura'),
			humedad: dict.get('humedad'),
			ph: dict.get('ph'),
			nutrientes: {
				n: dict.get('n'),
				p: dict.get('p'),
				k: dict.get('k')
				} //nutrientes
			} // telemetria
		}

	let edad = { "datosDeRegistro.edadDeIngreso": '69420' };

	console.log('El tipo de id es: ', typeof(dict.get('id')))
	console.log('y id es: ', dict.get('id'));
	//let filtro = {datosDeRegistro: {id: dict.get('id')}};
	let filtro = {"datosDeRegistro.id": dict.get('id')}; //dict.get('id')};
	//let datos = { $push: edad };
	let datos = { $push: datosTelemetriaObj };

	return [filtro, datos]
}

/*
const datosTelemetriaSchema = new Schema({
	fechayHora: {type: String, required: false},
	temperatura: {type: String, required: false},
	humedad: {type: String, required: false},
	ph: {type: String, required: false},
	nutrientes: {
		n: {type: String, required: false},
		p: {type: String, required: false},
		k: {type: String, required: false}
	}
});


dict.set('id', datosArr[0])
	dict.set('fechayHora', concatenandoFecha(datosArr))
	dict.set('temperatura', datosArr[10])
	dict.set('humedad', datosArr[11])
	dict.set('n', datosArr[12])
	dict.set('p', datosArr[13])
	dict.set('k', datosArr[14])
	dict.set('ph', datosArr[15])

*/

module.exports.enviarDatosArbolBD = enviarDatosArbolBD;
module.exports.actualizarDatosTelemetricos = actualizarDatosTelemetricos;
