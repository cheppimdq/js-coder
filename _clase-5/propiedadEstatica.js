class Persona {
    static id = 0;

    constructor(nombre, edad, direccion) {
        //propiedad privada
        let _dni = '';

        //propiedades publicas
        this.nombre = nombre; 
        this.edad = edad;
        this.direccion = direccion;
        this.id = ++Persona.id; //para que no arranque en 0

        this.getDni = function () {
            if (_dni !== '') {
                return _dni;
            } else {
                return (_dni = 'sin datos dni')
            }
        }

        this.setDni = function (nuevoDni) {
            _dni = nuevoDni;
        }
    }

    infoPersona() {
        console.log('ID: ' + this.id + '\nNombre: ' + this.nombre + '\nEdad: ' + this.edad + '\nDireccion: ' + this.direccion)
    };

};

const personaRandom = new Persona('Pepe', 50, 'Mugaburu 3560');
personaRandom.setDni(2235544);
console.log(personaRandom);
console.log(personaRandom.getDni());

const personaRandom2 = new Persona('Josecito', 10, 'Peron 1420');
personaRandom2.setDni(5456441);
console.log(personaRandom2);
console.log(personaRandom2.getDni());