const BOTON_ENCRIPTAR = document.querySelector("#btn-encriptar");
const BOTON_DESENCRIPTAR = document.querySelector("#btn-desencriptar");

const imgMunheco = document.querySelector("#panel-munheco");
const txtLeyenda = document.querySelector("#panel-leyenda");
const pnlTextoDecifrado = document.querySelector(".panel__texto-cifrado");

let cifrado = document.getElementById("cifrado");
let texto = "";
let cadena = "";


BOTON_ENCRIPTAR.addEventListener("click", function() {
    texto = document.getElementById("texto").value.trim();
    // console.info(`Texto ingresado: ${texto}`);

    if (texto.length > 0) {
        cadena = texto.replaceAll(/e/gm, "enter")
            .replaceAll(/i/gm, "imes")
            .replaceAll(/a/gm, "ai")
            .replaceAll(/o/gm, "ober")
            .replaceAll(/u/gm, "ufat");

            imgMunheco.classList.add("panel__munheco-quitar");
            txtLeyenda.classList.add("panel__leyenda-quitar");
            pnlTextoDecifrado.classList.add("panel__texto-altura");
            cifrado.value = cadena;

    } else {
        alert("Debe ingresar un texto..");
    }
});


BOTON_DESENCRIPTAR.addEventListener("click", function() {
    texto = document.getElementById("texto").value.trim();

    if (texto.length > 0) {
        cadena = texto.replaceAll(/enter/gm, "e")
            .replaceAll(/imes/gm, "i")
            .replaceAll(/ai/gm, "a")
            .replaceAll(/ober/gm, "o")
            .replaceAll(/ufat/gm, "u");

            imgMunheco.classList.add("panel__munheco-quitar");
            txtLeyenda.classList.add("panel__leyenda-quitar");
            pnlTextoDecifrado.classList.add("panel__texto-altura");
            cifrado.value = cadena;

    } else {
        alert("Debe ingresar un texto...");
    }
});

function copiarTexto() {
    let cifrado = document.querySelector("#cifrado");
    texto = document.querySelector("#texto");

    cifrado.select();
    if (document.execCommand("copy")) {
        alert("Texto copiado...");
    } else {
        console.error("No se ha podido copiar el texto");
    }
}