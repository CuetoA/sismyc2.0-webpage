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
	ph: {type: String, required: false}
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
		cantidadDeAgua por riego: {type: String, required: false},
		cantidadDeFertilizante por riego: {type: String, required: false},
		rangoDeTemperaturas: {type: String, required: false},
		humedadMínima: {type: String, required: false}
	}

    datosDeRegistro: {
    	identificaciónDelArbol: {type: String, required: false},
		fechaDeRegistro: {type: String, required: false},
		edadDeIngreso al sistema: {type: String, required: false},
		responsableDelRegistro: {type: String, required: false},
		tamañoDeIngresoAlSistema: {
			alturaDeIngreso: {type: String, required: false},
			diámetroDeIngreso: {type: String, required: false}
		}
    }

    informacionDelArbol:{
    	relacionConAnillo: {type: String, required: false},
		ubicacion: {type: String, required: false}
		taxonomia: {
			familia: {type: String, required: false},
			Género: {type: String, required: false},
			Especie: {type: String, required: false}
		}
    }

    datosDeTelemetria: {type: [datosTelemetriaSchema], required: false}
});

/*
const anilloSchema = new Schema({
	objeto: anillo
})
*/

const ObjetoArbol = mongoose.model('Objetos', arbolSchema)
module.exports = ObjetoArbol;