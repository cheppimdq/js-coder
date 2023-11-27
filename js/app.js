const productosContainer = document.getElementById('productos-container'); // ID CONTENEDOR CON JS

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
`;

  productosContainer.appendChild(divProducto);
});
