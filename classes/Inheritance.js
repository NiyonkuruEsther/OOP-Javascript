// Inheritance is used to inherit attributes of a class in another class

class Person {
  constructor(_name, _age){
    this.name = _name, 
    this.age = _age
  }
}

class Student extends Person{
    constructor(_name, _age, _class){
        super(_name, _age)
        this.class = _class
    }
}

let person = new Person("Esther");
let student = new Student("Niyonkuru", 12, "S6")

console.log(person, student);