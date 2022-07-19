
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
//localStorage.setItem("mangasGuardados", JSON.stringify(mangasGuardados));
const guardado = document.getElementById("guardado");
const noGuardado = document.getElementById("noGuardado");
const saveButton = document.getElementById("saveButton");

if(localStorage.getItem("mangasGuardados") == ""){
    localStorage.setItem("mangasGuardados", JSON.stringify(mangasGuardados));
}
mangasGuardados = JSON.parse(localStorage.getItem("mangasGuardados"))
for (const manga of mangasGuardados){
    if(saveButton.className == manga.id){
        guardado.className = "saveButtonSelected"
        noGuardado.className = "noMostrar"
    }
}
saveButton.addEventListener("click", guardarManga)
function guardarManga(){

if(guardado.className == "noMostrar")  {
    const mangasGuardadosJSON = localStorage.getItem("mangasGuardados");
    if(mangasGuardadosJSON){
        mangasGuardados = JSON.parse(localStorage.getItem("mangasGuardados"));
    }
    
    const mangaId = saveButton.className;
    console.log(mangaId)
    const resultadoBusqueda = mangas.filter((n) => n.id.includes(mangaId));
    for (const resultado of resultadoBusqueda) {
        mangasGuardados.push(resultado);
    }
    
    localStorage.setItem("mangasGuardados", JSON.stringify(mangasGuardados));
    console.log(mangasGuardados);
    
    guardado.className = "saveButtonSelected"
    noGuardado.className = "noMostrar"
} else if (noGuardado.className == "noMostrar") {
    mangasGuardados = JSON.parse(localStorage.getItem("mangasGuardados"));
    const mangaId = saveButton.className;
    let indiceManga = mangasGuardados.map(function(e) { return e.id; }).indexOf(mangaId);
    mangasGuardados.splice(indiceManga, 1);
    console.log(indiceManga)
    localStorage.setItem("mangasGuardados", JSON.stringify(mangasGuardados));
    console.log(mangasGuardados);
    
    guardado.className = "noMostrar"
    noGuardado.className = "saveButtonSelected"
}
}
