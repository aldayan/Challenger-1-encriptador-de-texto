var encriptar = document.querySelector("#encriptar");
var encriptador = document.querySelector("#encriptador");


var contenedor = document.querySelector(".contenedor1")

function validacion() {
    var errores = contenedor.querySelectorAll(".error");
    for (var er of errores) {
        contenedor.removeChild(er);
    }

    var palabra = encriptar.value;
    var validaciones = " a b c d e f g h i j k l m n ñ o p q r s t u v w x y z ";
    var error = document.createDocumentFragment();
    for (var frase of palabra) {
        if (!validaciones.includes(frase)) {
            var p = document.createElement("p");
            p.setAttribute("class", "error");
            p.textContent = 'Las letras no pueden ser en mayusculas o con acentos.';
            error.appendChild(p);
        }
    }
    contenedor.appendChild(error);
    if (error.children.length === 0) {

        return true;
    }

    return false;

}


var botonEncriptar = document.querySelector("#botonEncriptar");
botonEncriptar.addEventListener("click", function(event) {
    event.preventDefault();
    if (!validacion()) return;
    var palabra = encriptar.value;
    var palabraEncriptada = palabra
        .replaceAll("e", "enter")
        .replaceAll("i", "imes")
        .replaceAll("o", "ober")
        .replaceAll("a", "ai")
        .replaceAll("u", "ufat");
    encriptador.value = palabraEncriptada;



});



var botonDesencriptar = document.querySelector("#botonDesencriptar");
botonDesencriptar.addEventListener("click", function(event) {
    event.preventDefault();
    if (!validacion()) return;
    var palabraEncriptada = encriptar.value;
    var palabra = palabraEncriptada
        .replaceAll("enter", "e")
        .replaceAll("imes", "i")
        .replaceAll("ober", "o")
        .replaceAll("ai", "a")
        .replaceAll("ufat", "u");

    encriptador.value = palabra;
});



var botonCopiar = document.querySelector("#botonCopiar");
botonCopiar.addEventListener("click", function(event) {
    event.preventDefault();

    var palabra = encriptador.value;
    navigator.clipboard.writeText(palabra);
    encriptador.value = "";
    encriptar.value = "";


});