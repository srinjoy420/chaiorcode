if(!Object.myobjentries){
    Object.myobjentries=function(obj){
        const result=[];
        for(let key in obj){
            if (obj.hasOwnProperty(key)) {  // Ensure it's the object's own property
                result.push([key, obj[key]]); // Push key and value as an array
              }
        }
        return result;
    }
}






// const obj = { a: 1, b: 2, c: 3 };
// console.log(Object.entries(obj)); 
// Expected output: [['a', 1], ['b', 2], ['c', 3]]



const obj = { a: 1, b: 2, c: 3 };
console.log(Object.myobjentries(obj)); 
