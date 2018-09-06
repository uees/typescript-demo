abstract class Animal {
    protected name: string;

    static num: number = 42;

    static isAnimal(a) {
        return a instanceof Animal;
    }

    public constructor(name:string) {
        this.name = name;
    }

    public abstract sayHi():string;
}

class Cat extends Animal {
    constructor(name:string) {
        super(name);
        console.log(this.name);
    }

    public sayHi(): string{
        return `Meow, My name is ${this.name}`;
    }
}

let a: Animal = new Cat('Jack');

console.log(a.sayHi()); // Meow, My name is Jack

Animal.isAnimal(a);  // true

console.log(Animal.num); // 42
