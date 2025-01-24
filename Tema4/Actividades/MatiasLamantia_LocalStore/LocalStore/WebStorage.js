// Función para formatear la fecha y hora
function formatearFechaHora(fecha) {
    const opciones = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short' };
    return new Intl.DateTimeFormat('es-ES', opciones).format(fecha);
}

// Función para actualizar el contador y la información de la última visita
function actualizarContador() {
    if(localStorage.getItem("visitas") == null){
        localStorage.setItem("visitas","1");
       
    }
    else{
         let contador = parseInt(localStorage.getItem("visitas"));
        localStorage.setItem("visitas",contador+1);
    }

    document.getElementById("contador").innerHTML=localStorage.getItem("visitas");


    let fecha =  new Date();
    localStorage.setItem("ultimaVisita",formatearFechaHora(fecha));
    document.getElementById("ultima-visita").innerHTML= "Ultima visita :"+localStorage.getItem("ultimaVisita");

    mostrarMensajePersonalizado();
}

// Función para restablecer el contador y la información de la última visita
function restablecerDatos() {
    alert("Se han eliminado los datos");
    localStorage.removeItem("visitas");
}

// Función para mostrar un mensaje personalizado al usuario
function mostrarMensajePersonalizado(contador) {
    if(localStorage.getItem("visitas") == null){
        document.getElementById("mensaje-usuario").innerHTML = "Bienvenido por primera vez";
    }
    else{
        document.getElementById("mensaje-usuario").innerHTML = "Bienvenido de nuevo";
    }
}

// Llamar a la función al cargar la página para mostrar el valor actualizado)
alert(localStorage.getItem("visitas"));
if(typeof(Storage) !== "undefined"){
    mostrarMensajePersonalizado();
    document.getElementById("recargar").addEventListener("click",actualizarContador);
    document.getElementById("restablecer").addEventListener("click",restablecerDatos);

}else{
    alert("Tu navegador no soporta la función localStorage");
}

