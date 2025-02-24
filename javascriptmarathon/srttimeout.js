setTimeout(() => {
    console.log("hello");
    
}, 2000);
const obj={
    pname:"mukul",
    greet:function(){
        console.log("hello",this.pname);
    }
}
setTimeout(() => {
    obj.greet;  //hello mukul
    
}, 2000);

// function xyz(){
//     const abc=1;
// }
const obj2 ={
    pname:"mukul",
    greet:function(){
        console.log("hello",this.name);
    }

}
setTimeout(obj.greet.bind(obj),10000)

console.log("hello");
