// Classes are ways to create reusable blueprints for creating objects

class BankAccount {
    BankAccount(name, age, title){
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