//Carrito de compras del medio del menú de navegación
const carrito = document.querySelector(".carrito");

//Totales carrito que se muestra en el menú de navegación arriba a la derecha
const totalesCarrito = document.querySelector(".totales-carrito");

//Seccion Productos
const seccionProductos = document.getElementById("productos"); //Sección productos

//Formulario Modal carrito de compras
const modal = document.querySelector(".modal"); //Modal Carrito de Compras
const modalContainer = document.querySelector(".modal-container"); //Container carrito de compras
const modalContainerTitulo = document.querySelector(".modal-container-titulo"); //Título carrito de compras
const cerrarModal = document.querySelector(".modal-close"); //Cerrar carrito de compras
const vaciarCarrito = document.querySelector("#vaciar-carrito"); //Botón para vaciar carrito de compras
const finalizarCompra = document.querySelector("#finalizar-compra"); //botón para finalizar compra

//Formulario Modal para finalizar la compra - Datos personales y forma de pago
const modalFinCompra = document.querySelector(".modal-fincompra"); //Modal Finalizar Compra
const cerrarFinCompra = document.querySelector(".close-fincompra"); //Cerrar modal finalización compra
const volverAlCarrito = document.querySelector(".volver-carrito"); //Link para volver al carrito cuando se está en el modal de finalización de la compra
const selectFPago = document.querySelector(".formapago"); //dropdown para seleccionar las opciones de pago
const finalizarPago = document.querySelector(".finalizar-pago"); //botón para realizar el pago


//-------------------------------------- OTRAS VARIABLES Y CONSTANTES ------------------------------------------------------
export const totalProductos = [...bdProductos]; //base de datos de productos en un array
let miCarrito = [];
let totalFinalCarrito = 0;
let cantCuota = 0;
let importeCuota = 0;
let blnModalFinalizarCompra = false;

//------------------------------------------------------------------- EXPRESIONES REGULARES ----------------------------------------------
const regexEMail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/; //para validar correo electrónico
const regexApellidoNombre = /^[A-Za-zÁÉÍÓÚÑáéíóúñ\s'-]+$/; //para validar ingreso de Apellido y Nombre

//----------------------------------------------------------------------------- DECLARACION DE CLASES ----------------------------------------------------
//clase del carrito de compra
class CarritoCompra {
    constructor(codigo, nombre, cantidad, precio) { //me resulta manejar más fácil así al constructor que utilizando desestructuración
        this.codigo = codigo;
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.precio = precio;
    }
    //Se declaran las funciones get y set que se van a utilizar
    getCodigo = function () {
        return this.codigo;
    }
    getNombre = function () {
        return this.nombre;
    }
    getCantidad = function () {
        return this.cantidad;
    }
    getPrecio = function () {
        return this.precio;
    }
    setCantidad = function (cantidad) {
        this.cantidad = cantidad;
    }
};

//-----------------------------------------------------------------------------  D E C L A R A C I O N   D E   F U N C I O N E S  ----------------------------------------------------

//* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *  F U N C I O N E S   C O M U N E S   A   T O D O S   * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
//Lee la clave "micarrito" del localStorage. La clave "micarrito" contiene el total de productos agregado al carrito que todavía no se finalizó o concretó la compra.
export const cargaCarritoLS = () => {
    const micarritoLS = JSON.parse(localStorage.getItem('micarrito')) || []; //se hace la lectura del localstorage para ver si el carrito tiene contenido
    //Instancia todos los registros del carrito
    micarritoLS.forEach((el) => {
        miCarrito.push(new CarritoCompra(el.codigo, el.nombre, el.cantidad, el.precio)); //Se agrega el producto en el carrito
    }); -carrito - 1
    actualizaTotalesCarrito(miCarrito); //actualiza total carrito

    //Verifica is existe algún usuario logueado en la clave "Auth" del localStorage
    if (leeLogin().nombre) {
        nombreUser.textContent = leeLogin().nombre; //asigna el nombre del usuario a la etiqueta a la derecha del ícono de login
        cerrarSesion.classList.add('cerrar-sesion'); //muetra párrafo de Cierre de Sesión
        cambiaColorIconoLogin('user-login-on','user-login-off');
    }
    else {
        nombreUser.textContent = "Ingresar";
        cerrarSesion.classList.remove('cerrar-sesion');
        cambiaColorIconoLogin('user-login-off','user-login-on');
    };
};

//Actualiza la clave "micarrito" en el localStorage
/**
 * @param {Object} miCarrito => recibe el objeto miCarrito que contiene todos los productos agregados al mismo 
 */
const seteaCarritoLS = (miCarrito) => {
    localStorage.setItem("micarrito", JSON.stringify(miCarrito));
    actualizaTotalesCarrito(miCarrito); //actualiza total carrito
};

//Lee la clave "isLogin" del localStorage. Esta clave contiene el valor "true" si el usuario ya está logueado o "false" de lo contrario.
const leeLogin = () => {
    return JSON.parse(localStorage.getItem('Auth')) || { isLogin: false, nombre: "", email: "" };
};

//actualiza Totales del Carrito en el menú superior a la derecha
/**
 * @param {Object} miCarrito => recibe el objeto miCarrito que contiene todos los productos agregados al mismo 
 */
const actualizaTotalesCarrito = (miCarrito) => {
    const totalProductos = document.querySelector(".productos");
    const totalItems = document.querySelector(".items");
    const totalImporte = document.querySelector(".importe");
    //Items y Total del subtotal del carrito de compras
    const totalItemsSubTotalCarrito = document.querySelector(".modal-subtotal-carrito-2");
    const totalImporteSubTotalCarrito = document.querySelector(".modal-subtotal-carrito-3");
    const totalProductosSubTotalCarrito = document.querySelector(".modal-subtotal-carrito-1");

    //obtiene la totalidad de productos y lo asigna al elemento correspondiente
    totalProductos.textContent = miCarrito.length;
    totalProductosSubTotalCarrito.textContent = `Total Productos: ( ${miCarrito.length} )`;
    //obtiene la totalidad de los items
    const totalItemsCarrito = miCarrito.reduce((totalAcum, valorActual) => {
        return totalAcum + valorActual.getCantidad();
    }, 0);
    totalItems.textContent = totalItemsCarrito;
    actualizaContadorCarrito(totalItemsCarrito); //actualiza el contador del carrito
    totalItemsSubTotalCarrito.textContent = totalItemsCarrito; //total items del subtotal del carrito de compras
    //obtiene importe total del carrito
    const totalImporteCarrito = miCarrito.reduce((totalAcum, valorActual) => {
        return totalAcum + (valorActual.getCantidad() * valorActual.getPrecio());
    }, 0);
    totalFinalCarrito = totalImporteCarrito;
    totalImporte.textContent = '$ ' + totalImporteCarrito.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    totalImporteSubTotalCarrito.textContent = '$ ' + totalImporteCarrito.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }); //total importe del subtotal del carrito
};

//actualiza el contador del carrito
/**
 * 
 * @param {Number} items => recibe la cantidad de items que contiene el carrito de compras
 */
const actualizaContadorCarrito = (items) => {
    const carritoContadorItems = document.querySelector(".carrito-contador");
    const carritoContadorNavItems = document.querySelector(".carrito-contador-nav");
    carritoContadorItems.textContent= items;
    carritoContadorNavItems.textContent=items;
    (items > 0) ? (carritoContadorItems.style.display="block") : (carritoContadorItems.style.display="none");
    (items > 0) ? (carritoContadorNavItems.style.display="block") : (carritoContadorNavItems.style.display="none");
};

const modalShowToggleCarrito = () => {
    modal.classList.toggle('modal--show');
};
const modalShowToggleFinCompra = () => {
    modalFinCompra.classList.toggle('modal-fincompra--show');
};
const modalShowToggleLogin = () => {
    modalLogin.classList.toggle('modal-login--show');
};
const modalShowToggleCerrarSesion = () => {
    cerrarSesion.classList.toggle('cerrar-sesion');
};
const modalShowToggleNuevoUsuario = () => {
    modalNuevoUsuario.classList.toggle('modal-nuevoUsuario--show');
};


//Borra los productos en el DOM
const borrarArticulos = () => {
    //borra el párrafo de No hay productos para mostrar
    textoAlternativo.innerHTML = `<p class="texto-alternativo"></p>`
    cantidadProdEncontrados.innerHTML = `<p class="total-productos"></p>`
    //borra todos los productos mostrados
    seccionProductos.innerHTML = '';
};

//Agrega productos al carrito, previa verificación si el producto ya existe. En ese caso se suma 1 a la cantidad. Si no existe se crea una instancia u objeto invocando a la función actualizaMiCarrito
/**
 * Agrega productos al carrito de compras
 * @param {String} codigo => recibe el código del producto
 * @param {String} nombre => recibe el nombre del producto
 * @param {Number} precio => recibe el precio del producto
 */
const agregaArticulo = (codigo, nombre, precio) => {
    let cantidad = verificaCantidadEnCarrito(codigo); //verifica si el código ya existe en el carrito y devuelve la cantidad
    actualizaMiCarrito(codigo, nombre, precio, cantidad);
};

//Resta artículo del carrito
/**
 * 
 * @param {String} codigo => recibo el código del producto 
 */
const restaArticulo = (codigo) => {
    let cantidad = verificaCantidadEnCarrito(codigo); //verifica si el código ya existe en el carrito y devuelve la cantidad
    const indice = miCarrito.findIndex((producto) => producto.getCodigo() === codigo); //Si el método 'findIndex' encuentra el registro indice va a ser igual o mayor a cero, de lo contrario es -1
    (indice >= 0) && miCarrito[indice].setCantidad(cantidad - 1) //Actualiza la cantidad del producto en el carrito restando 1.
    seteaCarritoLS(miCarrito);
    alertAgregado('success', 'Se quitó una unidad.', '#dd710c');    
};

//Verifica si el producto existe en el carrito. Si existe retorna o devuelve la cantidad de ese producto agregada al carrito y si no lo encuentra devuelve cero.
/**
 * @param {String} codigo => código del producto
 * @returns 
 */
const verificaCantidadEnCarrito = (codigo = '') => {
    if (miCarrito.length === 0) return 0; //Si el carrito está vacío, retorna 0
    const buscar = miCarrito.find((producto) => producto.getCodigo() === codigo);
    if (buscar) return buscar.getCantidad(); //si encuentra el código en miCarrito, devuelve la cantidad comprada
    return 0; //si no encuentra el código en el carrito, devuelve cero
};

//Actualiza cantidad de un producto existente o agrega un producto al carrito
/**
 * @param {String} codigo => código del producto 
 * @param {String} nombre => nombre del producto
 * @param {Number} precio => precio
 * @param {Number} cantidad => cantidad agregada
 */
const actualizaMiCarrito = (codigo, nombre, precio, cantidad) => {
    const indice = miCarrito.findIndex((producto) => producto.getCodigo() === codigo);
    (indice >= 0) //Si el método 'findIndex' encuentra el registro indice va a ser igual o mayor a cero, de lo contrario es -1
        ? miCarrito[indice].setCantidad(cantidad + 1) //Actualiza la cantidad del producto en el carrito sumando 1.
        : miCarrito.push(new CarritoCompra(codigo, nombre, 1, precio)); //Se agrega el producto en el carrito
    seteaCarritoLS(miCarrito);
    alertAgregado('success', 'Producto agregado', '#dd710c');
};

//Alerta de Producto Agregado al Carrito
const alertAgregado = (icono, titulo, colorFondo) => {
    Toast.fire({
        icon: icono, // success
        title: titulo, // agregado
        background: colorFondo, // #34b555
        width:300
    });
};

//Librería SweetAlert para producto agregado
const Toast = Swal.mixin({
    toast: true,
    position: "center",
    showConfirmButton: false,
    width: 300,
    color: 'whitesmoke',
    timer: 800,
    timerProgressBar: true,
});

//Filtrar Ofertas
const filtrarOfertas = () => {
    let filtroOfertas = [];
    filtroOfertas = totalProductos.filter((el) => (el.oferta[0] > 0)); //busca por oferta = 1
    return filtroOfertas;
};

//muestra el contenido del carrito de compras
const muestraCarritoCompras = () => {
    if (miCarrito.length === 0) {
        alertaCarritoVacio(0, false);
    }
    else {
        modalShowToggleCarrito();
        agregaHtmlCarrito(miCarrito); //Crea el html para los productos que se encuentran en el carrito
    }
};

//Avisa que el carrito está vacío en el caso que se quiera acceder por las 3 vías de acceso existentes (Carrito del Menú, Totalizador del Carrito del menú (arriba-derecha) y el carrito flotante (abajo-derecha))
/**
 * @param {Number} miliSeg => cantidad de milisegundos para ocultarse 
 * @param {Boolean} ocultaModal => false para mostrar el alerta de carrito vacío.
 */
const alertaCarritoVacio = (miliSeg, ocultaModal) => {
    setTimeout(() => {
        (ocultaModal) && modalShowToggleCarrito();
        Swal.fire({
            confirmButtonColor: 'rgb(11, 168, 11)',
            title: 'Carrito de Compras vacío',
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            }
        })
    }, miliSeg);
};

//Limpia el html del carrito de compras
const limpiaHtmlCarrito = () => {
    const productosModalCarrito = document.querySelectorAll(".modal-productos");
    productosModalCarrito.forEach((div) => {
        div.remove();
    })
};

//HTML CARRITO. Crea el código html dinámico del carrito de compras
const agregaHtmlCarrito = (miCarrito) => {
    limpiaHtmlCarrito();
    const miCarritoOrdenado = miCarrito.slice().sort(function (a, b) {
        return miCarrito.indexOf(b) - miCarrito.indexOf(a);
    });
    miCarritoOrdenado.forEach((el) => {
        const producto = document.createElement('div');
        let precioUnitFormateado = el.getPrecio().toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }); //da formato al precio unitario
        let precioTotal = (el.getPrecio() * el.getCantidad());
        let precioTotalFormateado = precioTotal.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }); //da formato al precio total
        const urlProducto = buscaURLProducto(el.codigo);
        producto.classList.add('modal-productos');
        producto.id = el.codigo;

        producto.innerHTML = ` 
                            <img class="modal-productos-img" src="${urlProducto.url}" alt="${el.getNombre()}"></img>
                            <span class="modal-productos-col1">${el.getNombre()}</span>
                            <div class="modal-productos-col2-div">
                                <span class="modal-productos-col2-resta">-</span>
                                <span class="modal-productos-col2">${el.getCantidad()}</span>
                                <span class="modal-productos-col2-suma">+</span>
                            </div>
                            <span class="modal-productos-col3">${precioUnitFormateado}</span>
                            <span class="modal-productos-col3Total">${precioTotalFormateado}</span>
                            <a class="modal-productos-eliminar" href="#">X</a>
                            </div>`

        modalContainer.insertBefore(producto, modalContainerTitulo.nextSibling);
        const eliminarProducto = document.querySelector(".modal-productos-eliminar");
        //evento "click" para eliminar un producto del carrito
        eliminarProducto.addEventListener("click", () => {
            confirmaEliminarProducto(miCarrito, el.codigo, el.nombre); user - login
        });

        sumaYrestaCantidad(el); //suma y resta cantidad del producto a través de los signos '+' y '-'
    });
};

const buscaURLProducto = ((codigoProducto) => {
    return totalProductos.find((item => item.codigo === codigoProducto));
});

//solicita la confirmación para eliminar un producto agregado al carrito
/**
 * @param {Object} miCarrito => contenido del carrito
 * @param {String} codigoProducto => código del producto 
 * @param {String} nombreProducto => nombre del producto 
 */
const confirmaEliminarProducto = (miCarrito, codigoProducto, nombreProducto) => {
    //Confirma la eliminación?
    const urlProducto = buscaURLProducto(codigoProducto);
    //en esta combiné 2 sweetalerts. 'A confirm dialog, with a function attached to the "Confirm"-button' + 'A custom positioned dialog'
    Swal.fire({
        title: `${nombreProducto} será eliminado! Confirma?`,
        imageUrl: urlProducto.url,
        imageWidth: 80,
        imageHeight: 120,
        showCancelButton: true,
        cancelButtonText: 'No',
        confirmButtonColor: 'rgb(11, 168, 11)',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, confirmo!'
    }).then((result) => {
        if (result.isConfirmed) {
            borraProducto(miCarrito, codigoProducto);
            let textoTitle = "El producto ha sido eliminado!";
            if (miCarrito.length === 0) textoTitle = "El carrito ha sido vaciado!";
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: textoTitle,
                showConfirmButton: false,
                timer: 1100
            })
        }
    })
};

//borra un producto del carrito
/**
 * @param {Object} miCarrito => contenido del carrito
 * @param {String} codigoProducto => código del producto 
 */
const borraProducto = (miCarrito, codigoProducto) => {
    //busco el indice correspondiente al objeto
    let index = miCarrito.findIndex((objeto) => {
        return objeto.codigo === codigoProducto;
    });
    //borro el objeto del array del carrito
    if (index !== -1) {
        miCarrito.splice(index, 1);
        seteaCarritoLS(miCarrito);
        const itemABorrar = document.getElementById(codigoProducto);
        itemABorrar.remove();
        if (miCarrito.length === 0) {
            setTimeout(() => {
                modalShowToggleCarrito();
            }, 1100);
        }
    }
};

//suma y resta la cantidad del producto con los signos '+' y '-'
const sumaYrestaCantidad = ((el) => {
    const cantidadProducto = document.querySelector(".modal-productos-col2"); //obtiene el elemento cantidad producto
    const precioTotalProducto = document.querySelector(".modal-productos-col3Total"); //obtiene el elemento cantidad producto
    //resta cantidad del producto
    const restaCantidad = document.querySelector(".modal-productos-col2-resta");
    //evento "click" de la resta del producto
    restaCantidad.addEventListener("click", () => {
        if(el.getCantidad() != 1){
            restaArticulo(el.getCodigo());
            cantidadProducto.textContent= el.getCantidad();
            let precioTotalFormateado = (el.getPrecio() * el.getCantidad()).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }); //da formato al precio total
            precioTotalProducto.textContent = precioTotalFormateado;
        }
    });
    //suma cantidad del producto
    const sumaCantidad = document.querySelector(".modal-productos-col2-suma");
    //evento "click" de la suma del producto
    sumaCantidad.addEventListener("click", () => { 
        agregaArticulo(el.getCodigo(),el.getNombre(),el.getPrecio());   
        cantidadProducto.textContent= el.getCantidad();   
        let precioTotalFormateado = (el.getPrecio() * el.getCantidad()).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }); //da formato al precio total
        precioTotalProducto.textContent = precioTotalFormateado;
    });
});



//* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *  *  F U N C I O N E S   C A R R I T O   D E   C O M P R A S   * * * * * * * * * * *  * * * * * * * * * * * * * * * * * * * * * * * * 
//Verifica si el usuario está logueado antes de proceder a agregar algún producto al carrito o acceder al carrito de compras
//Si no está logueado, solicita su correo y contraseña de acceso
const validaIngreso = () => {
    if (leeLogin().isLogin === false) {
        usuarioClave.value = '',usuarioEmail.value = ''; //limpia las cajas de email y clave
        errorLogin.classList.remove('errorLog--show');//limpia el texto de error login
        modalShowToggleLogin();
        return false;
    };
    return true;
};

//Agrega código html del formulario modal de la forma de apago
const agregaHtmlFPago = () => {
    completaEMail();
    const totalAPagar = document.querySelector(".importe-totalapagar");
    totalAPagar.textContent = `$ ${totalFinalCarrito.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    //agrega la opción 'Seleccione una opción...' a la lista para obligar al usuario a seleccionar una forma de pago
    const opt = document.createElement('option');
    opt.disabled = true;
    opt.selected = true;
    opt.textContent = "Seleccione una opción...";
    selectFPago.appendChild(opt);
    bdFPago.forEach((op) => {
        let cantPago = "";
        let impCuota = (totalFinalCarrito + (totalFinalCarrito * op.tasa / 100)) / op.cuotas;
        impCuota = impCuota.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        (op.cuotas > 1) ? cantPago = "pagos" : cantPago = "pago";
        let textoFPago = ` ( ${op.cuotas} ${cantPago} de ${impCuota} )`;
        const opt = document.createElement('option');
        opt.value = op.codigo;
        opt.textContent = op.nombre + textoFPago;
        selectFPago.appendChild(opt)
    });
};

//Vacía el carrito de compras
const vaciaCarritoCompras = () => {
    Swal.fire({
        title: `El carrito será vaciado! Confirma?`,
        imageWidth: 80,
        imageHeight: 120,
        showCancelButton: true,
        cancelButtonText: 'No',
        confirmButtonColor: 'rgb(11, 168, 11)',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, confirmo!'
    }).then((result) => {
        if (result.isConfirmed) {
            miCarrito.forEach((el) => {
                const itemABorrar = document.getElementById(el.codigo);
                itemABorrar.remove(); //borra el contenido del html del carrito para cada elemento o producto
            });
            miCarrito.splice(0); //vacía el array
            seteaCarritoLS(miCarrito); //actualiza el localstorage
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'El carrito ha sido vaciado!',
                showConfirmButton: false,
                timer: 1100
            })
            setTimeout(() => {
                modalShowToggleCarrito();
            }, 1100); //espera 1,5 segundos para quitar el carrito vacío de la pantalla
        }
    })
};

//limpia html de forma de pago
const limpiaHtmlFPago = () => {
    while (selectFPago.firstChild) {
        selectFPago.removeChild(selectFPago.firstChild);
    }
};

//Asigna al campo E-Mail del formulario de pago el e-mail del usuario que se encuentra logueado
const completaEMail = () => {
    const email = document.querySelector("#email");
    email.value = leeLogin().email; //asigna al campo email el e-mail con el que el usuario se logueó
};

//* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *  *  F U N C I O N E S   F O R M U L A R I O   D E   P A G O   * * * * * * * * * * *  * * * * * * * * * * * * * * * * * * * * * * * * 

//Valida la forma de pago
/**
 * Realiza la validación de la forma de pago
 * @param {Number} opcionSel => recibe la opción de pago seleccionada 
 * @param {Number} value => recibe el código correspondiente a la forma de pago seleccionada, el código está en bdFPago.js
 * @returns 
 */
const validaFPago = (opcionSel, value) => {
    if (opcionSel === 0) return alertaDatosIngresados('Debe seleccionar una forma de pago.') && false;
    const buscar = bdFPago.find((el) => el.codigo === value);
    if (buscar) {
        const desFPago = document.querySelector("#descripcion-fpago");
        let cantPago = "";
        let totalPago = (totalFinalCarrito + (totalFinalCarrito * buscar.tasa / 100));
        let impCuota = totalPago / buscar.cuotas;
        impCuota = impCuota.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        totalPago = totalPago.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        (buscar.cuotas > 1) ? cantPago = "pagos" : cantPago = "pago";
        if (buscar.cuotas > 1) {
            desFPago.classList.add('descripcion-fpago-siv');
            desFPago.classList.remove('descripcion-fpago-nov');
            desFPago.textContent = `En ${buscar.cuotas} ${cantPago} de $${impCuota}. Total: $${totalPago}. Recargo ${buscar.tasa}%`;

        }
        else if (buscar.detalles !== "") {
            desFPago.classList.add('descripcion-fpago-siv');
            desFPago.classList.remove('descripcion-fpago-nov');
            desFPago.textContent = `Deberá transferir al CBU Nº ${buscar.detalles}`;
        }
        else {
            desFPago.classList.add('descripcion-fpago-nov');
            desFPago.classList.remove('descripcion-fpago-siv');
            desFPago.textContent = "";
        }
        cantCuota = buscar.cuotas;
        importeCuota = impCuota.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    };
    return true;
};

/* Validaciones Datos Personales */
const validacionDatosPersonales = () => {
    const nombre = document.querySelector("#nombre");
    const apellido = document.querySelector("#apellido");
    const email = document.querySelector("#email");
    const domicilio = document.querySelector("#domicilio");
    const ciudad = document.querySelector("#ciudad");
    //Para revisar los datos ingresados se utiliza "Operador Ternario" + "Operador Lógico AND(&&) o de Cortocircuito", así se evita el uso de ELSE.
    //Nombre
    if (!nombre.value) return alertaDatosIngresados('Debe ingresar su nombre.') && false;
    if (!regexApellidoNombre.test(nombre.value)) return alertaDatosIngresados('El nombre ingresado no es válido.') && false;
    //Apellido
    if (!apellido.value) return alertaDatosIngresados('Debe ingresar su apellido.') && false;
    if (!regexApellidoNombre.test(apellido.value)) return alertaDatosIngresados('El apellido ingresado no es válido.') && false;
    //Email
    if (!email.value) return alertaDatosIngresados('Debe ingresar su e-mail.') && false;
    if (!regexEMail.test(email.value)) return alertaDatosIngresados('El correo ingresado no es válido') && false;
    //Domicilio
    if (!domicilio.value) return alertaDatosIngresados('Debe ingresar su domicilio.') && false;
    //Localidad
    if (!ciudad.value) return alertaDatosIngresados('Debe ingresar su ciudad.') && false;

    //si las revisiones/validaciones son correctas se retorna true;
    return true;
};

const alertaDatosIngresados = (texto) => {
    Swal.fire({
        text: texto,
        confirmButtonColor: 'red'
    });
};

//Se solicita al usuario que confirme la compra
const confirmaCompra = () => {
    let descri = "pago";
    (cantCuota > 1) ? descri = "pagos" : descri = "pago";
    Swal.fire({
        title: `Se va a efectuar la compra en ${cantCuota} ${descri} de ${importeCuota}.`,
        text: "Confirma?",
        html:
            '<span style="font-size: 1.5rem;"><b>Confirma?</b></span>',
        imageUrl: './img/compra.jpeg',
        imageWidth: 300,
        imageHeight: 250,
        imageAlt: 'Compra A Confirmar',
        showCancelButton: true,
        confirmButtonColor: 'rgb(168, 114, 13)',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, Confirmo la compra!',
        cancelButtonText: 'No quiero realizar la compra!'
    }).then((result) => {
        if (result.isConfirmed) {
            //Si acepta la compra se llama a la función compraExitosa()
            Swal.fire({
                title: 'El Nº de Orden es ' +  compraExitosa(),
                imageUrl: './img/graciascompra.webp',
                imageWidth: 290,
                imageHeight: 270,
                imageAlt: 'Gracias por su Compra',
                confirmButtonColor: 'rgb(168, 114, 13)'
              })
            setTimeout(() => {
                modalShowToggleFinCompra();
            }, 1100);
        }
    })
};

const compraExitosa = () => {
    miCarrito.splice(0); // al confirmarse la compra se borra el array de miCarrito
    seteaCarritoLS(miCarrito); // y se actualiza el localstorage
    let numOrden = Math.floor(Math.random() * 90000) + 10000; //genera un nro aleatorio de 5 dígitos para devolverlo como nro de orden de compra
    const nombre = document.querySelector("#nombre");
    let mensaje = `Se ha generado la orden de compra número ${numOrden}. ${nombre.value}, gracias por confiar en nosotros.`;
    saludosDeVoz(mensaje);
    return numOrden;
};

const saludosDeVoz = (mensaje) => speechSynthesis.speak(new SpeechSynthesisUtterance(mensaje)); //Emite un saludo(voz) de agradecimiento por la compra

//------------------------------------------------ C A R G A   T O D O S   L O S   E V E N T O S  ----------------------------------------------------
export const cargarEventos = () => {

//******************************* E V E N T O S   D E L   M E N U   N A V E G A C I O N  *********************************

    //evento "click" del link Productos de la barra de navegación
    linkProductos.addEventListener("click", () => {
        cargarProductos(totalProductos, "Productos encontrados : "); //se cargan todos los productos
        limpiaFiltro();
    });

    //evento "click" del link Ofertas de la barra de navegación
    linkOfertas.addEventListener("click", () => {
        const productosOferta = filtrarOfertas();
        cargarProductos(productosOferta,"Productos en Oferta : ");
        limpiaFiltro();
    });

    //evento "click" del carrito del menú (ubicado en el centro del menú de navegación). Para visualizar la totalidad del carrito de compras.
    carrito.addEventListener("click", (e) => {
        e.preventDefault();
        muestraCarritoCompras();
    });

    //evento "click" sobre los totales del carrito del menú (ubicado sobre la derecha del menú de navegación). Para visualizar la totalidad del carrito de compras.
    totalesCarrito.addEventListener("click", (e) => {
        e.preventDefault();
        muestraCarritoCompras();
    });

//********************************* E V E N T O S   D E L   C A R R I T O   D E   C O M P R A S *********************************

    //evento "click" sobre finalizar compra del carrito de compras
    finalizarCompra.addEventListener("click", (e) => {
        e.preventDefault();
        blnModalFinalizarCompra = true;
        if (validaIngreso()) {
            modalShowToggleCarrito(); //cierra el modal del carrito de compras
            setTimeout(() => {
                limpiaHtmlFPago();
                modalShowToggleFinCompra(); //muestra el modal de la finalización de la compra
                agregaHtmlFPago();
            }, 200);
        };

    });

    //evento "click" sobre vaciar carrito de compra
    vaciarCarrito.addEventListener("click", (e) => {
        e.preventDefault();
        vaciaCarritoCompras();
    });

    //evento "click" para cerrar el modal del carrito de compras. Cierra el carrito de compras.
    cerrarModal.addEventListener("click", (e) => {
        e.preventDefault();
        modalShowToggleCarrito();
    });

//*********************************  E V E N T O S   D E L   F O R M U L A R I O   D E   P A G O  *********************************

    //evento "click" para cerrar el modal del formulario de pago.
    cerrarFinCompra.addEventListener("click", (e) => {
        e.preventDefault();
        modalShowToggleFinCompra();
    });

    //evento "change" en el dropdown de las opciones de pago en el formulario de finalización de la compra
    selectFPago.addEventListener("change", (e) => {
        e.preventDefault();
        validaFPago(selectFPago.selectedIndex, selectFPago.value);
    });

    //evento "click" en el botón de finalizar compra. Verifica si el usuario está logueado, de lo contrario solicita que se loguee
    finalizarPago.addEventListener("click", (e) => {
        e.preventDefault();
        if (validacionDatosPersonales() && validaFPago(selectFPago.selectedIndex)) {
            confirmaCompra();
        }
    })

    //evento "click" para volver al carrito de compras desde el formulario de finalización de la compra
    volverAlCarrito.addEventListener("click", (e) => {
        e.preventDefault();
        modalShowToggleFinCompra();
        modalShowToggleCarrito();
    });

//********************************* E V E N T O S   G L O B A L E S *********************************

    //evento "keydown" con key = "Escape" para poder cerrar los formularios modales que estén abiertos, presionando la tecla "ESC"
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            modal.classList.remove('modal--show');
            modalFinCompra.classList.remove('modal-fincompra--show');
            modalLogin.classList.remove('modal-login--show');
            modalNuevoUsuario.classList.remove('modal-nuevoUsuario--show');
        }
    });
//FIN DE LA CARGA DE EVENTOS ***************************************************************************************************
};
