const ObjetoArbol = require('./Esquemas');


async function listaDeArboles(){
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

async function solicitarDatos(elemento){
	//console.log('llegamos al servidor sin pedos con: ', elemento)
	// Aquí deberemos usar un find con filtro a id y devolver inmediatamente esos datos
	return await ObjetoArbol.find({_id: elemento}).exec();
	//console.log(await ObjetoArbol.find({_id: elemento}).exec())
	//console.log('jalando ando' ,datos)
	//return datos
}

module.exports.solicitarDatos = solicitarDatos;
module.exports.listaDeArboles = listaDeArboles;