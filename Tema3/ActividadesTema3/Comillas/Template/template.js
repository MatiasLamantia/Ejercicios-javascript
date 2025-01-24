/*          He intentado que se asignen los espacios  adaptados a el maximo pero no he podido 
let nombre = prompt("Introduzca el nombre");
let email = prompt("Introduzca el email");
let ciudad = prompt("Introduzca el ciudad");

    function salidaCorrecta(){
    let ancho = []
    let nombreAncho = "| Nombre: "+nombre;
    let emailAncho = "| Email: "+email;
    let ciudadAncho = "| Ciudad: "+ciudad;




    ancho[0] = nombreAncho.length;
    ancho[1] = emailAncho.length;
    ancho[2] = ciudadAncho.length;

    let anchoMaximo = Math.max(...ancho);

    let salida = [];

    salida[0] = nombreAncho.padEnd((anchoMaximo- nombreAncho.length)+10) + "|";
    salida[1] = emailAncho.padEnd((anchoMaximo - emailAncho.length) + 10) + "|";
    salida[2] = ciudadAncho.padEnd((anchoMaximo - ciudadAncho.length) + 10) + "|";

    return salida;
    }


let salida = salidaCorrecta();
console.log(`
-----------------------------------
|        Tarjeta de Usuario       |
-----------------------------------
${salida[0]}
${salida[1]}
${salida[2]}
-----------------------------------
`);

*/

let nombre = prompt("Introduzca el nombre");
let email = prompt("Introduzca el email");
let ciudad = prompt("Introduzca el ciudad");

console.log(`
-----------------------------------

|        Tarjeta de Usuario       |

-----------------------------------

| Nombre: ${nombre}               |

| Email: ${email}                 |

| Ciudad: ${ciudad}               |

-----------------------------------
`);