//Creación de objeto libroGlobal
var libroGlobal = {titulo:"Asi hablo Zaratustra",autor:"Nietzche", disponible : true};

function prestarLibro(){
    let libroLocal = {titulo:"Asi hablo Zaratustra",autor:"Nietzche", disponible : false};
    console.log(libroLocal);
}
prestarLibro();


function buscarLibro(){
    "use strict";
    libroGlobal =  {titulo:"Nuevo valor",autor:"Nietzche", disponible : false};
}
buscarLibro();

//Cambio el valor de libroGlobal
libroGlobal = {titulo:"Nuevo valor 2",autor:"Nietzche", disponible : true};
console.log(libroGlobal);

//creación array constante
let libro1= {titulo:"Juegos del Hambre",autor:"Nicolas Cage", disponible : true};
let libro2 = {titulo:"Juego de tronos",autor:"Gerge Lucas", disponible : true};
const librosDisponibles = [libro1,libro2];
console.log(librosDisponibles);


//imprimo el array antes y despues de añadir un objeto
let libro3 = {titulo:"American Phsyco",autor:"Gerge Lucas", disponible : true};

librosDisponibles.push(libro3);
console.log(librosDisponibles);

function mostrarLibrosDisponibles(libros){
    console.log(libros);
}
mostrarLibrosDisponibles(librosDisponibles);