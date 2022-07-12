
const mangas = [{
    nombre: "hunter x hunter",
    id: "hunterXHunter"
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
const saveButton = document.getElementById("saveButton")
let mangasGuardadosJSON  = JSON.stringify(mangasGuardados);


if(guardado.className == "noMostrar")  {
    mangasGuardados = JSON.parse(localStorage.getItem("mangasGuardados"));
    
    const mangaId = saveButton.className;
    const resultadoBusqueda = mangas.filter((n) => n.id.includes(mangaId));
    for (const resultado of resultadoBusqueda) {
        mangasGuardados.push(resultado);
    }
    console.log(mangasGuardados);
    

    

    mangasGuardadosJSON = JSON.stringify(mangasGuardados);
    localStorage.setItem("mangasGuardados", mangasGuardadosJSON);

    // guardado.className = "saveButtonSelected"
    // noGuardado.className = "noMostrar"
}
}

// const mangasGuardados = [{
//     nombre: "jojo - stone ocean",
//     id: "stoneOcean"
// }];
// mangasGuardadosJSON = JSON.stringify(mangasGuardados);
//     localStorage.setItem("mangasGuardados", mangasGuardadosJSON);

// function guardarManga(){
// const guardado = document.getElementById("guardado");
// const noGuardado = document.getElementById("noGuardado");
// const saveButton = document.getElementById("saveButton")
// let mangasGuardadosJSON  = JSON.stringify(mangasGuardados);


// if(guardado.className == "noMostrar")  {
//     const obtenerMangasGuardados = JSON.parse(localStorage.getItem("mangasGuardados"));
//     // console.log(obtenerMangasGuardados)
//     localStorage.removeItem("mangasGuardados")
//     for (const manga of obtenerMangasGuardados){
        
//         mangasGuardados.push(manga);
//     }
//      console.log(mangasGuardados);
//     const mangaId = saveButton.className;
//     const resultadoBusqueda = mangas.filter((n) => n.id.includes(mangaId));
//     for (const resultado of resultadoBusqueda) {
//         mangasGuardados.push(resultado);
//     }
//     // console.log(mangasGuardados);
    

    

//     mangasGuardadosJSON = JSON.stringify(mangasGuardados);
//     localStorage.setItem("mangasGuardados", mangasGuardadosJSON);

//     // guardado.className = "saveButtonSelected"
//     // noGuardado.className = "noMostrar"
// }
// }