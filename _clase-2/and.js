// Operador lógico And && operaciones compuestas
let nombreIngresado = prompt('Ingresar nombre');
let apellidoIngresado = prompt('Ingresar apellido');

if (nombreIngresado != '' && apellidoIngresado != '' && nombreIngresado != null && apellidoIngresado != null) {
    alert('Nombre: ' + nombreIngresado + '\nApellido: ' + apellidoIngresado);
} else {
    alert(':( Error: debe ingresar su nombre y apellido');
}