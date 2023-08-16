// Polymorphism refers to the ability of different objects (instances of classes) 
// to respond to the same method or property name in a way that is specific to their individual implementations.

class Person {
    constructor(name){
        this.name = name
    }
    speak(){
        console.log("Speech ", this.name);
    }
}

class Student extends Person{
    constructor(name){
        super(name)
    }
    speak(){
        console.log("Speech ", this.name);
    }
    speak(name){
        console.log("Speech ", name);
    }
}

const person = new Person("Esther")
const student = new Student("Fawe")

console.log(person.speak(), student.speak());
