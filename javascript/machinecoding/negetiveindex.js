// let arr=[1,3,2,4,5];
// const user={
//     name:"srinjoy",
//     age:22,
//     password:"1234"
// }
// //
// // const proxyuser=user;
// // create proxy
// const proxyuser=new Proxy(user,{
//     get(target,prop){
//         if(prop==="password"){
//             throw new Error("Cannot access password property");
//         }
//          return target[prop];
//         // console.log(target);
//         // console.log(prop);
        
        
//     },
//     set(target,prop,user){}

// })
// console.log(proxyuser.password);

let arr=[1,3,2,4,5];
function negativeIndex() {
    return new Proxy([], {
        get(target, prop) {
            const index = Number(prop);
            if (index < 0) {
                return target[target.length + index];
            }
            return target[index];
        },
        set(target, prop,value){
            const index=Number(prop);
            if(index<0){
                target[target.length+index]=value
            }else{
                target[index]=value
            }
            return true;
        }
    });
}
let newarr=negativeIndex(arr)
newarr[-1]=-2;
console.log(newarr);





