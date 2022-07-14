
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


let mangasGuardados = [];
function guardarManga(){
const guardado = document.getElementById("guardado");
const noGuardado = document.getElementById("noGuardado");
const saveButton = document.getElementById("saveButton");
// const estado1 = localStorage.getItem("botonGuardado")
// const estado2 = localStorage.getItem("botonNoGuardado")
// guardado.className = estado1
// noGuardado.className = estado2
guardado.className = localStorage.getItem("botonGuardado")
noGuardado.className = localStorage.getItem("botonNoGuardado")

if(guardado.className == "noMostrar")  {
    const mangasGuardadosJSON = localStorage.getItem("mangasGuardados");
    if(mangasGuardadosJSON){
        mangasGuardados = JSON.parse(localStorage.getItem("mangasGuardados"));
    }
    
    const mangaId = saveButton.className;
    const resultadoBusqueda = mangas.filter((n) => n.id.includes(mangaId));
    for (const resultado of resultadoBusqueda) {
        mangasGuardados.push(resultado);
    }
    
    localStorage.setItem("mangasGuardados", JSON.stringify(mangasGuardados));
    console.log(mangasGuardados);
    // for (const resultado of mangasGuardados) {
    //     let guardados = document.getElementsByClassName(resultado.id)
    //     // encontrados.className = "searchResult"
    //     console.log(guardados);
    // }
    localStorage.setItem("botonGuardado", "saveButtonSelected");
    localStorage.setItem("botonNoGuardado", "noMostrar");
    guardado.className = localStorage.getItem("botonGuardado")
    noGuardado.className = localStorage.getItem("botonNoGuardado")
    // localStorage.setItem("botonGuardado", guardado.className);
    // localStorage.setItem("botonNoGuardado", noGuardado.className);
} else if (noGuardado.className == "noMostrar") {
    mangasGuardados = JSON.parse(localStorage.getItem("mangasGuardados"));
    let indiceManga = mangasGuardados.map(function(e) { return e.id; }).indexOf('chainsawMan');
    mangasGuardados.splice(indiceManga, 1);
    localStorage.setItem("mangasGuardados", JSON.stringify(mangasGuardados));
    console.log(mangasGuardados);
    localStorage.setItem("botonGuardado", "noMostrar");
    localStorage.setItem("botonNoGuardado", "saveButtonSelected");
    guardado.className = localStorage.getItem("botonGuardado")
    noGuardado.className = localStorage.getItem("botonNoGuardado")
    // localStorage.setItem("botonGuardado", guardado.className);
    // localStorage.setItem("botonNoGuardado", noGuardado.className);
}
}
