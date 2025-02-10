// challenge
let array=[1,2,3,4,5,6,7,8,9,10];
// let sum=0;
// for(let i=0;i<array.length;i++){
//     sum=sum+array[i];
// }
// console.log(sum);
function sumofarray(numbers){
    let sum=0;
    for(let i=0;i<numbers.length;i++){
        sum=sum+numbers[i];
    }
    return sum;



}
console.log(sumofarray(array));
