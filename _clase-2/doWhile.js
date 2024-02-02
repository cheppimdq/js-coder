// Ejemplo con do ... while
let entrada;

// Evitamos que la variable entrada quede nula o vacía
do {
    entrada = prompt('Ingresar un dato');
} while (entrada == '' || entrada == null);

// Convertimos su valor a mayúscula
entrada = entrada.toUpperCase();

// Repetimos con While hasta que el usuario ingresa "ESC"
do {
    alert('El usuario ingresó ' + entrada);

    if (entrada == 'ESC') {
        break; // salimos del ciclo do ... while
    }

    do {
        entrada = prompt('Ingresar un dato');
    } while (entrada == '' || entrada == null);

    entrada = entrada.toUpperCase();
} while (entrada != 'ESC');