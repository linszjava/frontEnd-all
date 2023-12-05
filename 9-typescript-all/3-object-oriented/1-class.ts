class Person {
    private readonly name: string;
    private readonly age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age
    }
    greet() {
        console.log(`Hello ${this.name}, you are ${this.age} years old`);
    }
}

// new Person('John', 30).greet()

class Employee extends Person {
    private salary: number;
    constructor(name: string, age: number, salary: number) {
        super(name, age);
        this.salary = salary;
    }
    greet() {
        super.greet();
        console.log(`Your salary is ${this.salary}`);
    }
    getSalary() {
        return this.salary;
    }
    setSalary(salary: number)  {
        this.salary = salary;
    }
}

// new Employee('John', 30, 1000).greet()

const  emp = new Employee('John', 30, 1000)
console.log(emp.getSalary());
emp.setSalary(3000)
console.log(emp)

class NumUtil {
    static PI = 3.14;
    static add(...nums: number[]) {
        return nums.reduce((a, b) => a + b, 0);
    }
}

console.log(NumUtil.add(3, 5));
console.log(NumUtil.PI);

abstract class Animal {
    abstract makeSound(): void;
    move(): void {
        console.log('roaming the earth...');
    }
}

class Dog extends Animal {
    makeSound() {
        console.log('woof woof');
    }
}
const dog = new Dog();
dog.makeSound();
dog.move();

