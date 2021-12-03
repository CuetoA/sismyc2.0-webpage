const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//import {arbol, anillo} from './Objetos.js';

const objetoSchema = new Schema({
	identificacion : {type: String, required: true},
    fechaDeRegistro : {type: String, required: false},
    responsableDeRegistro : {type: String, required: true},
    objetoRelacionado : {type: String, required: false},
    ubicacion : {type: String, required: false}
}, {timestamps: false});


const datosTelemetriaSchema = new Schema({
	fechayHora: {type: String, required: false},
	temperatura: {type: String, required: false},
	humedad: {type: String, required: false},
	ph: {type: String, required: false},
	nutrientes: {
		temperatura: {type: String, required: false},
		humedad: {type: String, required: false},
		nutrientes: {type: String, required: false}
	}
});

const arbolSchema = new Schema({
	objeto: {type: objetoSchema, required: false},

	datosDeRiego: {
		horaDeRiego: {type: String, required: false},
		ciclosDeRiego: {type: String, required: false},
		horaDeMedición: {type: String, required: false},
		ciclosDeMedición: {type: String, required: false},
		cantidadDeAguaPorRiego: {type: String, required: false},
		cantidadDeFertilizantePorRiego: {type: String, required: false},
		rangoDeTemperaturas: {type: String, required: false},
		humedadMínima: {type: String, required: false}
	},

    datosDeRegistro: {
    	id: {type: String, required: false},
		fechaDeRegistro: {type: String, required: false},
		edadDeIngreso: {type: String, required: false},
		registrante: {type: String, required: false},
		tamañoDeIngresoAlSistema: {
			alturaDeRegistro: {type: String, required: false},
			diametroDeRegistro: {type: String, required: false}
		}
    },

    informacionDelArbol:{
    	relacionConAnillo: {type: String, required: false},
		ubicacion: {type: String, required: false},
		taxonomia: {
			familia: {type: String, required: false},
			Género: {type: String, required: false},
			Especie: {type: String, required: false}
		}
    },

    datosDeTelemetria: {type: [datosTelemetriaSchema], required: false}
});

/*
const anilloSchema = new Schema({
	objeto: anillo
})
*/

const ObjetoArbol = mongoose.model('Objetos', arbolSchema)
module.exports = ObjetoArbol;