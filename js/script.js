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

let busqueda = document.getElementById("submit")
busqueda.onclick = realizarBusqueda();

function realizarBusqueda() {
    for (const todosLosMangas of mangas){
        const reset = document.getElementById(todosLosMangas.id);
        reset.className = "didntSearchFor"
    }
    const busqueda = document.getElementById("busqueda").value;
    const resultadoBusqueda = mangas.filter((n) => n.nombre.includes(busqueda));
    for (const resultado of resultadoBusqueda) {
        let encontrados = document.getElementById(resultado.id);
        encontrados.className = "searchResult"
    }}