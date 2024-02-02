// Ejemplo con switch

let entrada;

//Evitamos que la variable entrada quede nula o vacía
do {
    entrada = prompt('Ingresar un dato');
} while (entrada == '' || entrada == null);

//Convertimos su valor a mayúscula
entrada = entrada.toUpperCase();

// Repetimos hasta que se ingresa "ESC"
while (entrada != 'ESC') {
    switch (entrada) {
        case 'ANA':
            alert('HOLA ANA');
            break;
        case 'JUAN':
            alert('HOLA JUAN');
            break;
        default:
            alert('¿QUIÉN SOS?');
            break;
    }

    do {
        entrada = prompt('Ingresar un dato');
    } while (entrada == '' || entrada == null);

    entrada = entrada.toUpperCase();
}