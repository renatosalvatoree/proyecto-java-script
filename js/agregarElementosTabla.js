let carrito = [];
// const buyButton = document.getElementById("buyButton");
// buyButton.addEventListener("click", agregarCarrito)
carrito = JSON.parse(sessionStorage.getItem("carrito"))
tabla = document.getElementById("tablaCarrito");
for(el of carrito){
    let nombreManga = document.createElement("td");
    let precioManga = document.createElement("td");
    let tr = document.createElement("tr");
    nombreManga.innerHTML = el.nombre
    precioManga.innerHTML = el.precio
    tr.appendChild(nombreManga);
    tr.appendChild(precioManga);
    tabla.appendChild(tr)
}