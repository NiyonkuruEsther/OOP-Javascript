// Classes are ways to create reusable blueprints for creating objects

class BankAccount {
    // You can't name a constructor anything you want 
    // You have to name it 'constructor' as it is what the processor knows

    // A constructor is used to intialise the new created object it runs everyone an object is created
    constructor(name, age, title){ 
        this.name = name;
        this.age = age;
        this.title = title;
    }
    opening (){
        return this.name + "you are most welcome"
    }
    closing (){
        return "Successfully closed"
    }
}

let userAccount = new BankAccount ("Esther", 12, "Software developer");
console.log(userAccount)