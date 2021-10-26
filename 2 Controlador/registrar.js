// Botones
const botonConfirmar = document.getElementById("botonConfirmar");
const botonCancelar = document.getElementById("botonCancelar");
const botonEliminar = document.getElementById("botonEliminar");
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


//const idArbol = document.getElementById("idArbol");





function enviarDatos(){
	valor = idArbol.value;
	console.log('idArbol: ', valor);
};


botonConfirmar.addEventListener('click', enviarDatos(), console.log('ewfq'));
botonEliminar.addEventListener('click', console.log('Elimando'));
console.log( 'Valor drop: ' ,dropdownArbol.value)

