
// Función 1:
function multiplicar(a, b) {
    return a * b;
  }

    // Solución 1
      let multiplicar2 = (a,b) => a * b ;
      console.log(multiplicar2(2,4));

// Función 2
  const elevarAlCubo = function (numero) {
    return numero ** 3;
  };

    // Solución 2
    const elevarAlCubo2 = (numero) => numero ** 3;
    console.log(elevarAlCubo2(2));
  
// Función 3
  function calcularPromedio() {
    const numeros = Array.from(arguments);
    const suma = numeros.reduce(function (acc, num) {
      return acc + num;
    }, 0);
    return suma / numeros.length;
  }

    // Solución 3
    let calcularPromedio2 = (...Elementos) =>{ suma = Elementos.reduce((acc,num) => acc+num)}
    console.log(calcularPromedio(1,3));

// Función 4
  const unirPalabras = function (...palabras) {
    return palabras.join(" ");
  };

      // Solución 4
      const unirPalabras2 = (...palabras) => palabras.join(" ");
      console.log(unirPalabras2("Hola" , "Caracola"));
  // Función 5
  function esMultiploDe(num, divisor) {
    return num % divisor === 0;
  }
  
      // Solución 5
      let esMultipleDe2 = (num,divisor) => num % divisor === 0;
      console.log(esMultipleDe2(7,2));