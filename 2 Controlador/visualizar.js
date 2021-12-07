// Socket
const socket = io();
// Constantes de botones
var dropdownArbol = document.getElementById("dropdownArbol");
var dropdownMenu = document.getElementById("dropdown-menu");

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

function enviarDatos(llegada){
	console.log('Hola bb chompi hermoso')
	console.log(llegada)
}