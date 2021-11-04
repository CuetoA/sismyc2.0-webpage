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

function recolectarDatosArbol(){
	let dicTemp = new Map();
	dicTemp.set('id', idArbol.value);
	dicTemp.set('fecha de registro', fechaRegistroArbol.value);
	dicTemp.set('edad de ingreso', edadIngresoArbol.value);
	dicTemp.set('registrante', registranteArbol.value);
	dicTemp.set('altura de registro', alturaRegistroArbol.value);
	dicTemp.set('diametro de registro', diametroRegistroArbol.value);
	dicTemp.set('anillo relacionado', anilloRelacionado.value);
	dicTemp.set('familia', familiaArbol.value);
	dicTemp.set('genero', generoArbol.value);
	dicTemp.set('especie', especieArbol.value);
	dicTemp.set('ubicacion', ubicacionArbol.value);
	dicTemp.set('rango temperatura inferior', rangoTemperaturaInferior.value);
	dicTemp.set('rango temperatura superior', rangoTemperaturaSuperior.value);
	dicTemp.set('rango humedad inferior', rangoHumedadInferior.value);
	dicTemp.set('rango humedad superior', rangoHumedadSuperior.value);
	dicTemp.set('ciclos medicion numero', ciclosMedicionNumero.value);
	dicTemp.set('ciclos medicion unidad', ciclosMedicionUnidad.value);
	dicTemp.set('fertilizante por riego', fertilizantePorRiego.value);
	dicTemp.set('agia por riego', aguaPorRiego.value);
	dicTemp.set('ciclos de riego', ciclosDeRiego.value);
	dicTemp.set('ciclos de riego unidad', ciclosDeRiegoUnidad.value);	

	console.log(dicTemp);
};

function enviarDatosArbol(){
	valor = idArbol.value;
	console.log('funcionando');
};
	

function crearObjeto(){


};

botonConfirmarArbol.onclick = () => {recolectarDatosArbol()};

