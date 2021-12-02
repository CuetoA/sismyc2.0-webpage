const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//import {arbol, anillo} from './Objetos.js';

const objetoSchema = new Schema({
	identificacion : {type: String, required: true},
    fechaDeRegistro : {type: String, required: true},
    responsableDeRegistro : {type: String, required: true},
    objetoRelacionado : {type: String, required: true},
    ubicacion : {type: String, required: true}
}, {timestamps: true});


const datosTelemetriaSchema = new Schema({
	fechayHora: {type: String, required: true},
	temperatura: {type: String, required: true},
	humedad: {type: String, required: true},
	ph: {type: String, required: true}
	nutrientes: {
		temperatura: {type: String, required: true},
		humedad: {type: String, required: true},
		nutrientes: {type: String, required: true}
	}
});

const arbolSchema = new Schema({
	objeto: {type: objetoSchema, required: true},

	datosDeRiego: {
		horaDeRiego: {type: String, required: true},
		ciclosDeRiego: {type: String, required: true},
		horaDeMedición: {type: String, required: true},
		ciclosDeMedición: {type: String, required: true},
		cantidadDeAgua por riego: {type: String, required: true},
		cantidadDeFertilizante por riego: {type: String, required: true},
		rangoDeTemperaturas: {type: String, required: true},
		humedadMínima: {type: String, required: true}
	}

    datosDeRegistro: {
    	identificaciónDelArbol: {type: String, required: true},
		fechaDeRegistro: {type: String, required: true},
		edadDeIngreso al sistema: {type: String, required: true},
		responsableDelRegistro: {type: String, required: true},
		tamañoDeIngresoAlSistema: {
			alturaDeIngreso: {type: String, required: true},
			diámetroDeIngreso: {type: String, required: true}
		}
    }

    informacionDelArbol:{
    	relacionConAnillo: {type: String, required: true},
		ubicacion: {type: String, required: true}
		taxonomia: {
			familia: {type: String, required: true},
			Género: {type: String, required: true},
			Especie: {type: String, required: true}
		}
    }

    datosDeTelemetria: {type: [datosTelemetriaSchema], required: true}
});

/*
const anilloSchema = new Schema({
	objeto: anillo
})
*/

const ObjetoArbol = mongoose.model('Objetos', arbolSchema)
module.exports = ObjetoArbol;