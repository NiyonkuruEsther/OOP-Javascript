// Static methods are methods that are associated with the class itself rather than with instances
// They don't have access to this property so they can't modify or access the properties of instances
// You can't call them directly on the instance instead you can call them directly on the classname
// They can be used to some functionalities that don't require instance data
// They can access other static members of the class


class MathUtils {
    // as you can see it has nothing to do with the this keyword or the instance data 
    static add(a, b) {
      return a + b;
    }
  
    static multiply(a, b) {
      return a * b;
    }
  }
  
  // Calling static methods directly on the class
  console.log(MathUtils.add(5, 3));     
  console.log(MathUtils.multiply(4, 2));
  