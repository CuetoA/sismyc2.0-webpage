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

//Importando objetos
import {arbol, anillo} from '../3 Modelo/Objetos.js';
import {enviarDatosArbolSSF} from '../3 Modelo/Comunicaciones S7/envioDatosS7.js'

//botonConfirmarArbol.onclick = () => {recolectarDatosArbol()};
botonConfirmarArbol.onclick = () => {enviarDatosArbol()};


// Enviando los datos del árbol al SSF
function enviarDatosArbol(){
	let diccionario = recolectarDatosArbol();
	enviarDatosArbolSSF(diccionario);
};

// Recolectando los datos a partir de sus id's
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


function crearObjeto(){


};



