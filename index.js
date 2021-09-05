const secciones = document.getElementsByClassName("seccion")
const visualizarButton = document.getElementsById("visualizar")
const registrarButton = document.getElementsById("registrar")
const arbolButton =          document.getElementById("boton-arbol")
const anilloButton =         document.getElementById("boton-anillo")
const visualizarLink =    document.getElementById("e-visualizar")
const registrarLink =     document.getElementById("e-registrar")
let verORegistrar =         document.getElementById('accion')

mostrarSolo(secciones, 1)

// Visualizar actions
visualizarButton.addEventListener('click', () => {
    verORegistrar.innerHTML = "visualizar"
    menu("visualizar")
})
registrarLink.addEventListener('click', () => {
    verORegistrar.innerHTML = "visualizar"
    menu("visualizar")
})

// Registrar actions
registrarButton.addEventListener('click', () => {
    verORegistrar.innerHTML = "registrar"
    menu("registrar")
})
registrarLink.addEventListener('click', () => {
    verORegistrar.innerHTML = "registrar"
    menu("registrar")
})




// Main Menu
function menu(seleccion) {
    mostrarSolo(secciones, 2)
    arbolButton.addEventListener('click', () =>{
        if (verORegistrar.innerHTML === "registrar") {
            window.location.href = './Registrar/registrar-arbol.html'
        }
        else if (verORegistrar.innerHTML === "visualizar") {
            window.location.href = './Visualizar/visualizar-arbol.html'
        }
    })
    anilloButton.addEventListener('click', () =>{
        if (verORegistrar.innerHTML === "registrar") {
            window.location.href = './Registrar/registrar-anillo.html'
        }
        else if (verORegistrar.innerHTML === "visualizar") {
            window.location.href = './Visualizar/visualizar-anillo.html'
        }
    })

// Función para esconder todas las secciones y mostrar sólo una
function mostrarSolo(vectorEl, index) {
    let arrayEl = Array.prototype.filter.call(vectorEl, elem => {
        return elem.nodeName === 'SECTION'
    })
    arrayEl.forEach( element => {element.style.display = 'none'});
    arrayEl[index-1].style.display = 'block'
}
