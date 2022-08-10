/*Script para la busqueda de mangas*/
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

let mangaBuscado = document.getElementById("busqueda")

/*Cada vez que se pulsa una tecla, se ejecuta la funcion realizarBusqueda
donde se utiliza filter para buscar resultados en el array*/
mangaBuscado.addEventListener("keyup", realizarBusqueda)

function realizarBusqueda() {
    for (const todosLosMangas of mangas) {
        const reset = document.getElementById(todosLosMangas.id);
        reset.className = "didntSearchFor"
    }
    const busqueda = document.getElementById("busqueda").value;
    const resultadoBusqueda = mangas.filter((n) => n.nombre.includes(busqueda));
    for (const resultado of resultadoBusqueda) {
        let encontrados = document.getElementById(resultado.id);
        encontrados.className = "searchResult"
    }
}