// Socket
const socket = io();
var offset = 0;
var DatosArbol = Object
// Constantes de botones
var dropdownArbol = document.getElementById("dropdownArbol");
var dropdownMenu = document.getElementById("dropdown-menu");
var tablaDatos = document.getElementById("tablaDatos");
var botonCancelarArbol = document.getElementById("botonCancelarArbol");
// Primer columna
var idArbol = document.getElementById("idArbol");
var fechaRegistroArbol = document.getElementById("fechaDeRegistro");
var edadIngresoArbol = document.getElementById("edadDeIngreso");
var registranteArbol = document.getElementById("registrante");
var alturaRegistroArbol = document.getElementById("alturaDeRegistro");
var diametroRegistroArbol = document.getElementById("diametroDeRegistro");
// Segunda columna
var anilloRelacionado = document.getElementById("anilloRelacionado");
var familiaArbol = document.getElementById("familia");
var generoArbol = document.getElementById("genero");
var especieArbol = document.getElementById("especie");
var ubicacionArbol = document.getElementById("ubicacion");
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

//import {limpiarDatos} from './operacionesCompartidas.js';

mostrarListadoArboles()
// Eventos de botones
dropdownArbol.onclick = () => {};
botonCancelarArbol.onclick = () => {
	limpiarDatos()
	colocarDatos(DatosArbol)
};


function limpiarDatos(){
	// Recuadros de información árbol
	idArbol.value = ''
	fechaRegistroArbol.value = ''
	edadIngresoArbol.value = ''
	registranteArbol.value = ''
	alturaRegistroArbol.value = ''
	diametroRegistroArbol.value = ''
	anilloRelacionado.value = ''
	familiaArbol.value = ''
	generoArbol.value = ''
	especieArbol.value = ''
	ubicacionArbol.value = ''
	rangoTemperaturaInferior.value = ''
	rangoTemperaturaSuperior.value = ''
	rangoHumedadInferior.value = ''
	rangoHumedadSuperior.value = ''
	ciclosMedicionNumero.value = ''
	fertilizantePorRiego.value = ''
	aguaPorRiego.value = ''
	ciclosDeRiego.value = ''
	// Recuadros de información anillo
	idAnillo.value = ''
	fechaRegistroArbol.value = ''
	registranteArbolAnillo.value = ''
	numeroConexion.value = ''
}
	
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
	//console.log('tomamesta');
	DatosArbol = datos;
	colocarDatos(datos);
});


function colocarDatos(datos){
	console.log('Prueba', datos)
	//console.log('jota')
	//console.log(datos[0])
	//console.log(datos[0].datosDeRegistro.edadIngresoArbol)
	// Primer columna
	idArbol.setAttribute('value',datos[0].datosDeRegistro.id);
	fechaRegistroArbol.setAttribute('value',datos[0].datosDeRegistro.fechaDeRegistro);
	edadIngresoArbol.setAttribute('value',datos[0].datosDeRegistro.edadDeIngreso);
	registranteArbol.setAttribute('value',datos[0].datosDeRegistro.registrante);
	alturaRegistroArbol.setAttribute('value',datos[0].datosDeRegistro.tamañoDeIngresoAlSistema.alturaDeRegistro);
	diametroRegistroArbol.setAttribute('value',datos[0].datosDeRegistro.tamañoDeIngresoAlSistema.diametroDeRegistro);
	// Segunda columna.setAttribute('value',datos[0]);
	anilloRelacionado.setAttribute('value',datos[0].informacionDelArbol.anilloRelacionado);
	familiaArbol.setAttribute('value',datos[0].informacionDelArbol.taxonomia.familia);
	generoArbol.setAttribute('value',datos[0].informacionDelArbol.taxonomia.genero);
	especieArbol.setAttribute('value',datos[0].informacionDelArbol.taxonomia.especie);
	ubicacionArbol.setAttribute('value',datos[0].informacionDelArbol.ubicacion);
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

	//console.log('n:', datos[0].datosDeTelemetria.length)
	if (datos[0].datosDeTelemetria.length != 0){imprimirDatosTelemetria(datos[0])};

}

function imprimirDatosTelemetria(datos){
	console.log('así es datos: ', datos.datosDeTelemetria)
	tablaDatos.innerHTML = ''
	
	for (let i = 0; i < 10; i ++){
		let datosIndefinidos = (datos.datosDeTelemetria[offset + i] == undefined);
		if(i == 0 && datosIndefinidos){ 
			retroceder10(); 
			break};
		if(datosIndefinidos){break};
		crearRenglon(i, datos.datosDeTelemetria[i])
		//console.log('dato numero n: ', datos.datosDeTelemetria[i])
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