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
		console.log('\n El arbolito se ha creado exitosamente \n')
	}
	else{
		console.log('\n El arbolito NO se ha creado \n')
	}
	return flag
}


function actualizarDatosTelemetricos(dict){
	//console.log('analizando entrada en envioDatosBD actualizarDatosTelemetricos():', dict)
	let [filtro, datos] = generandoObjetosJsoon(dict);
	actualizandoDatos(filtro , datos);

}

function actualizandoDatos(filtro , datos){

	ObjetoArbol.updateOne(filtro, datos)
		.then( () => { console.log('El objeto se ha actualizado correctemente')})
		.catch(() => { console.log('El objeto NO se ha actualizado correctemente')});
}

function generandoObjetosJsoon(dict){
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
			} // datosDeTelemetria
		} // datosTelemetriaObj

	//console.log('el diccionario es: ', dict);
	let filtro = {"informacionDelArbol.anilloRelacionado": dict.get('anilloRelacionado')}; //dict.get('id')};
	let datos = { $push: datosTelemetriaObj};

	return [filtro, datos]
}


module.exports.enviarDatosArbolBD = enviarDatosArbolBD;
module.exports.actualizarDatosTelemetricos = actualizarDatosTelemetricos;
