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
  </div>
  <div class="botonera-articulo">
    <button onclick="agregarAlCarrito('${producto.nombre}', ${producto.precio})">Agregar al carrito</button>
    <button onclick="quitarDelCarrito('${producto.nombre}')">Quitar del carrito</button>
  </div>
`;
  productosContainer.appendChild(divProducto);
});


// AGREGAR
function agregarAlCarrito(nombre, precio) {
  const productoEnCarrito = carrito.find(item => item.nombre === nombre);
  if (productoEnCarrito) {
    productoEnCarrito.cantidad++;
  } else {
    carrito.push({ nombre, precio, cantidad: 1 });
  }
  actualizarCarrito();
}

// SACAR
function quitarDelCarrito(nombre) {
  const productoEnCarritoIndex = carrito.findIndex(item => item.nombre === nombre);
  if (productoEnCarritoIndex !== -1) {
    const productoEnCarrito = carrito[productoEnCarritoIndex];
    if (productoEnCarrito.cantidad > 1) {
      productoEnCarrito.cantidad--;
    } else {
      carrito.splice(productoEnCarritoIndex, 1);
    }
    actualizarCarrito();
  }
}

// ACTUALIZAR
function actualizarCarrito() {
  carritoLista.innerHTML = '';
  carrito.forEach(producto => {
    const liCarrito = document.createElement('li');
    liCarrito.textContent = `${producto.nombre} - $${producto.precio} x${producto.cantidad}`;
    carritoLista.appendChild(liCarrito);
  });
}

// TOTAL
const totalElement = document.getElementById('total');
const confirmarPedidoBtn = document.getElementById('confirmarPedido');
let totalCompra = 0;
function actualizarTotal() {
  totalElement.textContent = totalCompra.toFixed(2);
}

// CONFIRMAR
function confirmarPedido() {
  const resumenPedido = `Broders les encargo \n\nTotal: $${totalCompra.toFixed(2)}`;
  const mensajeWhatsApp = encodeURIComponent(resumenPedido);
  const numeroWhatsApp = '5492215718347';
  const enlaceWhatsApp = `https://api.whatsapp.com/send?phone=${numeroWhatsApp}&text=${mensajeWhatsApp}`;
  window.open(enlaceWhatsApp, '_blank');
}