/* Este script se encarga del guardado de los mangas */

//Se obtiene el array del archivo .json
async function obtenerMangas(){
    const res = await fetch ("mangas.json")
    // await sessionStorage.setItem("mangas", res)
    const mangas = await res.json();
    sessionStorage.setItem("mangas", JSON.stringify(mangas))
}
obtenerMangas();
const mangas = JSON.parse(sessionStorage.getItem("mangas"))

/* Anteriormente todos los datos de los mangas se obtenian de este array.
Actualemente los datos son obtenidos del archivo .json pero lo deje para que se entienda mejor 
los datos que se utilizan en el codigo */

// obtenerMangas();
// const mangas = [{
//     nombre: "hunter x hunter",
//     id: "hunterXHunter",
//     precio: "$7",
//     valor: 7
// },
// {
//     nombre: "jojo - steel ball run",
//     id: "steelBallRun",
//     precio: "$12",
//     valor: 12
// },
// {
//     nombre: "chainsaw man",
//     id: "chainsawMan",
//     precio: "$9",
//     valor: 9
// },
// {
//     nombre: "fairy tail",
//     id: "fairyTail",
//     precio: "$8",
//     valor: 8
// },
// {
//     nombre: "spy x family",
//     id: "spyXFamily",
//     precio: "$12",
//     valor: 12
// },
// {
//     nombre: "jojo - stone ocean",
//     id: "stoneOcean",
//     precio: "$12",
//     valor: 12
// }
// ]

let mangasGuardados = [];
const guardado = document.getElementById("guardado");
const noGuardado = document.getElementById("noGuardado");
const saveButton = document.getElementById("saveButton");

// Se crea el item mangasGuardados en el local storage si se visita la pagina desde un navegador nuevo.

if(localStorage.getItem("mangasGuardados") == null){
    localStorage.setItem("mangasGuardados", JSON.stringify(mangasGuardados));
}

// Se obtiene del local storage el estado del boton de guardado y se aplica en el css.
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

/*Al apretar el boton de guardado, se obtiene el ID del manga mediante la clase de los botones de guardado
y se lo busca en el array*/
    const mangaId = saveButton.className;
    console.log(mangaId)
    const resultadoBusqueda = mangas.filter((n) => n.id.includes(mangaId));
    for (const resultado of resultadoBusqueda) {
        mangasGuardados.push(resultado);
    }
/* Se guarda en el local storage el manga guardado y se cambia el css para indicar que fue guardado */
    localStorage.setItem("mangasGuardados", JSON.stringify(mangasGuardados));
    console.log(mangasGuardados);
    
    guardado.className = "saveButtonSelected"
    noGuardado.className = "noMostrar"
// En el caso de que el manga ya este guardado y la case del boton sea "noMostrar" se ejecuta esto:
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
