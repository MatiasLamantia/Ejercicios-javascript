
if(localStorage.getItem("visitas") == null){
    localStorage.setItem("visitas","1");
}
else{
    let contador = parseInt(localStorage.getItem("visitas"));
    localStorage.setItem("visitas",contador+1);
}

let resultado = document.getElementById("resultado");
document.getElementById("visitas").innerHTML = `<b>Visitas :</b> ${localStorage.getItem('visitas')}`;

document.getElementById("formulario").addEventListener("submit",enviarFormulario);

function enviarFormulario(evento){
    alert("Formulario enviado");
    evento.preventDefault();
    let nombre = document.getElementById("nombre").value;
    let telefono = document.getElementById("telefono").value;
    let formacion = document.getElementById("formacion").value;

    resultado.innerHTML = `<br> <b>Nombre :</b> ${nombre} <br> <b>Telefono :</b> ${telefono} <br> <b>Formacion :</b> ${formacion}`;
}