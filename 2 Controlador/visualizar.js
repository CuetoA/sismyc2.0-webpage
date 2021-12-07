// Socket
const socket = io();
var offset = 0;
var DatosArbol = Object
// Constantes de botones
var dropdownArbol = document.getElementById("dropdownArbol");
var dropdownMenu = document.getElementById("dropdown-menu");
var tablaDatos = document.getElementById("tablaDatos");
// Primer columna
var idArbol = document.getElementById("idArbol");
var fechaDeRegistro = document.getElementById("fechaDeRegistro");
var edadDeIngreso = document.getElementById("edadDeIngreso");
var registrante = document.getElementById("registrante");
var alturaDeRegistro = document.getElementById("alturaDeRegistro");
var diametroDeRegistro = document.getElementById("diametroDeRegistro");
// Segunda columna
var anilloRelacionado = document.getElementById("anilloRelacionado");
var familia = document.getElementById("familia");
var genero = document.getElementById("genero");
var especie = document.getElementById("especie");
var ubicacion = document.getElementById("ubicacion");
// Segunda fila
// Primer columna
var rangoTemperaturaInferior = document.getElementById("rangoTemperaturaInferior");
var rangoTemperaturaSuperior = document.getElementById("rangoTemperaturaSuperior");
var rangoHumedadInferior = document.getElementById("rangoHumedadInferior");
var rangoHumedadSuperior = document.getElementById("rangoHumedadSuperior");
var ciclosMedicionNumero = document.getElementById("ciclosMedicionNumero");
// Segunda columna
var fertilizantePorRiego = document.getElementById("fertilizantePorRiego");
var aguaPorRiego = document.getElementById("aguaPorRiego");
var ciclosDeRiego = document.getElementById("ciclosDeRiego");
// botones
var mas10 = document.getElementById('10mas')
var menos10 = document.getElementById('10menos')



mostrarListadoArboles()
// Eventos de botones
dropdownArbol.onclick = () => {};

function mostrarListadoArboles(){
	solicitarListaArboles();	
}


async function solicitarListaArboles(){
	let mensaje = 'listaDeArboles';
	socket.emit('listaArboles', mensaje)
}


socket.on('listaDropdown', (lista) =>{
	console.log('El evento lista funciona y envia: ', lista)
	desplegarElementos(lista)
});

function desplegarElementos(lista){
	/*
	console.log('elemento 1: ', lista[0])
	console.log('elemento 1: ', lista[0].datosDeRegistro.id)
	console.log('elemento 2: ', lista[0]._id)
	console.log('elemento 3: ', lista[2])
	*/
	//console.log(Object.keys(dropdownMenu))
	
	for (let elemento in lista){
		
		var opt = lista[elemento];
		var el = document.createElement("button")
		el.className = 'dropdown-item'
		el.textContent = lista[elemento].datosDeRegistro.id + "\n\n";
		el.value = lista[elemento]._id;

		el.setAttribute('onclick', `enviarDatos('${lista[elemento]._id}')`)
		dropdownMenu.appendChild(el)

		//console.log('elementos: ', lista)
	}
}

function enviarDatos(elemento){
	//console.log('Hola bb chompi hermoso')
	//console.log(llegada)
	socket.emit(('solicitudDatos'), elemento)
}

socket.on('datosSolicitados', (datos) =>{
	//console.log('tomamesta' , datos);
	DatosArbol = datos;
	colocarDatos(datos);
});


function colocarDatos(datos){
	//console.log(datos[0])
	//console.log(datos[0].datosDeRegistro.edadDeIngreso)
	// Primer columna
	idArbol.setAttribute('value',datos[0].datosDeRegistro.id);
	fechaDeRegistro.setAttribute('value',datos[0].datosDeRegistro.fechaDeRegistro);
	edadDeIngreso.setAttribute('value',datos[0].datosDeRegistro.edadDeIngreso);
	registrante.setAttribute('value',datos[0].datosDeRegistro.registrante);
	alturaDeRegistro.setAttribute('value',datos[0].datosDeRegistro.tamañoDeIngresoAlSistema.alturaDeRegistro);
	diametroDeRegistro.setAttribute('value',datos[0].datosDeRegistro.tamañoDeIngresoAlSistema.diametroDeRegistro);
	// Segunda columna.setAttribute('value',datos[0]);
	anilloRelacionado.setAttribute('value',datos[0].informacionDelArbol.anilloRelacionado);
	familia.setAttribute('value',datos[0].informacionDelArbol.taxonomia.familia);
	genero.setAttribute('value',datos[0].informacionDelArbol.taxonomia.genero);
	especie.setAttribute('value',datos[0].informacionDelArbol.taxonomia.especie);
	ubicacion.setAttribute('value',datos[0].informacionDelArbol.ubicacion);
	// Segunda fila.setAttribute('value',datos[0]);
	// Primer columna.setAttribute('value',datos[0]);
	rangoTemperaturaInferior.setAttribute('value',datos[0].datosDeRiego.rangoHumedadInferior);
	rangoTemperaturaSuperior.setAttribute('value',datos[0].datosDeRiego.rangoTemperaturaSuperior);
	rangoHumedadInferior.setAttribute('value',datos[0].datosDeRiego.rangoHumedadInferior);
	rangoHumedadSuperior.setAttribute('value',datos[0].datosDeRiego.rangoHumedadSuperior);
	ciclosMedicionNumero.setAttribute('value',datos[0].datosDeRiego.ciclosMedicionNumero);
	// Segunda columna
	fertilizantePorRiego.setAttribute('value',datos[0].datosDeRiego.fertilizantePorRiego);
	aguaPorRiego.setAttribute('value',datos[0].datosDeRiego.aguaPorRiego);
	ciclosDeRiego.setAttribute('value',datos[0].datosDeRiego.ciclosDeRiego);

	imprimirDatosTelemetria(datos[0])	

}

function imprimirDatosTelemetria(datos){
	console.log('así es datos: ', datos.datosDeTelemetria)
	tablaDatos.innerHTML = ''
	//tablaDatos.removeChild()
	for (let i = 0; i < 10; i ++){
		//console.log(i)
		//datos.datosDeTelemetria[i]
		let datosIndefinidos = (datos.datosDeTelemetria[offset + i] == undefined);
		if(i == 0 && datosIndefinidos){ 
			retroceder10(); 
			break};
		if(datosIndefinidos){break};
		//let renglon = crearRenglon()
		crearRenglon(i, datos.datosDeTelemetria[i])
		console.log('dato numero n: ', datos.datosDeTelemetria[i])
		//console.log('tipo dato numero n: ',typeof(datos.datosDeTelemetria[i]))
		//imprimirDatosEnPosicion(i,offset, datos.datosDeTelemetria[i]);
		//console.log('dato numero n: ', datos.datosDeTelemetria[elemento])
		
	}
}

 function crearRenglon(i, datos){
 	let renglon = document.createElement('div');
 	renglon.className = 'row mrg-auto';
 	//renglon.textContent = 'test';
 	tablaDatos.appendChild(renglon)
 	imprimirColumnas(i, datos, renglon);
 	return renglon
 }

function imprimirColumnas(i, datos, renglon){
	//let renglon = crearRenglon()
	let indiceDatos = i + offset;

	//console.log('test ', datos._id)
	let columna1 = document.createElement('div')
	let columna2 = document.createElement('div')
	let columna3 = document.createElement('div')
	let columna4 = document.createElement('div')
	let columna5 = document.createElement('div')

	columna1.className = 'col-md-3 table-element text';
	columna2.className = 'col-md-3 table-element text';
	columna3.className = 'col-md-3 table-element text';
	columna4.className = 'col-md-3 table-element text';
	columna5.className = 'col-md-3 table-element text';

	columna1.textContent = datos.fechayHora
	columna2.textContent = datos.temperatura
	columna3.textContent = datos.humedad
	columna4.textContent = concatenandoNutrientes(datos.nutrientes)
	columna5.textContent = datos.ph

	renglon.appendChild(columna1)
	renglon.appendChild(columna2)
	renglon.appendChild(columna3)
	renglon.appendChild(columna4)
	renglon.appendChild(columna5)

	
	/*
	for (let elemento in datos){
		if(elemento == '_id'){continue}
		console.log('cou: ', elemento)		
		console.log('max: ', datos[elemento])		
		let columna = document.createElement('div')
		//let titulo = document.createElement('h1')
		//titulo.className = 'text'
		//titulo.textContent = 'test'
		columna.className = 'col-md-3 table-element text';
		columna.textContent = datos[elemento]
		renglon.appendChild(columna)	
	}
	*/
}

function concatenandoNutrientes(nutrientes){
	let sep = '-'
	let cadena = nutrientes.n + sep + nutrientes.p + sep + nutrientes.k
	return cadena
}


// Evento botón
mas10.onclick = () => {
	avanzar10()
}

function avanzar10(){
	offset += 10
	imprimirDatosTelemetria(DatosArbol[0])	
}


// Evento botón
menos10.onclick = () => {
	retroceder10()
}

function retroceder10(){
	if (offset >0){ offset -= 10 }
	//if (offset == 0){break}
	imprimirDatosTelemetria(DatosArbol[0])
}

//Lo que queremos hacer es que no avance más allá de lo que debería