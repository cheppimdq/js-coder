let nombre = prompt('Ingrese su nombre');
console.log(nombre);
console.log(typeof nombre);

let edad = prompt('Ingrese su edad');
console.log(edad);
console.log(typeof edad);

let valorBoolean = true; // false
console.log(valorBoolean);
console.log(typeof valorBoolean);

let esMayorDeEdad = edad >= 18;

let mensaje1 = 'Hola, ' + nombre + '. ';
let mensaje2 = 'Tienes ' + edad + ' años. ';
let mensaje3 = '¿Eres mayor de edad? ' + esMayorDeEdad;

let unirMensaje = (mensaje1 + mensaje2 + mensaje3);

console.log(unirMensaje); // console.log('Mostramos un mensaje desde console.log');
console.warn(unirMensaje); // console.warn('Esto es un mensaje de advertencia con console.warn');
console.error(unirMensaje); // console.error('Mensaje de error con console.error');

alert(unirMensaje)

// function solicitarNombre() {
// 	let nombreIngresado = prompt('Ingresar nombre');
// 	alert('El nombre ingresado es ' + nombreIngresado);
// }