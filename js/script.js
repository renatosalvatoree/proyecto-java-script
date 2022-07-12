// localStorage.clear()

// const mangasGuardados = []

// function guardarManga() {
//     let indiceSteelBallRun;
//     // let mangasGuardadosJSON;
//     let indiceHunterXHunter;
//     // let indiceStoneOcean;
//     // let idiceChainsawMan;
//     // let indiceSpyXFamily;

//     const botonGuardado = document.getElementById("guardado");
//     const botonNoGuardado = document.getElementById("noGuardado");
//     if (botonGuardado.className == "noMostrar") {
//         botonGuardado.className = "saveButtonSelected"
//         botonNoGuardado.className = "noMostrar"
//         mangasGuardados.push({
//             nombre: "jojo - steel ball run",
//             id: "steelBallRun"
//         })
//         indiceSteelBallRun = mangasGuardados.length - 1;
//         console.log(indiceSteelBallRun);
//         console.log(mangasGuardados);
//         // mangasGuardadosJSON = JSON.stringify(mangasGuardados);
//         localStorage.setItem("mangasGuardados", JSON.stringify(mangasGuardados));
//     } else if (botonNoGuardado.className == "noMostrar") {
//         const mangasGuardadosJson = JSON.parse(localStorage.getItem("mangasGuardados"));
//         console.log(mangasGuardadosJson);
//         botonGuardado.className = "noMostrar"
//         botonNoGuardado.className = "saveButtonSelected"
//         mangasGuardados.splice(indiceSteelBallRun, 1);
//         console.log(mangasGuardados);
//     }
// }

// function guardarMangaHunterXHunter() {
//     let indiceSteelBallRun;
//     // let mangasGuardadosJSON;
//     let indiceHunterXHunter;
//     // let indiceStoneOcean;
//     // let idiceChainsawMan;
//     // let indiceSpyXFamily;

//     const botonGuardado = document.getElementById("guardado");
//     const botonNoGuardado = document.getElementById("noGuardado");
//     if (botonGuardado.className == "noMostrar") {
//         botonGuardado.className = "saveButtonSelected"
//         botonNoGuardado.className = "noMostrar"
//         mangasGuardados.push({
//             nombre: "hunter x hunter",
//             id: "hunterXHunter"
//         })
//         indiceHunterXHunter = mangasGuardados.length - 1;
//         console.log(indiceSteelBallRun);
//         console.log(mangasGuardados);
//         // mangasGuardadosJSON = JSON.stringify(mangasGuardados);
//         localStorage.setItem("mangasGuardados", JSON.stringify(mangasGuardados));
//     } else if (botonNoGuardado.className == "noMostrar") {
//         const mangasGuardadosJson = JSON.parse(localStorage.getItem("mangasGuardados"));
//         console.log(mangasGuardadosJson);
//         botonGuardado.className = "noMostrar"
//         botonNoGuardado.className = "saveButtonSelected"
//         mangasGuardados.splice(indiceSteelBallRun, 1);
//         console.log(mangasGuardados);
//     }
// }