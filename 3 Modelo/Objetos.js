class objeto {

  constructor(){
    this.identificacion: " empty ",
    this.fechaDeRegistro: " empty",
    this.responsableDeRegistro: " empty",
    this.objetoRelacionado: objeto,
    this.ubicacion: " empty ";
  }
 


  confirmarCreacion: function(){
    // Confirma la creación del objeto
  }, 

  establecerDatos: function(){
    // Constructor
  },

  comprobarDatosObligatorios: function(){
    // Cofnirma que los datos ingresados sean los requeridos
  },

  obtenerDatos: function(){
    // Lee los datos de la página
  },

  confirmarOperacion: function(){
    // confirma cualquier operación generada
  },

  harakiri: function(){
    // Elimina el objeto de la BD
  },

  obtenerDatos: function(){
    // Obtiene los datos de la BD
  },

};



class arbol extends objeto {
  constructor(){
    super()
    this.datosDeRiego = []
    this.datosDeRegistro = []
    this.taxonomia = []
    this.datosDeTelemetria = []
  }

  obtenerDatosArbol(){

  }
}


class anillo extends objeto{
  constructor(){
    this.numeroDeConexion = ''
    this.modoDeOperacion = ''
  }

  enviarDatos(){

  }
  recibirDatos(){

  }
  activarMod(){

  }
  obtenerDatosAnillo(){

  }
}




const x = new arbol ();

console.log(x.ubicacion)