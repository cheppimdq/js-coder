// Ejemplo aplicado cicle for
// Solicitamos un valor al usuario
let ingresarNumero = parseInt(prompt('Ingresar Numero'));

// En cada repetición, calculamos el número ingresado X el número de repetición (i)
for (let i = 1; i <= 10; i++) {
    let resultado = ingresarNumero * i;
    console.log(ingresarNumero + ' X ' + i + ' = ' + resultado);
}