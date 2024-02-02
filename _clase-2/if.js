// estructura condicional if
let edad = prompt('Ingrese su edad');
console.log(edad);

if (edad >= 18) {
    console.log('Usted es mayor de edad, puede entrar en la disco');
} else {
    console.log('Tu eres menor de edad, no puede entrar en la disco');
}

// Estructuras if anidadas
let precio = 20.5;

if (precio < 20) {
    alert('El precio es menor que 20');
} else if (precio < 50) {
    alert('El precio es menor que 50');
} else if (precio < 100) {
    alert('El precio es menor que 100');
} else {
    alert('El precio es mayor que 100');
}