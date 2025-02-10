const array = [1, 2, 3, 4, 5];
const arr2=[];
// arr2.push(array);
// console.log(arr2);
if(!Array.prototype.mypush){
    Array.prototype.mypush=function(userfun){
        const result=[];
        for(let i=0;i<this.length;i++){
            result.push(this[i])
        }
        return result;
       

        
    }
    
}
const result=array.mypush()
console.log(result);

