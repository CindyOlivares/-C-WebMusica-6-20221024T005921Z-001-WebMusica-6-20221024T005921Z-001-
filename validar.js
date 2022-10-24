
var nomb = document.getElementById("nombre");
var ape = document.getElementById("apellido");
var mail = document.getElementById("email");
var comen = document.getElementById("comentario");
var error = document.getElementById("error");
error.style.color = "black";

function validarDatos() {
    console.log("Formulario enviado");

    var mensajeError = [];

    if (nomb.value === "") {
        mensajeError.push("Decinos tu nombre");
    }

    if (ape.value === "") {
        mensajeError.push("También tu apellido");
    }

    if (mail.value === "" || mail.value === null) {
        mensajeError.push("Dejanos un Email para contactarte");
    }

    if (comen.value === "") {
        mensajeError.push("Queremos saber más para ayudarte.");
    }
    error.innerHTML = mensajeError.join(", ");

    return false;

}
