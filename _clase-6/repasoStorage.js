// repaso de contenidos localstorage, sessionStorage setItem(), getItem(), removeItem(), clear()
//JSON.Stringify() y JSON.parse()

localStorage.setItem('clave', 'valor de la clave guardada en localstorage');

const claveLS = localStorage.getItem('clave');
// console.log({ claveLS });

const hamburguesa = {
    nombre: 'Hamburguesa clásica',
    ingredientes: ['pan', 'carne', 'queso', 'lechuga', 'tomate', 'cebolla'],
    precio: 1000,
    esVegetariana: false,
};

// console.log(hamburguesa);

localStorage.setItem('hamburguesa', JSON.stringify(hamburguesa));

// recuperamos la key en formato string
// const miHamburguesa = localStorage.getItem('hamburguesa');

// JSON.parse convertimos de formato JSON a objeto
const miHamburguesa = JSON.parse(localStorage.getItem('hamburguesa'));

// console.log(miHamburguesa);

const hamburguesas = [
    {
        nombre: 'Hamburguesa clásica',
        ingredientes: ['pan', 'carne', 'queso', 'lechuga', 'tomate', 'cebolla'],
        precio: 1000,
        esVegetariana: false,
    },
    {
        nombre: 'Hamburguesa vegetariana',
        ingredientes: ['pan', 'falafel', 'queso', 'lechuga', 'tomate', 'cebolla'],
        precio: 700,
        esVegetariana: true,
    },
    {
        nombre: 'Hamburguesa doble',
        ingredientes: ['pan', 'doble carne', 'queso', 'lechuga', 'tomate', 'cebolla'],
        precio: 1200,
        esVegetariana: false,
    },
];

// console.log(hamburguesas);

localStorage.setItem('hamburguesas', JSON.stringify(hamburguesas));

// recuperamos la key en formato string
// const misHamburguesas = localStorage.getItem('hamburguesas');

// JSON.parse convertimos de formato JSON a objeto
const misHamburguesas = JSON.parse(localStorage.getItem('hamburguesas'));

// console.log(misHamburguesas);

// localStorage.removeItem('clave');
// localStorage.removeItem('hamburguesa');
// localStorage.removeItem('hamburguesas');

// localStorage.clear();