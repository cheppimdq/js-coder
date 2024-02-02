let numero1 = parseInt (prompt('ingrese el valor 1')); // parseInt convierte valor de cadena en numerico
let numero2 = parseInt (prompt('ingrese el valor 2')); // parseFloat convierte en una cadena y devuelve un número de coma flotante

let resultadoSuma, resultadoResta, resultadoMultiplicacion;

console.log(numero1);
console.log(typeof numero1);
console.log(numero2);
console.log(typeof numero2)

resultadoSuma = numero1 + numero2;
resultadoResta = numero1 - numero2;
resultadoMultiplicacion = numero1 * numero2;

console.log("Si los sumo son " + resultadoSuma);
console.warn("En cambio si resto da " + resultadoResta);
console.error("y su multiplicacion es " + resultadoMultiplicacion);