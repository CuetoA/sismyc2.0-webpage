// Socket
const socket = io();
// Constantes de botones
var dropdownArbol = document.getElementById("dropdownArbol");
var dropdownMenu = document.getElementById("dropdown-menu");
var idArbol = document.getElementById("idArbol");

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
	colocarDatos(datos);
});


function colocarDatos(datos){
	//console.log(datos[0])
	//console.log(datos[0].datosDeRegistro.edadDeIngreso)
	idArbol.setAttribute('value','Grecia');
	
}
/*

{
    "datosDeRiego": {
        "rangoTemperaturaInferior": "",
        "rangoTemperaturaSuperior": "",
        "rangoHumedadInferior": "",
        "rangoHumedadSuperior": "",
        "ciclosMedicionNumero": "",
        "ciclosMedicionUnidad": null,
        "fertilizantePorRiego": "",
        "aguaPorRiego": "",
        "ciclosDeRiego": "",
        "ciclosDeRiegoUnidad": null
    },
    "datosDeRegistro": {
        "tamañoDeIngresoAlSistema": {
            "alturaDeRegistro": "500",
            "diametroDeRegistro": "2"
        },
        "id": "Tainna Three",
        "fechaDeRegistro": "06/12/2021",
        "edadDeIngreso": "20",
        "registrante": "Tainna Santana"
    },
    "informacionDelArbol": {
        "taxonomia": {
            "familia": "0",
            "genero": "0",
            "especie": "0"
        },
        "anilloRelacionado": "20",
        "ubicacion": "Masagua 5"
    },
    "_id": "61ae60c65aae543dbb8f5930",
    "datosDeTelemetria": [
        {
            "nutrientes": {
                "n": "20",
                "p": "20",
                "k": "20"
            },
            "fechayHora": "06/12/21 01:15",
            "temperatura": "30",
            "humedad": "91",
            "ph": "7",
            "_id": "61ae6156a2a17e0e109c89b5"
        },
        {
            "nutrientes": {
                "n": "20",
                "p": "20",
                "k": "20"
            },
            "fechayHora": "06/12/21 01:15",
            "temperatura": "30",
            "humedad": "91",
            "ph": "7",
            "_id": "61ae77703a578cad3b857043"
        },
        {
            "nutrientes": {
                "n": "20",
                "p": "20",
                "k": "20"
            },
            "fechayHora": "06/12/21 01:15",
            "temperatura": "30",
            "humedad": "91",
            "ph": "7",
            "_id": "61ae78604296ca526335204c"
        },
        {
            "nutrientes": {
                "n": "20",
                "p": "20",
                "k": "20"
            },
            "fechayHora": "06/12/21 01:15",
            "temperatura": "30",
            "humedad": "91",
            "ph": "7",
            "_id": "61aea8ef2bea11c176e65ccc"
        }
    ],
    "__v": 0

    
}*/