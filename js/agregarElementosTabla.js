let carrito = [];
let botonCheckout = document.getElementById("botonCheckout")
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
    let precio = 0;
    precio = precio + parseInt(el.valor)
    console.log(precio)
}

let mostrarBotonCheckout = document.getElementById("botonCheckout");
let texto = document.getElementById("noSeAgregoNingunManga");
texto.className = "hidden"
mostrarBotonCheckout.className = "mostrarBotonCheckout"
botonCheckout.addEventListener("click", () => {
    Swal.fire({
    title: "Great!",
    text: "You have successfully purchased your mangas.",
    icon: "success",
    confirmButtonText: "OK",
}).then(
    function () {window.location.reload(true)})
localStorage.setItem("mangasComprados", sessionStorage.getItem("carrito"))
sessionStorage.removeItem("carrito")
})

