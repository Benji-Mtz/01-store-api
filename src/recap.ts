const myName = 'Benji';
const myAge = 34;

const suma = (a: number, b: number): number => {
    return a + b;
}

suma(10, 3);

class Persona {
    private age: number;
    // Por defecto es public
    private name: string;

    constructor(age: number, name: string) {
        this.age = age;
        this.name = name;
    }

    getSumary() {
        return `my name is ${this.name} y age ${this.age}`;
    }
}

// Atajo para definir una CLASE en TS
class Person {
    constructor(private age: number, private name: string) { }

    getSumary() {
        return `my name is ${this.name} y age ${this.age}`;
    }
}


const benji = new Persona(34, "Benji");
const mich = new Person(37, "Mich");