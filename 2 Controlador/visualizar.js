// Socket
const socket = io();
// Constantes de botones
var dropdownArbol = document.getElementById("dropdownArbol");


// Eventos de botones
dropdownArbol.onclick = () => {mostrarListadoArboles()};

function mostrarListadoArboles(){
	solicitarListaArboles();	
}


async function solicitarListaArboles(){
	let mensaje = 'listaDeArboles';
	socket.emit('listaArboles', mensaje)
}