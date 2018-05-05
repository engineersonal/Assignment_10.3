
class Dog{
//The Dog class has one constructor with property name    
    constructor(name){
//Setting the property name        
        this.name = name;
    }
//The method speak returns woof    
    speak(){
        return "woof";
    }
}

class Labrador extends Dog{
//The subclass Labrador has one constructor with 2 properties: color and breedWeight    
    constructor(name, color, breedWeight){
//Invoking the base-class (Dog) constructor by passing name to it        
        super(name);
//Setting the properties: color and breedWeight        
        this.color = color;
        this.breedWeight = breedWeight;
    }
    speak(){
//Overriding the speak method from the (base-class) Dog        
        return "Labrador says WOOF";
    }
}

//Creating an instance of the sub-class Labrador
var objLabra = new Labrador('Buzo', 'Black', 30);
//Invoking the speak method of the sub-class Labrador and printing it
document.write(objLabra.speak());