

function realizarBusqueda(){
    const busqueda = document.getElementById("busqueda").value;
    alert(busqueda);
    const busquedaPorNombre = mangas.filter((n) => n.nombre.includes(busqueda));
    console.log("Encotramos las siguientes opciones:");
    for (const resultado of busquedaPorNombre) {
        console.log("El manga " + resultado.nombre + " de " + resultado.autor + " que cuesta " + resultado.precio + " euros.");
    }
    
    console.log(Object.nombre);
}

const mangas = [
    {nombre: "Hunter x Hunter", autor: "Yoshihiro Togashi", precio: 7},
    {nombre: "Steel Ball Run", autor: "Hirohiko Araki", precio: 15},
    {nombre: "Chainsaw Man", autor: "Tatsuki Fujimoto", precio: 12}
]


console.log(busquedaPorNombre.nombre)


    