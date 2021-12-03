const mongoose = require('mongoose');
const Scheema = mongoose.Schema;


const scarletteSchema = new Scheema({
	nombre: {
		type: String,
		required: true
	},
	edad: {
		type: String,
		required: true
	}
},{timestamps: true});

// Esta parte es la que crea las colecciones con cierto esquema
const Blog1 = mongoose.model('Scarlette', scarletteSchema)



/*
const andresSchema = new Scheema({
	nombre: {
		type: String,
		required: true
	},
	edad: {
		type: String,
		required: true
	}
},{timestamps: true});


const Blog2 = mongoose.model('Andres', andresSchema)

*/
module.exports = Blog1;