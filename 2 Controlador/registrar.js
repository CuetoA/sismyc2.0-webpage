// Botones
var botonConfirmarArbol = document.getElementById("botonConfirmarArbol");
var botonCancelarArbol = document.getElementById("botonCancelarArbol");
var botonEliminarArbol = document.getElementById("botonEliminarArbol");
var botonConfirmarAnillo = document.getElementById("botonConfirmarAnillo");
var botonCancelarAnillo = document.getElementById("botonCancelarAnillo");
var botonEliminarAnillo = document.getElementById("botonEliminarAnillo");
// Recuadros de información
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
const dropdownArbol = document.getElementById("dropdownArbol");
const fertilizantePorRiego = document.getElementById("fertilizantePorRiego");
const aguaPorRiego = document.getElementById("aguaPorRiego");
const ciclosDeRiego = document.getElementById("ciclosDeRiego");
const dropdownArbol2 = document.getElementById("dropdownArbol2");
const idAnillo = document.getElementById("idAnillo");
const fechaDeRegistro = document.getElementById("fechaDeRegistro");
const registranteAnillo = document.getElementById("registranteAnillo");
const numeroConexion = document.getElementById("numeroConexion");
//const idArbol = document.getElementById("idArbol");




function enviarDatosArbol(){
	valor = idArbol.value;
	console.log('funcionando');
	
};



botonConfirmarArbol.onclick = () => {enviarDatosArbol()};

