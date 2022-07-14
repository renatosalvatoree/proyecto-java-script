let mangasGuardados = JSON.parse(localStorage.getItem("mangasGuardados"));
let textoNoSeGuardaronMangas = document.getElementById("noSeGuardoNingunManga")
textoNoSeGuardaronMangas.className = ""
    console.log(mangasGuardados);
    for (const resultado of mangasGuardados) {
        let textoNoSeGuardaronMangas = document.getElementById("noSeGuardoNingunManga")
        textoNoSeGuardaronMangas.className = "hidden"

        let guardados = document.getElementById(resultado.id)
        guardados.className = "searchResult"
        console.log(guardados.className);
    }
