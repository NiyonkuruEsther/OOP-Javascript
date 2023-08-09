// getters and setters are methods used to define how properties of the class are going to be stored or computed
// They are also used for data validation 

// !This is the difference between constructor and setters
// While constructors are primarily responsible for initializing object instances and setting their initial state, 
// setters focus on modifying specific properties after an object has been created.

// They are defined with "get" and "set" keywords respectively

class Getter {
    constructor(width){
this.width =  width
    }
    get data(){
        return this.width
    }
    // Every setter has to have aruments, 
    // if you want to have more than one argument you wrap them in an object i.e set data ({width, length, height})
    // Then the arguments will be used as normal
    set data (width) {
        if (width < 12) {
    console.log(width + " is the height", this.width+ " but this is the width");

              } else {
                console.log('Invalid width name');
              }
    }
}

let GetterUsage = new Getter(12)
// When going to use the setters you need to use the name of the setter and equalise it with it's arguments
// If you have many arguments then you will pass in them as objects i.e: GetterUsage.data = {width: 6, length: 7, heigth: 8} 

GetterUsage.data = 8
console.log(GetterUsage.data)

