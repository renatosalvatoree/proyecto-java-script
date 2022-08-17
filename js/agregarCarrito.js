/* Este script se encarga de modificar el css del boton de agregar al carrito 
y agrega los mangas al carrito*/
async function obtenerMangas(){
    let myInit = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        mode: 'cors',
        cache: 'default'
      };
    let myRequest = new Request("mangas.json", myInit)

    const res = await fetch (myRequest)
    // await sessionStorage.setItem("mangas", res)
    let mangas = await res.json();
    sessionStorage.setItem("mangas", JSON.stringify(mangas))
}
obtenerMangas();
const mangas = JSON.parse(sessionStorage.getItem("mangas"))



const buyButton = document.getElementById("buyButton");
buyButton.addEventListener("click", agregarCarrito)

let carrito = [];      

function agregarCarrito(){
    obtenerMangas();
let mangas = JSON.parse(sessionStorage.getItem("mangas"))

    const carritoJSON = sessionStorage.getItem("carrito");
    if(carritoJSON){
        carrito = JSON.parse(sessionStorage.getItem("carrito"));
    }
    
    const mangaId = saveButton.className;
    console.log(mangaId)
    const resultadoBusqueda = mangas.filter((n) => n.id.includes(mangaId));
    for (const resultado of resultadoBusqueda) {
        carrito.push(resultado);
    }
    sessionStorage.setItem("carrito", JSON.stringify(carrito));
    window.location.reload(true)
}
if(sessionStorage.getItem("carrito")){
carrito = JSON.parse(sessionStorage.getItem("carrito"))
console.log(carrito)
for(const el of carrito){
    let botonComprar = document.getElementById("buyButton");
    let botonAgregado = document.getElementById("addedButton");
    console.log(botonComprar.className)
    if(botonComprar.className == el.id){
        botonComprar.className = "hidden"
        botonAgregado.className = "addedButton"
    }
    
}}

if(localStorage.getItem("mangasComprados")){
    comprados = JSON.parse(localStorage.getItem("mangasComprados"));
    for(const el of comprados){
        let botonComprar = document.getElementById("buyButton");
        let botonAgregado = document.getElementById("addedButton");
        let botonComprado = document.getElementById("purchasedButton");
        let precio = document.getElementById("price");
        console.log(botonComprar.className)
        if(botonComprar.className == el.id){
            botonComprar.className = "hidden"
            botonAgregado.className = "hidden"
            botonComprado.className = "purchasedButton"
            precio.className = "hidden"
        }
        
    }
}
