let tareasPendientes = ["hacer la compra","sacar al perro","cocinar","ir a pagar el seguro del coche"];

let agregarTarea = function (tarea){
    let tareasNuevas = [...tareasPendientes,tarea];
    return tareasNuevas;
}

document.write(agregarTarea("Limpiar coche"));