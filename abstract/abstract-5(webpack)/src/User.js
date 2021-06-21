export default class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayhello() {
        console.log(`Hello, my name is ${this.name}, I am ${this.age} years old`);
    }
}