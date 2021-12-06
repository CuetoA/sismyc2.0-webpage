const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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
		n: {type: String, required: false},
		p: {type: String, required: false},
		k: {type: String, required: false}
	}
});

const arbolSchema = new Schema({
	objeto: {type: objetoSchema, required: false},

	datosDeRiego: {
		rangoTemperaturaInferior:  {type: String, required: false},
		rangoTemperaturaSuperior: {type: String, required: false},
		rangoHumedadInferior: {type: String, required: false},

		rangoHumedadSuperior: {type: String, required: false},
		ciclosMedicionNumero: {type: String, required: false},
		ciclosMedicionUnidad: {type: String, required: false},

		fertilizantePorRiego: {type: String, required: false},
		aguaPorRiego: {type: String, required: false},
		ciclosDeRiego: {type: String, required: false},
		ciclosDeRiegoUnidad: {type: String, required: false}
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
    	anilloRelacionado: {type: String, required: false},
		ubicacion: {type: String, required: false},
		taxonomia: {
			familia: {type: String, required: false},
			genero: {type: String, required: false},
			especie: {type: String, required: false}
		}
    },

    datosDeTelemetria: {type: [datosTelemetriaSchema], required: false}
});

const ObjetoArbol = mongoose.model('Objetos', arbolSchema)
module.exports = ObjetoArbol;