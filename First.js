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
class teacher{
degree(){
console.log("Should pass baachler");
}
experience(){
    console.log("Should have 5 years experience");
}
fee(zero){
    this.zero=zero;
}
}
let school=new teacher();
school.fee("zero");
let principle=new teacher();
