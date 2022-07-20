
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
    console.log("jeje")
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
}
