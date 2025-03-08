const target = {
    message1: "hello",
    message2: "everyone",
  };
  
  const handler1 = {};
  
  const proxy1 = new Proxy(target, handler1);
// console.log(proxy1.message1); // Output: hello
// console.log(proxy1.message2); // Output: everyone
  
const target2={
    message1: "hello",
    message2: "everyone",
  };

const handeler2={
    get(tar,prop,reciver){
        return "world";
    }
}
const proxy2=new  Proxy(target2,handeler2)
console.log(proxy2.message1); // Output: world
