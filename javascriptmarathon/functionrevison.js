function greet(name){
    console.log(`hwllo ${name}`);
    
}

// let p1={
//     name:"ravi",
//     greet:function(){
//         greet(this.name);
//     }

// }
// let p2={
//     name:"ramesh",
   
// }
// p1.greet.call(p2)

let p1={
    name:"hello",
    greet:function(){
        console.log(this.name);
        
    }

}
let p2={
    name:"hi",
}
p1.greet.call({name:"ggg"})