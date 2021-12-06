const envioDatosBD = require('./Comunicaciones BD/envioDatosBD');


function iniciarProcesamientoDeDatos(datos, port){

	let datosArr = procesandoDatos(datos);
	let bandera = distintoDeCero(datosArr);
	let bandera2 = diferenciaDeEstados(datosArr);
	if (bandera && bandera2){
		//console.log('Entrando a limpieza de datos')
		limpiarDatos(datos, datosArr, port);
		deteccionDeModo(datosArr)
	}else if (bandera && (!bandera2)){
		console.log('\n Deteniendo procesamiento de datos por falta de diferencia de estados \n ')
	}
}


function procesandoDatos(datos){
	let comando = 'RSP00011,';
	let pinit = datos.search(comando) + comando.length;
	datos = datos.slice(pinit, -1);
	let datosArr = datos.split(',');

	return datosArr
}


function distintoDeCero(lista){
	let bandera = false
	for (let elemento in lista){
		if (lista[elemento] != 0){
			bandera = true
			break
		}
	}
	return bandera
};


function diferenciaDeEstados(datosArr){
	let bandera
	if(datosArr[1] == datosArr[2]){
		//console.log('Los estados son iguales')
		bandera = false
	}else{
		//console.log('Los estados son distintos')
		bandera = true
	}

	return bandera
};


function limpiarDatos(datos, datosArr, port){
	let registroInicio = datos[7];
	let registrosNumero = datosArr.length - 1;
	let numeroNodo = 12;

	//Creando mensaje
	let comando = 'CMD0002 '
	let mensaje = comando + registroInicio + ',' + registrosNumero + ',' + numeroNodo +',0,0'

	for (let i = 1; i < datosArr.length; i++){
		mensaje += ',0';
	}
	mensaje += '\r';
	port.write(mensaje);
};


function deteccionDeModo(datosArr){
	if (datosArr[3] == 0){
		// Semiatomático
		//console.log('Modo semiautomático')
		confirmacionDeAcciones()
	}else if (datosArr[3] == 1){
		// Automático
		//console.log('Modo automático')
		guardarDatosBD(datosArr);
	}
};


function confirmacionDeAcciones(){
	console.log('En recepcionDatosS7 deberemos confirmar alguna acción aquí enviándola a través del socket');
};


function guardarDatosBD(datosArr){
	console.log('Guardando datos por ser distintos de cero')
	let dict = seleccionDeDatos(datosArr);
	envioDatosBD.actualizarDatosTelemetricos(dict);
};

function seleccionDeDatos(datosArr){

	// Recordar que esta parte se programó bajo suposiciones de que el arreglo llega correctamente
	let dict = new Map();
	dict.set('anilloRelacionado', datosArr[0])
	dict.set('fechayHora', concatenandoFecha(datosArr))
	dict.set('temperatura', datosArr[10])
	dict.set('humedad', datosArr[11])
	dict.set('n', datosArr[12])
	dict.set('p', datosArr[13])
	dict.set('k', datosArr[14])
	dict.set('ph', datosArr[15])

	//console.log('El diccionario para la BD es:', dict)
	return dict
};


function concatenandoFecha(datosArr){
	return  datosArr[5] + '/' + datosArr[6] + '/' + datosArr[7] + ' ' + datosArr[8] + ':' + datosArr[9];
};



module.exports.iniciarProcesamientoDeDatos = iniciarProcesamientoDeDatos;