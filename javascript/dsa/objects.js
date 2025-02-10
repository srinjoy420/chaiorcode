const person={
   x:10,
   hobbies:['reading','coding','playing'],
   getfullname:function(){
         return 'John Doe';
   },
   hasgf:true,
   address:{
        city:'New York',
        state:'NY'
   }
}
// console.log(person.hobbies);// console .log using the key

const remote={
    colore:"black",
    brand:"sony",
    dimension:{
        length:20,
        width:10,
        height:5
    },
    turnoff:function(){
        console.log("Turning off the TV");
    },
    volumeup:function(){
        console.log("Volume up");
    }
}
let p1={
    fnamw:"john",
    lname:"doe",
    sddress:{
        street:"123 Main St",
        city:"New York",
        state:"NY"
    }
}
let p2={
    // fname:p1.fname,
    // lname:p1.lname,
     ...p1 //spread operator
    // address:p1.address
  
};
p2.fname="ggg";
console.log(p2);
console.log(p1);

