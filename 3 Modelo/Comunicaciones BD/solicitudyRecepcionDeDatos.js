const ObjetoArbol = require('./Esquemas');


async function listaDeArboles(){
	//let lista = 'Quibo x2';
	let lista = await ObjetoArbol.find({},'datosDeRegistro.id').exec();
	// Queremos enviar esos datos a la PW
	return lista
}


/*
async function listaDocumentos(){
	let listat = await ObjetoArbol.find({},'datosDeRegistro.id').exec();

	console.log('\n\n', listat)
	console.log('\n\n')
	return 
}
*/

module.exports.listaDeArboles = listaDeArboles;