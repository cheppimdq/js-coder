// OBJETO LITERAL

const persona = {
    nombre: 'Juan',
    edad: 25,
    direccion: 'Mexico 367',
};

console.log(persona);
console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.direccion);

function Personas(objetoLiteral) { // clases van con mayuscula
    this.nombre = objetoLiteral.nombre; 
    this.edad = objetoLiteral.edad;
    this.direccion = objetoLiteral.direccion;

/*     FUNCION ANONIMA
    this.infoPersona = function() {
        console.log('Nombre: ' + this.nombre + '\nEdad: ' + this.edad + '\nDireccion: ' + this.direccion)
    }; */

    this.infoPersona = () => {
        console.log('Nombre: ' + this.nombre + '\nEdad: ' + this.edad + '\nDireccion: ' + this.direccion)
    };
};

const persona1 = new Personas(persona);
console.log(persona1);
persona1.infoPersona();

const persona2 = new Personas({nombre:'Pablo', edad:35, direccion:'Cabrera 546'});
console.log(persona2);

// AGREGAR INFO DESDE PROMPT
function Personal(apellido, dire, peso){
};

let apellido, dire, peso;

function ingresarDatos() {
    apellido = prompt('ingrese su nombre')
    dire = prompt('ingrese su direccion')
    peso = prompt('ingrese su peso')

    const persona3 = new Personal(apellido, dire, peso);
    console.log(persona3)
}

ingresarDatos();



// // objeto literal
// const persona = {
//     nombre: 'Juan',
//     apellido: 'Gonzales',
//     edad: 25,
//     direccion: 'Parque Patricios 4000',
// };

// // console.log(persona);
// // console.log(persona.nombre);
// // console.log(persona.apellido);
// // console.log(persona.edad);
// // console.log(persona.direccion);

// // console.log(persona['nombre']);
// // console.log(persona['apellido']);
// // console.log(persona['edad']);
// // console.log(persona['direccion']);

// // función constructora de objetos usa objetos literales
// // function Persona(objetoLiteral) {
// // 	this.nombre = objetoLiteral.nombre;
// // 	this.apellido = objetoLiteral.apellido;
// // 	this.edad = objetoLiteral.edad;
// // 	this.direccion = objetoLiteral.direccion;
// // }

// // const persona1 = new Persona(persona);
// // const persona2 = new Persona({ nombre: 'Pablo', apellido: 'Martínez', edad: 30, direccion: 'Malfada 3000' });

// // console.log(persona1);
// // console.log(persona2);

// // función constructora de objetos usan variables como parametros
// // function Persona(nombre, apellido, edad, direccion) {
// // 	this.nombre = nombre;
// // 	this.apellido = apellido;
// // 	this.edad = edad;
// // 	this.direccion = direccion;

// // agregamos una función anónima
// // this.infoPersona = function () {
// // 	console.log('Nombre : ' + this.nombre + '\nApellido : ' + this.apellido + '\nEdad : ' + this.edad + '\nDirección : ' + this.direccion);
// // };

// // agregamos una arrow function
// // 	this.infoPersona = () => {
// // 		console.log('Nombre : ' + this.nombre + '\nApellido : ' + this.apellido + '\nEdad : ' + this.edad + '\nDirección : ' + this.direccion);
// // 	};
// // }

// // const persona1 = new Persona('Juan', 'Gonzales', 25, 'Parque Patricios 4000');
// // console.log(persona1);

// // let nombre, apellido, edad, direccion;

// // function ingresarDatos() {
// // 	nombre = prompt('Ingrese su nombre:');
// // 	apellido = prompt('Ingrese su apellido:');
// // 	edad = Number(prompt('Ingrese su edad:'));
// // 	direccion = prompt('Ingrese su direccion:');

// // 	const persona1 = new Persona(nombre, apellido, edad, direccion);
// // 	console.log(persona1);

// // 	persona1.infoPersona();
// // }

// // ingresarDatos();

// // Creación de Clases
// // class Persona {
// // 	constructor(nombre, apellido, edad, direccion) {
// // 		this.nombre = nombre;
// // 		this.apellido = apellido;
// // 		this.edad = edad;
// // 		this.direccion = direccion;
// // 	}

// // creación de método
// // 	infoPersona() {
// // 		console.log('Nombre : ' + this.nombre + '\nApellido : ' + this.apellido + '\nEdad : ' + this.edad + '\nDirección : ' + this.direccion);
// // 	}
// // }

// // const persona1 = new Persona('Pedro', 'Rodríguez', 25, 'Parque Patricios 4550');
// // const persona2 = new Persona('Federico', 'Rodríguez', 45, 'Parque Patricios 8090', 88997766);
// // console.log(persona1);

// // persona1.infoPersona();
// // persona2.infoPersona();

// // (Propiedades privadas) la convención es utilizar un guion bajo antes del nombre de la propiedad para indicar que es privada y que no se debe acceder directamente desde fuera de la clase. Sin embargo, es importante tener en cuenta que esta es solo una convención y que la propiedad aún es accesible desde fuera de la clase.

// class Persona {
//     // Propiedades estaticas
//     static id = 0;

//     constructor(nombre, apellido) {
//         // propiedad privada
//         let _dni = '';

//         // propiedades publicas
//         // this.id = ++Persona.id;
//         this.nombre = nombre;
//         this.apellido = apellido;

//         // método público para acceder a la propiedad privada
//         this.getDni = function () {
//             if (_dni !== '') {
//                 return _dni;
//             } else {
//                 return (_dni = 'Vacio');
//             }
//         };

//         // método público para modificar la propiedad privada
//         this.setDni = function (nuevoDni) {
//             _dni = nuevoDni;
//         };
//     }

//     // método que contiene toda la información de Persona
//     infoPersona() {
//         console.log('ID : ' + this.id + '\nNombre : ' + this.nombre + '\nApellido : ' + this.apellido + '\nDNI : ' + this.getDni());
//     }
// }

// const persona1 = new Persona('Pedro', 'Rodríguez');
// persona1.setDni('23456789');

// const persona2 = new Persona('Juan', 'Lopéz');
// persona2.setDni('22334455');

// const persona3 = new Persona('Maria', 'Gonzales');
// persona3.setDni('66554433');

// persona1.infoPersona();
// persona2.infoPersona();
// persona3.infoPersona();

// // modificando las propiedades de persona1
// persona1.nombre = 'Yoelys';
// persona1.apellido = 'Figueredo';
// persona1.infoPersona();

// console.log('Propiedad estática de persona : ' + Persona.id); // Persona.id es una propiedad estatica de la clase

// // Las propiedades estáticas son aquellas que pertenecen a la clase o al objeto en sí, mientras que las propiedades dinámicas son aquellas que se agregan al objeto durante la ejecución del programa. Las propiedades estáticas se comparten entre todas las instancias de la clase, mientras que las propiedades dinámicas son únicas para cada instancia del objeto. Además, las propiedades estáticas pueden ser accedidas directamente a través de la clase, mientras que las propiedades dinámicas solo pueden ser accedidas a través de una instancia del objeto.

// const idsPersonas = {},
//     personas = [persona1, persona2, persona3];

// console.log(personas);

// personas.forEach((persona, index) => (idsPersonas[`id_${index + 1}`] = persona));

// console.log(idsPersonas);

