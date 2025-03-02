function mayorQue(n) {
    return (m) => m > n;
}

const mayorQueVeinte = mayorQue(20); // (m) => m > 20

// console.log(mayorQueVeinte(25)); // (25) => 25 > 20 // true
// console.log(mayorQueVeinte(10)); // (10) => 10 > 20 // false

function porCadaUno(arr, fnCallback) {
    for (let i = 0; i < arr.length; i++) {
        fnCallback(arr[i]);
    }
}

function saludo(nombre) {
    alert('¡Hola ' + nombre + '!');
}

const nombres = ['Martin', 'Pedro', 'Ernesto'];
const numeros = [10, 20, 30, 40];
const duplicados = [];

// porCadaUno(nombres, console.log);
// porCadaUno(nombres, saludo);
// porCadaUno(numeros, console.log);

porCadaUno(numeros, (el) => duplicados.push(el * 2));

// console.log(duplicados);

const cursos = [
    {
        nombre: 'Desarrollo Web',
        precio: 10000,
        rangoPrecio: 'Menor o igual a 15000',
    },
    {
        nombre: 'Javascript',
        precio: 15000,
        rangoPrecio: 'Menor o igual a 15000',
    },
    { nombre: 'Vue JS', precio: 17000, rangoPrecio: 'Entre 15001 y 25000' },
    { nombre: 'Angular JS', precio: 22000, rangoPrecio: 'Entre 15001 y 25000' },
    { nombre: 'React JS', precio: 25000, rangoPrecio: 'Entre 15001 y 25000' },
    { nombre: 'Node JS', precio: 30000, rangoPrecio: 'Mayor a 25000' },
    { nombre: 'Java', precio: 35000, rangoPrecio: 'Mayor a 25000' },
    { nombre: 'Python', precio: 32000, rangoPrecio: 'Mayor a 25000' },
    { nombre: 'C#', precio: 38000, rangoPrecio: 'Mayor a 25000' },
];

// forEach se utiliza para ejecutar una función en cada elemento del arreglo
// cursos.forEach((element) => {
// element.precio = element.precio * 1.21;
// console.log(element);
// console.log(element.nombre);
// console.log(element.precio);
// });

// find  Devuelve el valor del primer elemento que cumple con la condición o undefined si ningún elemento cumple con la misma.
const cursoExiste1 = cursos.find((el) => el.nombre === 'Desarrollo Web');
const cursoExiste2 = cursos.find((el) => el.nombre === 'Ruby');
const cursoExiste3 = cursos.find((el) => el.nombre === 'Desarrollo');
const cursoExiste4 = cursos.find((el) => el.nombre.includes('Desarrollo'));

// console.log(cursoExiste1);
// console.log(cursoExiste2);
// console.log(cursoExiste3);
// console.log(cursoExiste4);

// filter Devuelve un nuevo arreglo que contiene solo los elementos del arreglo original que cumplen la condición, en caso contrario devuelven un array vacío
const filtro1 = cursos.filter((el) => el.nombre.includes('JS'));
const filtro2 = cursos.filter((el) => el.nombre.includes('Js'));
const filtro3 = cursos.filter((el) => el.precio > 22000);
const filtro4 = cursos.filter((el) => el.precio <= 22000);

// console.log(filtro1);
// console.log(filtro2);
// console.log(filtro3);
// console.log(filtro4);

// some Devuelve true si un elemento dentro del array cumple la condición, en caso contrario devuelve false
const existeCurso1 = cursos.some((el) => el.nombre === 'Node JS');
const existeCurso2 = cursos.some((el) => el.nombre === 'Node');
const existeCurso3 = cursos.some((el) => el.nombre.includes('Node'));

// console.log({ existeCurso1 });
// console.log({ existeCurso2 });
// console.log({ existeCurso3 });

// copiando array cursos con todos sus elementos
const cursos2 = cursos.slice();
// const cursos2 = Array.from(cursos);

// ordenar alfabéticamente de forma ascendente
// cursos2.sort((a, b) => {
//     if (a.nombre > b.nombre) {
//         return 1;
//     } else if (a.nombre < b.nombre) {
//         return -1;
//     } else {
//         return 0;
//     }
// });

// ordenar alfabéticamente de forma descendente
// cursos2.sort((a, b) => {
//     if (a.nombre < b.nombre) {
//         return 1;
//     } else if (a.nombre > b.nombre) {
//         return -1;
//     } else {
//         return 0;
//     }
// });

// ordenando los valores númericos del array creando un función de comparación
// La función de comparación toma dos elementos del array (a y b) y devuelve un valor negativo si a debe colocarse antes que b, un valor positivo si b debe colocarse antes que a, o cero si no se requiere ningún cambio en el orden.

// orden ascendente
cursos2.sort((a, b) => a.precio - b.precio);

// orden descendente
// cursos2.sort((a, b) => b.precio - a.precio);

// console.log(cursos2);

// método map se utiliza para crear un nuevo arreglo a partir de otro arreglo existente. Se puede aplicar una función de transformación a los elementos del nuevo array devuelto

const precioActualizado = cursos2.map((curso) => {
    return {
        nombre: curso.nombre,
        // precio: curso.precio + 2000, // aumentamos el precio en 2000
        precio: curso.precio * 1.1, // aumentamos el precio el 10%
        // precio: (Math.round(curso.precio * 1.1 * 100) / 100).toFixed(2), // especificamos dos lugares luego del punto decimal
        rangoPrecio: curso.rangoPrecio,
    };
});

// console.log(precioActualizado);

const total = cursos2.reduce((total, curso) => total + curso.precio, 0);
// console.log(total);

// solución alternativa para agrupar()
const grupos = {};

cursos2.forEach((curso) => {
    const { rangoPrecio } = curso;

    // si el objeto grupos no tiene la propiedad "rangoPrecio" le agregamos la propiedad y le asignamos a su valor un array vacío
    if (!grupos[rangoPrecio]) {
        grupos[rangoPrecio] = [];
    }

    // agregamos el curso dentro de la propiedad "rangoPrecio"
    grupos[rangoPrecio].push(curso);
});

console.log(grupos);

// microdesafios
// const numeros = [3, 9, 5, 2, 8, 7];
// const tieneNumeroPar = numeros.find((num) => num % 2 === 0);
// console.log(tieneNumeroPar);

// const nombres = ['Ana', 'Juan', 'María', 'Luisa', 'Pedro', 'Pablo'];
// const nombresLargos = nombres.filter((nombre) => nombre.length > 5);
// console.log(nombresLargos);

// const fahrenheitTemps = [32, 68, 86, 104, 212];
// const celsiusTemps = fahrenheitTemps.map((fahrenheit) => ((fahrenheit - 32) * 5) / 9);
// console.log(celsiusTemps);