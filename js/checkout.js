
const mangas = [{
    nombre: "hunter x hunter",
    id: "hunterXHunter",
},
{
    nombre: "jojo - steel ball run",
    id: "steelBallRun"
},
{
    nombre: "chainsaw man",
    id: "chainsawMan"
},
{
    nombre: "fairy tail",
    id: "fairyTail"
},
{
    nombre: "spy x family",
    id: "spyXFamily"
},
{
    nombre: "jojo - stone ocean",
    id: "stoneOcean"
}
]

noGuardado.addEventListener("click", guardarManga())


let carrito = [];
localStorage.setItem("carrito", JSON.stringify(carrito));
const guardado = document.getElementById("guardado");
const noGuardado = document.getElementById("noGuardado");
const saveButton = document.getElementById("saveButton");
carrito = JSON.parse(localStorage.getItem("carrito"))
for (const manga of carrito){
    if(saveButton.className == manga.id){
        guardado.className = "saveButtonSelected"
        noGuardado.className = "noMostrar"
    }
}
function guardarManga(){

if(guardado.className == "noMostrar")  {
    const mangasGuardadosJSON = localStorage.getItem("carrito");
    if(mangasGuardadosJSON){
        carrito = JSON.parse(localStorage.getItem("carrito"));
    }
    
    const mangaId = saveButton.className;
    console.log(mangaId)
    const resultadoBusqueda = mangas.filter((n) => n.id.includes(mangaId));
    for (const resultado of resultadoBusqueda) {
        carrito.push(resultado);
    }
    
    localStorage.setItem("carrito", JSON.stringify(carrito));
    console.log(carrito);
    
    guardado.className = "saveButtonSelected"
    noGuardado.className = "noMostrar"
} else if (noGuardado.className == "noMostrar") {
    carrito = JSON.parse(localStorage.getItem("carrito"));
    let indiceManga = carrito.map(function(e) { return e.id; }).indexOf('chainsawMan');
    carrito.splice(indiceManga, 1);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    console.log(carrito);
    
    guardado.className = "noMostrar"
    noGuardado.className = "saveButtonSelected"
}
}
