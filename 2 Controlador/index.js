const secciones =           document.getElementsByClassName("seccion")
const botonVisualizar =     document.getElementById("visualizar")
const botonRegistrar =      document.getElementById("registrar")
const botonArbol =          document.getElementById("boton-arbol")
const botonAnillo =         document.getElementById("boton-anillo")
const enlaceVisualizar =    document.getElementById("e-visualizar")
const enlaceRegistrar =     document.getElementById("e-registrar")
let verORegistrar =         document.getElementById('accion')
//const socket = io();

mostrarSolo(secciones, 1)

botonVisualizar.addEventListener('click', () => {
    verORegistrar.innerHTML = "visualizar"
    menu("visualizar")
})
enlaceVisualizar.addEventListener('click', () => {
    verORegistrar.innerHTML = "visualizar"
    menu("visualizar")
})
botonRegistrar.addEventListener('click', () => {
    verORegistrar.innerHTML = "registrar"
    menu("registrar")
})
enlaceRegistrar.addEventListener('click', () => {
    verORegistrar.innerHTML = "registrar"
    menu("registrar")
})
// Menu principal
function menu(seleccion) {
    mostrarSolo(secciones, 2)
    botonArbol.addEventListener('click', () =>{
        if (verORegistrar.innerHTML === "registrar") {  
            window.location.href = '1_Interfaz/registrar.html#seccion-registrar-arbol'
        }
        else if (verORegistrar.innerHTML === "visualizar") {
            window.location.href = '1_Interfaz/visualizar.html#seccion-visualizar-arbol'
        }
    })
    botonAnillo.addEventListener('click', () =>{
        if (verORegistrar.innerHTML === "registrar") {
            window.location.href = '1_Interfaz/registrar.html#seccion-registrar-anillo'
        }
        else if (verORegistrar.innerHTML === "visualizar") {
            window.location.href = '1_Interfaz/visualizar.html#seccion-visualizar-anillo' 
        }
    })

}

// Función para esconder todas las secciones y mostrar sólo una
function mostrarSolo(vectorEl, index) {
    let arrayEl = Array.prototype.filter.call(vectorEl, elem => {
        return elem.nodeName === 'SECTION'
    })
    arrayEl.forEach( element => {element.style.display = 'none'});
    arrayEl[index-1].style.display = 'block'}