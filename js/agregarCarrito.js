
// const mangas = [{
//     nombre: "hunter x hunter",
//     id: "hunterXHunter",
// },
// {
//     nombre: "jojo - steel ball run",
//     id: "steelBallRun"
// },
// {
//     nombre: "chainsaw man",
//     id: "chainsawMan"
// },
// {
//     nombre: "fairy tail",
//     id: "fairyTail"
// },
// {
//     nombre: "spy x family",
//     id: "spyXFamily"
// },
// {
//     nombre: "jojo - stone ocean",
//     id: "stoneOcean"
// }
// ]


const buyButton = document.getElementById("buyButton");
buyButton.addEventListener("click", agregarCarrito)

let carrito = [];      


function agregarCarrito(){
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
