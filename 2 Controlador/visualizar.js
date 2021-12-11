// Socket
const socket = io();
var offset = 0;
var DatosArbol = Object
// Constantes de botones
var dropdownArbol = document.getElementById("dropdownArbol");
var dropdownMenu = document.getElementById("dropdown-menu");
var tablaDatos = document.getElementById("tablaDatos");
var botonCancelarArbol = document.getElementById("botonCancelarArbol");
var botonAceptarArbol = document.getElementById("botonAceptarArbol");
// Primer columna
var idArbol = document.getElementById("idArbol");
var fechaRegistroArbol = document.getElementById("fechaRegistroArbol");
var edadIngresoArbol = document.getElementById("edadIngresoArbol");
var registranteArbol = document.getElementById("registranteArbol");
var alturaRegistroArbol = document.getElementById("alturaRegistroArbol");
var diametroRegistroArbol = document.getElementById("diametroRegistroArbol");
// Segunda columna
var anilloRelacionado = document.getElementById("anilloRelacionado");
var familiaArbol = document.getElementById("familiaArbol");
var generoArbol = document.getElementById("generoArbol");
var especieArbol = document.getElementById("especieArbol");
var ubicacionArbol = document.getElementById("ubicacionArbol");
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
//dropdownArbol.onclick = () => {};

botonCancelarArbol.onclick = () => {colocarDatos(DatosArbol)};
botonAceptarArbol.onclick = () => {modificarDatos()}
//var test = require('operacionesCompartidas')

//test.manitaDesconchabadita()

function modificarDatos(){
	let dict = recolectarDatosArbol()
	let arreglo = Array.from(dict);
	console.log('soyu un click', arreglo)
	//modificarObjeto(arreglo)
}

function modificarObjeto(arreglo){
	socket.emit('modificarBD', arreglo);
}

function recolectarDatosArbol(){
	let dicTemp = new Map();
	dicTemp.set('id', idArbol.value);
	dicTemp.set('fechaDeRegistro', fechaRegistroArbol.value);
	dicTemp.set('edadDeIngreso', edadIngresoArbol.value);
	dicTemp.set('registrante', registranteArbol.value);
	dicTemp.set('alturaDeRegistro', alturaRegistroArbol.value);
	dicTemp.set('diametroDeRegistro', diametroRegistroArbol.value);

	dicTemp.set('anilloRelacionado', anilloRelacionado.value);
	dicTemp.set('ubicacion', ubicacionArbol.value);
	dicTemp.set('familia', familiaArbol.value);
	dicTemp.set('genero', generoArbol.value);
	dicTemp.set('especie', especieArbol.value);
	
	dicTemp.set('rangoTemperaturaInferior', rangoTemperaturaInferior.value);
	dicTemp.set('rangoTemperaturaSuperior', rangoTemperaturaSuperior.value);
	dicTemp.set('rangoHumedadInferior', rangoHumedadInferior.value);
	dicTemp.set('rangoHumedadSuperior', rangoHumedadSuperior.value);
	dicTemp.set('ciclosMedicionNumero', ciclosMedicionNumero.value);
	dicTemp.set('ciclosMedicionUnidad', '0');
	dicTemp.set('fertilizantePorRiego', fertilizantePorRiego.value);
	dicTemp.set('aguaPorRiego', aguaPorRiego.value);
	dicTemp.set('ciclosDeRiego', ciclosDeRiego.value);
	dicTemp.set('ciclosDeRiegoUnidad', '0');	

	return dicTemp
};





	
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
	
	for (let elemento in lista){
		var opt = lista[elemento];
		var el = document.createElement("button")
		el.className = 'dropdown-item'
		el.textContent = lista[elemento].datosDeRegistro.id + "\n\n";
		el.value = lista[elemento]._id;

		el.setAttribute('onclick', `enviarDatos('${lista[elemento]._id}')`)
		dropdownMenu.appendChild(el)
	}
}

function enviarDatos(elemento){
	socket.emit(('solicitudDatos'), elemento)
}

socket.on('datosSolicitados', (datos) =>{
	DatosArbol = datos;
	colocarDatos(datos);
});


function colocarDatos(datos){
	
	idArbol.value = datos[0].datosDeRegistro.id;
	fechaRegistroArbol.value = datos[0].datosDeRegistro.fechaDeRegistro;
	edadIngresoArbol.value = datos[0].datosDeRegistro.edadDeIngreso;
	registranteArbol.value = datos[0].datosDeRegistro.registrante;
	alturaRegistroArbol.value = datos[0].datosDeRegistro.tamañoDeIngresoAlSistema.alturaDeRegistro;
	diametroRegistroArbol.value = datos[0].datosDeRegistro.tamañoDeIngresoAlSistema.diametroDeRegistro;
	// Segunda columna.value = datos[0];
	anilloRelacionado.value = datos[0].informacionDelArbol.anilloRelacionado;
	familiaArbol.value = datos[0].informacionDelArbol.taxonomia.familia;
	generoArbol.value = datos[0].informacionDelArbol.taxonomia.genero;
	especieArbol.value = datos[0].informacionDelArbol.taxonomia.especie;
	ubicacionArbol.value = datos[0].informacionDelArbol.ubicacion;
	// Segunda fila.value = datos[0];
	// Primer columna.value = datos[0];
	rangoTemperaturaInferior.value = datos[0].datosDeRiego.rangoHumedadInferior;
	rangoTemperaturaSuperior.value = datos[0].datosDeRiego.rangoTemperaturaSuperior;
	rangoHumedadInferior.value = datos[0].datosDeRiego.rangoHumedadInferior;
	rangoHumedadSuperior.value = datos[0].datosDeRiego.rangoHumedadSuperior;
	ciclosMedicionNumero.value = datos[0].datosDeRiego.ciclosMedicionNumero;
	// Segunda columna
	fertilizantePorRiego.value = datos[0].datosDeRiego.fertilizantePorRiego;
	aguaPorRiego.value = datos[0].datosDeRiego.aguaPorRiego;
	ciclosDeRiego.value = datos[0].datosDeRiego.ciclosDeRiego;

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