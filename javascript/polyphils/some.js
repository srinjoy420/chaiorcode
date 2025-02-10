const numbers = [1, 2, 3, 4];

// Check if at least one number is even
if(!Array.prototype.mysum){
    Array.prototype.mysum=function(userfun){
        for(let i=0;i<this.length;i++){
            if(userfun(this[i])){
                return true;
            }
        }
    }
}








const hasEven = numbers.mysum(num => num % 2 === 1);
console.log(hasEven); 