/* let identidad = prompt('quien sos?');

while (identidad == '' || identidad == null) {
    identidad = prompt('identifiquese!');
}

identidad = identidad.toUpperCase();

while (identidad != 'ESC') {
    alert( 'ADELANTE '+ identidad );

    identidad = prompt('quien sos?');

    while(identidad == '' || identidad == null) {
        identidad = prompt('identifiquese!');
    }

    identidad = identidad.toUpperCase();
} */


/* let identidad;

do {
    identidad = prompt('Ingrese su nombre');
} while(identidad == '' || entrada == null);

identidad = identidad.toUpperCase();

do {
    alert('BIENVENIDO ' + identidad)
    if (identidad == 'ESC') {
        break;
    }
    do {
        identidad = prompt('Por favor ingrese su nombre')
    } while(identidad == '' || identidad == null);
    identidad = identidad.toUpperCase();
} while ( identidad != 'ESC'); */

let identidad;

do {
    identidad = prompt('ingrese su nombre');
} while (identidad == '' || identidad == null);

identidad = identidad.toUpperCase();

while (identidad != 'ESC') { 
    switch (identidad) {
        case 'yoelis':
            alert('bienvenido yoelis');
            break;
        default:
            alert('¿quien sos?');
            break;
    }
    do {
        identidad = prompt('ingrese su nombre');
    } while (identidad == '' || identidad == null);
    identidad = identidad.toUpperCase();
}