// Socket
const socket = io();
// Botones
var botonConfirmarArbol = document.getElementById("botonConfirmarArbol");
var botonCancelarArbol = document.getElementById("botonCancelarArbol");
var botonEliminarArbol = document.getElementById("botonEliminarArbol");
var botonConfirmarAnillo = document.getElementById("botonConfirmarAnillo");
var botonCancelarAnillo = document.getElementById("botonCancelarAnillo");
var botonEliminarAnillo = document.getElementById("botonEliminarAnillo");
// Recuadros de información árbol
const idArbol = document.getElementById("idArbol");
const fechaRegistroArbol = document.getElementById("fechaRegistroArbol");
const edadIngresoArbol = document.getElementById("edadIngresoArbol");
const registranteArbol = document.getElementById("registranteArbol");
const alturaRegistroArbol = document.getElementById("alturaRegistroArbol");
const diametroRegistroArbol = document.getElementById("diametroRegistroArbol");
const anilloRelacionado = document.getElementById("anilloRelacionado");
const familiaArbol = document.getElementById("familiaArbol");
const generoArbol = document.getElementById("generoArbol");
const especieArbol = document.getElementById("especieArbol");
const ubicacionArbol = document.getElementById("ubicacionArbol");
const rangoTemperaturaInferior = document.getElementById("rangoTemperaturaInferior");
const rangoTemperaturaSuperior = document.getElementById("rangoTemperaturaSuperior");
const rangoHumedadInferior = document.getElementById("rangoHumedadInferior");
const rangoHumedadSuperior = document.getElementById("rangoHumedadSuperior");
const ciclosMedicionNumero = document.getElementById("ciclosMedicionNumero");
const ciclosMedicionUnidad = document.getElementById("dropdownArbol");
const fertilizantePorRiego = document.getElementById("fertilizantePorRiego");
const aguaPorRiego = document.getElementById("aguaPorRiego");
const ciclosDeRiego = document.getElementById("ciclosDeRiego");
const ciclosDeRiegoUnidad = document.getElementById("dropdownArbol2");
// Recuadros de información anillo
const idAnillo = document.getElementById("idAnillo");
const fechaDeRegistro = document.getElementById("fechaDeRegistro");
const registranteAnillo = document.getElementById("registranteAnillo");
const numeroConexion = document.getElementById("numeroConexion");

//Objetos
import {arbol, anillo} from '../3 Modelo/Objetos.js';



function ordenarDatosArbolSSF(diccionario, contenidoMensaje){

	contenidoMensaje.push( parseInt( diccionario.get('anilloRelacionado') ) ); 			 //R17
	contenidoMensaje.push(1);												  			 //R18
	contenidoMensaje.push(0);												  			 //R19
	contenidoMensaje.push(1);												  			 //R20
	contenidoMensaje.push(parseInt( diccionario.get('id') ) );				  			 //R21
	contenidoMensaje.push(0);												  			 //R22
	contenidoMensaje.push(0);												   			 //R23
	contenidoMensaje.push(0);												  			 //R24
	contenidoMensaje.push(parseInt( diccionario.get('ciclosDeRiego') ) );	 		     //R25
	contenidoMensaje.push(0);												   	    	 //R26 ESTÁ EN DÍAS POR DEFAULT
	contenidoMensaje.push(parseInt( diccionario.get('ciclosMedicionNumero') ) );	     //R27
	contenidoMensaje.push(0);												   	    	 //R28 ESTÁ EN DÍAS POR DEFAULT
	contenidoMensaje.push(parseInt( diccionario.get('aguaPorRiego') ) );			     //R29
	contenidoMensaje.push(parseInt( diccionario.get('fertilizantePorRiego') ) );	     //R30
	contenidoMensaje.push(parseInt( diccionario.get('rangoTemperaturaInferior') ) );     //R31
	contenidoMensaje.push(parseInt( diccionario.get('rangoTemperaturaSuperior') ) );     //R32
	contenidoMensaje.push(parseInt( diccionario.get('rangoHumedadInferior') ) );         //R33
	contenidoMensaje.push(parseInt( diccionario.get('rangoHumedadSuperior') ) );         //R34

	return contenidoMensaje
}




function enviarDatosSSF(inOrOut, registroInicio, noRegistros, nodoDirigido, contenidoMensaje){


	let comando = ''

	// Header del mensaje
	if (inOrOut == 'envio'){ comando = 'CMD0004'}
	else if (inOrOut == 'recepcion'){ comando = 'CMD0003'}
	else{ console.log('Error en registrar.js función enviarDatosSSF() línea 73')};

	// Concatenando mensaje
	let s = ','
	let mensajeSerial = comando + ' ' + registroInicio + s + noRegistros + s + nodoDirigido + s;
	mensajeSerial += contenidoMensaje;

	socket.emit('enviarSerial', valor );
}


function enviarDatosArbolSSF(diccionario){

	// Generando lista de datos
	let contenidoMensaje = [];
	contenidoMensaje = ordenarDatosArbolSSF(diccionario, contenidoMensaje);

	// Concatenando lista de datos en una string
	let contenidoMensajeStr = ''
	for (let elemento in contenidoMensaje){
		contenidoMensajeStr += contenidoMensaje[elemento] + ','
	};

	// Preparando mensaje
	let registroInicio = 17;
	let noRegistros = contenidoMensaje.length;
	let nodoDirigido = parseInt( diccionario.get('anilloRelacionado') );
	enviarDatosSSF('envio', registroInicio, noRegistros, nodoDirigido, contenidoMensaje);
};


function recolectarDatosArbol(){
	let dicTemp = new Map();
	dicTemp.set('id', idArbol.value);
	dicTemp.set('fechaDeRegistro', fechaRegistroArbol.value);
	dicTemp.set('edadDeIngreso', edadIngresoArbol.value);
	dicTemp.set('registrante', registranteArbol.value);
	dicTemp.set('alturaDeRegistro', alturaRegistroArbol.value);
	dicTemp.set('diametroDeRegistro', diametroRegistroArbol.value);
	dicTemp.set('anilloRelacionado', anilloRelacionado.value);
	dicTemp.set('familia', familiaArbol.value);
	dicTemp.set('genero', generoArbol.value);
	dicTemp.set('especie', especieArbol.value);
	dicTemp.set('ubicacion', ubicacionArbol.value);
	dicTemp.set('rangoTemperaturaInferior', rangoTemperaturaInferior.value);
	dicTemp.set('rangoTemperaturaSuperior', rangoTemperaturaSuperior.value);
	dicTemp.set('rangoHumedadInferior', rangoHumedadInferior.value);
	dicTemp.set('rangoHumedadSuperior', rangoHumedadSuperior.value);
	dicTemp.set('ciclosMedicionNumero', ciclosMedicionNumero.value);
	dicTemp.set('ciclosMedicionUnidad', ciclosMedicionUnidad.value);
	dicTemp.set('fertilizantePorRiego', fertilizantePorRiego.value);
	dicTemp.set('aguaPorRiego', aguaPorRiego.value);
	dicTemp.set('ciclosDeRiego', ciclosDeRiego.value);
	dicTemp.set('ciclosDeRiegoUnidad', ciclosDeRiegoUnidad.value);	

	return dicTemp
};


function enviarDatosArbol(){
	let diccionario = recolectarDatosArbol();
	enviarDatosArbolSSF(diccionario);
};


function crearObjeto(){


};

//botonConfirmarArbol.onclick = () => {recolectarDatosArbol()};
botonConfirmarArbol.onclick = () => {enviarDatosArbol()};

