export{arbol, anillo};

class objeto {

  constructor(){
    this.identificacion = " empty ",
    this.fechaDeRegistro = " empty",
    this.responsableDeRegistro = " empty",
    this.objetoRelacionado = objeto,
    this.ubicacion = " empty ";
  }
 


  confirmarCreacion(){
    // Confirma la creación del objeto
  } 

  establecerDatos(){
    // Constructor
  }

  comprobarDatosObligatorios(){
    // Cofnirma que los datos ingresados sean los requeridos
  }

  obtenerDatos(){
    // Lee los datos de la página
  }

  confirmarOperacion(){
    // confirma cualquier operación generada
  }

  harakiri(){
    // Elimina el objeto de la BD
  }

  obtenerDatos(){
    // Obtiene los datos de la BD
  }

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



