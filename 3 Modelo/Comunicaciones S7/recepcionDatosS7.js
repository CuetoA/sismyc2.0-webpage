
function maquinaDeEstados(tiempo, port){
	//console.log('entrando');
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

		let datosArr = procesandoDatos(datos);
		//console.log('Transformado a: ', datosArr);
		let bandera = distintoDeCero(datosArr);
		let bandera2 = diferenciaDeEstados(datosArr);
		if (bandera && bandera2){
			//console.log('Entrando a limpieza de datos')
			limpiarDatos(datos, datosArr, port);
			//guardarDatos();	
			deteccionDeModo(datosArr)
		}else if (bandera && (!bandera2)){
			console.log()
			console.log('Deteniendo procesamiento de datos por falta de diferencia de estados')
			console.log()
		}
		
	}else{
		console.log('Recibiendo datos no programados');
	}
	console.log('Mensaje recibido: ', datos);
}

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
}

function guardarDatosBD(datosArr){
	console.log('Guardando datos por ser distintos de cero')
	let dict = seleccionDeDatos(datosArr);
}


function seleccionDeDatos(datosArr){

	// Recordar que esta parte se programó bajo suposiciones de que el arreglo llega correctamente
	let dict = new Map();
	dict.set('id', datosArr[0])
	dict.set('fechaDia', datosArr[5])
	dict.set('fechaMes', datosArr[6])
	dict.set('fechaAno', datosArr[7])
	dict.set('fechaHora', datosArr[8])
	dict.set('fechaMinuto', datosArr[9])
	dict.set('temperatura', datosArr[10])
	dict.set('humedad', datosArr[11])
	dict.set('n', datosArr[12])
	dict.set('p', datosArr[13])
	dict.set('k', datosArr[14])
	dict.set('ph', datosArr[15])

	//console.log('El diccionario para la BD es:', dict)
	return dict
}

function confirmacionDeAcciones(){
	console.log('En recepcionDatosS7 deberemos confirmar alguna acción aquí enviándola a través del socket');
}


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
}


function distintoDeCero(lista){
	let bandera = false
	for (let elemento in lista){
		if (lista[elemento] != 0){
			bandera = true
			break
		}
	}
	//console.log('Datos son distintos de cero?', bandera)
	return bandera
}

/*
function guardarDatosBD(){
	//console.log('')
	console.log('Guardando datos por ser distintos de cero')
}*/


function procesandoDatos(datos){
	let comando = 'RSP00011,';
	let pinit = datos.search(comando) + comando.length
	datos = datos.slice(pinit, -1);
	let datosArr = datos.split(',');

	//console.log('El esplit se hizo: ', datosArr)
	return datosArr
}

function limpiarDatos(datos, datosArr, port){
	// Deberemos enviar un mensaje, perio primero, arreglar socket
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
}

module.exports.maquinaDeEstados = maquinaDeEstados;
module.exports.recibiendoDatos = recibiendoDatos;