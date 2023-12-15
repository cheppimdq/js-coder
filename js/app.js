const productosContainer = document.getElementById('productos-container'); // ID CONTENEDOR CON JS
const carritoLista = document.getElementById('carrito-lista');
const carrito = [];


producto.forEach(producto => {
  const divProducto = document.createElement('div');
  divProducto.classList.add('productos-css'); // CLASS CSS

divProducto.innerHTML = `
  <div>
      <img class="foto-articulo" src="${producto.img || './ruta/por/defecto.jpg'}" alt="Foto ilustrativa del producto.">
  </div>
  <div>
      <h3>${producto.nombre}</h3>
      <h4>${producto.usos}</h4>
      <p>Composición: ${producto.composicion}</p>
      <p>Almacenamiento: ${producto.almacenamiento}</p>
      <p>Precauciones: ${producto.precauciones}</p>
      <p>Precio: $${producto.precio}</p>
      <button onclick="agregarAlCarrito('${producto.nombre}', ${producto.precio})">Agregar al carrito</button>
      <button onclick="quitarDelCarrito('${producto.nombre}')">Quitar del carrito</button>
  </div>
`;

  productosContainer.appendChild(divProducto);
});


// Función para agregar un producto al carrito
function agregarAlCarrito(nombre, precio) {
  const productoEnCarrito = carrito.find(item => item.nombre === nombre);

  if (productoEnCarrito) {
    // Si el producto ya está en el carrito, incrementa la cantidad
    productoEnCarrito.cantidad++;
  } else {
    // Si el producto no está en el carrito, agrégalo con cantidad 1
    carrito.push({ nombre, precio, cantidad: 1 });
  }

  actualizarCarrito();
}

// Función para quitar un producto del carrito
function quitarDelCarrito(nombre) {
  const productoEnCarritoIndex = carrito.findIndex(item => item.nombre === nombre);

  if (productoEnCarritoIndex !== -1) {
    const productoEnCarrito = carrito[productoEnCarritoIndex];

    if (productoEnCarrito.cantidad > 1) {
      // Si hay más de un producto, disminuye la cantidad
      productoEnCarrito.cantidad--;
    } else {
      // Si solo hay un producto, quítalo del carrito
      carrito.splice(productoEnCarritoIndex, 1);
    }

    actualizarCarrito();
  }
}

// Función para actualizar la visualización del carrito
function actualizarCarrito() {
  // Borra la lista actual
  carritoLista.innerHTML = '';

  // Agrega los productos actualizados al carrito
  carrito.forEach(producto => {
    const liCarrito = document.createElement('li');
    liCarrito.textContent = `${producto.nombre} - $${producto.precio} x${producto.cantidad}`;
    carritoLista.appendChild(liCarrito);
  });
}

