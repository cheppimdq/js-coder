// guardar info del usuario en local storage

localStorage.setItem('mensaje', 'Bienvenido a local storage');

localStorage.setItem('confirmacion', true);

localStorage.setItem('cantidadCosas', 20);

const mensaje = localStorage.getItem('mensaje');
const confirmacion = localStorage.getItem('confirmacion') === 'true';
const cantidadCosas = Number (localStorage.getItem('cantidadCosas'));

console.log(mensaje);
console.log(typeof mensaje)

console.log(confirmacion);
console.log(typeof confirmacion)

console.log(cantidadCosas);
console.log(typeof cantidadCosas)

// sesion storage

sessionStorage.setItem('numerosRandom', [10,20,30]);
sessionStorage.setItem('valorBoolean', false);
sessionStorage.setItem('email', 'cheppimdp@gmail.com');

let numerosRandom = sessionStorage.getItem('numerosRandom').split(',');
numerosRandom = numerosRandom.map((numero) => + numero)

console.log(numerosRandom);
console.log(typeof numerosRandom)

let valorBoolean = sessionStorage.getItem('valorBoolean') === 'true';
console.log(valorBoolean);
console.log(typeof valorBoolean)

let email = sessionStorage.getItem('email');
console.log(email);
console.log(typeof email)

// eliminar valores

localStorage.removeItem('mensaje');
sessionStorage.clear();



// storage (localStorage y sessionStorage)

// Guardar un valor en LocalStorage:
// localStorage.setItem('mensaje', 'Bienvenido a localstorage.');
// localStorage.setItem('confirmacion', true);
// localStorage.setItem('cantidadEstudiantes', 50);

// const mensaje = localStorage.getItem('mensaje');
// const confirmacion = localStorage.getItem('confirmacion') === 'true'; // convertier en Boolean()
// const cantidadEstudiantes = Number(localStorage.getItem('cantidadEstudiantes')); // convertier en Number()

// console.log(mensaje);
// console.log(typeof mensaje);
// console.log(confirmacion);
// console.log(typeof confirmacion);
// console.log(cantidadEstudiantes);
// console.log(typeof cantidadEstudiantes);

// const valorNumerico = 100;
// const valorBoolean = true;
// console.log(valorBoolean);
// console.log(valorNumerico);

// sessionStorage.setItem('arregloNumerico', [10, 20, 30, 40]);
// sessionStorage.setItem('valorBoolean', false);
// sessionStorage.setItem('email', 'yoelys@mail.com');

// let arregloNumerico = sessionStorage.getItem('arregloNumerico').split(',');
// arregloNumerico = arregloNumerico.map((numero) => +numero);
// const valorBoolean = sessionStorage.getItem('valorBoolean') === 'true';
// const email = sessionStorage.getItem('email');

// console.log(arregloNumerico);
// console.log(typeof arregloNumerico); // objeto
// console.log(valorBoolean);
// console.log(typeof valorBoolean); // boolean
// console.log(email);
// console.log(typeof email); // string

// recorrer el storage
// for (let i = 0; i < localStorage.length; i++) {
// 	let clave = localStorage.key(i);
// 	let valor = localStorage.getItem(clave);
// 	console.log({ clave }, { valor });
// }

// for (let i = 0; i < sessionStorage.length; i++) {
// 	let clave = sessionStorage.key(i);
// 	let valor = sessionStorage.getItem(clave);
// 	console.log({ clave }, { valor });
// }

// Eliminar datos del storage
// localStorage.removeItem('confirmacion');
// sessionStorage.removeItem('valorBoolean');

// Eliminar toda la información de localstorage y sessionStorage
// localStorage.clear();
// sessionStorage.clear();

// localStorage.numeroPrueba = 5;
// alert((localStorage.numeroPrueba = 5));

// let clave = 'toSting'; // no se pueden crear claves con palabras reservadas del lenguaje
// localStorage.clave;
// alert(localStorage.clave);

// localStorage.setItem('person', JSON.stringify(persona));

// let variableFormatoJson = '{"nombre":"Juan","apellido":"Gonzales","edad":25,"direccion":"Parque Patricios 4000"}';
// const copiaPersona = JSON.parse(variableFormatoJson);

// console.log(variableFormatoJson);
// console.log(copiaPersona);