/* Este script se encarga de desbloquear los mangas comprados para su lectura */

const mangasComprados = JSON.parse(localStorage.getItem("mangasComprados"))
console.log(mangasComprados)

for (const el of mangasComprados) {
    console.log(el)
    const identificador = document.getElementById("purchasedButton");
    if (identificador.className == "purchasedButton") {
        const linkMangas = document.getElementById("linkMangas")
        linkMangas.className = "chaptersPurchased"
    }
}