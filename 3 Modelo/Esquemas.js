const mongoose = require('mongoose');
const esquema = mongoose.Schema;

import {arbol, anillo} from '/Objetos.js';

const arbolSchema = new Schema({
	objeto: arbol
},{timestamps: true})

const anilloSchema = new Schema({
	objeto: anillo
},{timestamps: true})

const Objetos = mongoose.model('Objetos', arbolSchema)
module.exports = Objetos;