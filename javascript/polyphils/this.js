const numbers = [1, 2, 3, 4];

// Check if at least one number is even
if(!Array.prototype.mythis){
    Array.prototype.mythis=function(userfun){
        for(let i=0;i<this.length;i++){
            if(!userfun(this[i])){
                return false;
            }
        }
    }
}








const hasEven = numbers.mythis(num => num % 2 === 0);
console.log(hasEven); 