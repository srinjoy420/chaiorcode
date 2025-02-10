// map

const numbers = [1, 2, 3, 4, 5];

// const doubledNumbers = numbers.map((number) => number * 2);

// console.log(doubledNumbers); // [2, 4, 6, 8, 10]
// using prototype
if(!Array.prototype.mymap){
    Array.prototype.mymap=function(userfun){
        const resukt=[];
        for(let i=0;i<this.length;i++){
           const value=userfun(this[i],i);
              resukt.push(value);
        }
        return resukt;
    }
}
const doubledNumbers = numbers.mymap((number) => number * number);
console.log(doubledNumbers);
