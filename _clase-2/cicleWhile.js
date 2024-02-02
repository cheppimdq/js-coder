// Ejemplo aplicado ciclo while
let entrada = prompt('Ingresar un dato');

// Repetimos con While hasta que el usuario ingresa "ESC"
while (entrada != 'ESC') {
    alert('El usuario ingresó ' + entrada);

// Volvemos a solicitar un dato. En la próxima iteración se evalúa si no es ESC.
    entrada = prompt('Ingresar otro dato');
}

// Evitamos que la variable entrada quede nula o vacía
while (entrada == '' || entrada == null) {
    entrada = prompt('Ingresar un dato');
}

// Convertimos su valor a mayúscula
entrada = entrada.toUpperCase();

// Repetimos con While hasta que el usuario ingresa "ESC"
while (entrada != 'ESC') {
    alert('El usuario ingresó ' + entrada);

// Volvemos a solicitar un dato. En la próxima iteración se evalúa si no es ESC.
    entrada = prompt('Ingresar otro dato');

    while (entrada == '' || entrada == null) {
        entrada = prompt('Ingresar un dato');
    }

    entrada = entrada.toUpperCase();
}