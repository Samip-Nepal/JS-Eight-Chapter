/*const student={
    Fullname:"Samip Nepal",
    Rollno:23,
    marks:93,
    printmarks:function (){
        console.log("marks=",this.marks);
    },
        
    }*/
   /*const marks={
    calmarks(){
        console.log("Add 20 marks for handwriting");
    },
   }
   const samip={
    marks:45,
   }
   marks__proto__=samip*/

    /*const marks={
    calmarks(){
        console.log("Add 20 marks for handwriting");
    },
   }
   const samip={
    marks:45,
    calmarks(){
        console.log("Add 30 marks for handwriting");
    },
   }
   marks__proto__=samip//here samip cal marks will printed
*/
// for class and object
/*class teacher{
    constructor(fulfillment){
        console.log("Hi are you a teacher");
        this.fulfillment=fulfillment;
    }
degree(){
console.log("Should pass baachler");
}
experience(){
    console.log("Should have 5 years experience");
}

}
let school=new teacher("fulfillment");
console.log(school);
let principle=new teacher("ladies");
console.log(principle);*/

//parents child inheritange
/*class parent{
    hello(){
        console.log("hi guys");
    }
}
class child extends parent{

}*/
//let object=new parent();
//another example 
class Animal {
    constructor() {
        console.log("They are very cute");
    }
    eat() {
        console.log("They can eat");
    }
}

class Carnivores extends Animal {
    constructor() {
        super(); 
        console.log("They have legs");
    }
    eat() {
        console.log("They only eat meat");
    }
}

let animals = new Carnivores();
animals.eat(); 


