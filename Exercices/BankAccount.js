class BankAccount {
    constructor(name, age, title) {
        this.name = name;
        this.age = age;
        this.title = title;
        console.log(this.name + " you are most welcome");

    }
    opening() {
        console.log(this.name + " you are most welcome");
    }
    closing() {
        return "Successfully closed";
    }
}

let userAccount = new BankAccount("Esther", 12, "Software developer");
console.log(userAccount.age)
