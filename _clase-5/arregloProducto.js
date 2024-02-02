

// arreglo de productos
const productos = [
    { id: 1, nombre: 'arroz', precio: 90 },
    { id: 2, nombre: 'pan', precio: 30 },
    { id: 3, nombre: 'agua', precio: 50 },
    { id: 4, nombre: 'porotos', precio: 60 },
    { id: 5, nombre: 'carne', precio: 200 },
];

// console.log(productos);

// creamos una función para guardar los productos en localStorage
// const guardarLocal = (clave, valor) => localStorage.setItem(clave, valor);

// guardamos los productos de a uno con for ... of
// for (const producto of productos) {
// 	guardarLocal(producto.id, JSON.stringify(producto));
// }

// Guardamos el array completo en localstorage
localStorage.setItem('carrito', JSON.stringify(productos));

// obtenemos los productos de localStorage
let carritoCompras = JSON.parse(localStorage.getItem('carrito'));

// console.log(carritoCompras);

// Ejemplo aplicado
class Producto {
    static id = 0;

    constructor(obj) {
        this.id = ++Producto.id;
        this.nombre = obj.nombre.toUpperCase();
        this.precio = obj.precio;
    }

    agregarIva() {
        this.precio = Number((this.precio * 1.21).toFixed(2));
    }
}

const productosAlmacenados = JSON.parse(localStorage.getItem('carrito'));
const listaProductos = [];

// iteramos para tranformar cada uno de sus objetos en productos de la clase
for (const objProducto of productosAlmacenados) {
    listaProductos.push(new Producto(objProducto));
}

// agregamos el iva a los productos
for (const producto of listaProductos) {
    producto.agregarIva();
}

// console.log(listaProductos);

let usuario;
let usuarioEnLS = JSON.stringify(localStorage.getItem('usuario'));

// console.log(usuario);

// Si había algo almacenado, lo recupero. Si no le pido un ingreso
if (usuarioEnLS !== 'null') {
    usuario = usuarioEnLS;
} else {
    usuario = prompt('Ingrese su nombre de usuario');
    localStorage.setItem('usuario', usuario);
}

// console.log(usuario);
