let carrito = [];
let botonCheckout = document.getElementById("botonCheckout")
let botonPurchase = document.getElementById("purchaseButton")
let formulario = document.getElementById("checkoutForm")
carrito = JSON.parse(sessionStorage.getItem("carrito"))
tabla = document.getElementById("tablaCarrito");
let precio = 0
for(el of carrito){  
    let nombreManga = document.createElement("td");
    let precioManga = document.createElement("td");
    let tr = document.createElement("tr"); 
    nombreManga.innerHTML = el.nombre
    precioManga.innerHTML = el.precio   
    tr.appendChild(nombreManga);
    tr.appendChild(precioManga);
    tabla.appendChild(tr)
    precio = precio + parseInt(el.valor)

}
let total = document.createElement("td")
let precioTotal = document.createElement("td")
let tr1 = document.createElement("tr");
total.innerHTML = "TOTAL:"
    precioTotal.innerHTML = "$" + precio
    tr1.appendChild(total)
    tr1.appendChild(precioTotal)
    tabla.appendChild(tr1)

let mostrarBotonCheckout = document.getElementById("botonCheckout");
let texto = document.getElementById("noSeAgregoNingunManga");
texto.className = "hidden"
mostrarBotonCheckout.className = "mostrarBotonCheckout"

botonCheckout.addEventListener("click", () => {
formulario.className = "checkoutForm"
tabla.className = "hidden"
mostrarBotonCheckout.className = "hidden"
})

botonPurchase.addEventListener("click", () => {
        const input1 = document.getElementById("input1").value;
        const input2 = document.getElementById("input2").value;
        const input3 = document.getElementById("input3").value;
        const input4 = document.getElementById("input4").value;
        const input5 = document.getElementById("input5").value;
    if(input1 == "" || input2 == "" || input3 == "" || input4 == "" || input5 == ""){
        console.log(input1)
        Swal.fire({
            title: "Oh!",
            text: "You must complete all fields.",
            icon: "error",
            confirmButtonText: "OK",
        })}
        else{
  Swal.fire({
      title: "Great!",
      text: "You have successfully purchased your mangas.",
      icon: "success",
      confirmButtonText: "OK",
 }).then(
    function () {window.location.reload(true)})
    localStorage.setItem("mangasComprados", sessionStorage.getItem("carrito"))
    sessionStorage.removeItem("carrito")
        }
    
    })

