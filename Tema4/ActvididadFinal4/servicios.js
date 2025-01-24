let enviar = document.getElementById("enviar");

enviar.addEventListener("click",comprobarformulario,false);

function comprobarformulario(evento){

    evento.preventDefault();

    let errores = [];
    
     //////////////////////////////////   Comprobar categorias   //////////////////////////////////
    let patronNombre = /^[A-Za-zÑñ\s]{10,25}$/;

    if(document.getElementById("nombre").value !== ""){
        if(patronNombre.test(document.getElementById("nombre").value)){
            document.getElementById("nombre").style.backgroundColor = "white";
        }
        else{
            errores.push('El nombre solo acepta caracteres mayúsculas y minúsculas. De 10 a 25 caracteres');
            document.getElementById("nombre").style.backgroundColor = "red";
        }
    }
    else{
        errores.push("El nombre no puede estar vacio");
        document.getElementById("nombre").style.backgroundColor = "red";
    }
    

    //////////////////////////////////   Comprobar categorias   //////////////////////////////////

    let categorias = document.getElementsByName('categoria');
    let pulsada = false;
    let categoriaValor = "";
    for (let categoria of categorias) {
        if (categoria.checked) {
            pulsada = true;
            categoriaValor = categoria.value;
            document.getElementById("cat").style.backgroundColor = "white";
        }
    }

    if(!pulsada){
        errores.push("La categoria no puede estar vacia");
        document.getElementById("cat").style.backgroundColor = "red";
    }


     //////////////////////////////////   Comprobar categorias   //////////////////////////////////

    let patronContrasena = /^[.,][^0-9]*[Ññ][^DdEeLlEeTt]*.{4,10}$/;

    let contrasena = document.getElementById("contrasena").value;

    if(contrasena !== ""){
        if(patronContrasena.test(contrasena)){
            document.getElementById("contrasena").style.backgroundColor = "white";
        }
        else{
            errores.push('La contraseña no cumple con los parametros');
            document.getElementById("contrasena").style.backgroundColor = "red";
        }
    }
    else{
        errores.push("La contraseña no puede estar vacia");
        document.getElementById("contrasena").style.backgroundColor = "red";
    }

    
    /////////////////////////////////   Se imprimen los errores  /////////////////////////////////
    if(errores.length > 0){
        document.getElementById("errores").innerHTML = errores.join("<br>");
    }else{
        document.getElementById("errores").innerHTML = `<b>Nombre :</b> ${document.getElementById("nombre").value} <br> <b>Categoria :</b> ${categoriaValor} <br> <b>Contraseña :</b> ${document.getElementById("contrasena").value}`; 
        document.getElementById("nom").style.backgroundColor = "green";
        document.getElementById("cat").style.backgroundColor= "green";
        document.getElementById("con").style.backgroundColor = "green";

    }
    
}
