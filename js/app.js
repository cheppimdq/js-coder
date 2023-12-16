const productosContainer = document.getElementById('productos-container');
const carritoLista = document.getElementById('carrito-lista');
const carritoIcono = document.getElementById('carrito-icono');
const carrito = [];
const totalElement = document.getElementById('total');
const confirmarPedidoBtn = document.getElementById('confirmarPedido');
let totalCompra = 0;
let offcanvas; // Variable para almacenar la instancia del offcanvas

producto.forEach(producto => {
  const divProducto = document.createElement('div');
  divProducto.classList.add('productos-css');

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
    </div>
  `;
  productosContainer.appendChild(divProducto);
});

function abrirCarrito() {
  offcanvas = new bootstrap.Offcanvas(document.getElementById('offcanvasNavbar'));
  offcanvas.show();
}

function cerrarCarrito() {
  offcanvas.hide();
}

function agregarAlCarrito(nombre, precio) {
  const productoEnCarrito = carrito.find(item => item.nombre === nombre);
  if (productoEnCarrito) {
    productoEnCarrito.cantidad++;
  } else {
    carrito.push({ nombre, precio, cantidad: 1 });
  }
  actualizarCarrito();
  abrirCarrito();
}

function quitarDelCarrito(nombre) {
  const productoEnCarritoIndex = carrito.findIndex(item => item.nombre === nombre);
  if (productoEnCarritoIndex !== -1) {
    const productoEnCarrito = carrito[productoEnCarritoIndex];
    if (productoEnCarrito.cantidad > 1) {
      productoEnCarrito.cantidad--;
    } else {
      carrito.splice(productoEnCarritoIndex, 1);
      cerrarCarrito();
    }
    actualizarCarrito();
  }
}

function restarCantidad(nombre) {
  const productoEnCarrito = carrito.find(item => item.nombre === nombre);
  if (productoEnCarrito && productoEnCarrito.cantidad > 1) {
    productoEnCarrito.cantidad--;
  } else {
    const productoEnCarritoIndex = carrito.findIndex(item => item.nombre === nombre);
    carrito.splice(productoEnCarritoIndex, 1);
    cerrarCarrito();
  }
  actualizarCarrito();
}

function sumarCantidad(nombre) {
  const productoEnCarrito = carrito.find(item => item.nombre === nombre);
  if (productoEnCarrito) {
    productoEnCarrito.cantidad++;
    actualizarCarrito();
  }
}

function actualizarCarrito() {
  carritoLista.innerHTML = '';
  totalCompra = 0;
  carrito.forEach(producto => {
    const liCarrito = document.createElement('li');
    liCarrito.innerHTML = `
      ${producto.nombre} - $${producto.precio} 
      <button onclick="restarCantidad('${producto.nombre}')">-</button>
      x${producto.cantidad}
      <button onclick="sumarCantidad('${producto.nombre}')">+</button>
    `;
    carritoLista.appendChild(liCarrito);
    totalCompra += producto.precio * producto.cantidad;
  });

  totalElement.style.display = carrito.length > 0 ? 'block' : 'none';

  actualizarTotal();

  if (carrito.length > 0) {
    carritoIcono.classList.remove('bi-bag');
    carritoIcono.classList.add('bi-bag-plus');
  } else {
    carritoIcono.classList.remove('bi-bag-plus');
    carritoIcono.classList.add('bi-bag');
  }
}

function actualizarTotal() {
  totalElement.textContent = totalCompra.toFixed(2);
}

function confirmarPedido() {
  let resumenPedido = 'Broders, les encargo los siguientes productos:\n\n';

  carrito.forEach(producto => {
    resumenPedido += `${producto.nombre} - $${producto.precio} x${producto.cantidad}\n`;
  });

  resumenPedido += `\nTotal de productos: $${totalCompra.toFixed(2)}`;

  const mensajeWhatsApp = encodeURIComponent(resumenPedido);
  const numeroWhatsApp = '5492215718347';
  const enlaceWhatsApp = `https://api.whatsapp.com/send?phone=${numeroWhatsApp}&text=${mensajeWhatsApp}`;
  window.open(enlaceWhatsApp, '_blank');
}

actualizarCarrito();
