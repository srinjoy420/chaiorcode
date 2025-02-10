const numbers = [1, 2, 3, 4];
if(!Array.prototype.myrwduce){
    Array.prototype.myreduce=function(userfunc,initial){
        let accumulator;
        let startindex;
        if(startindex==undefined){
            accumulator=initial;
            
            startindex=0;

        }
        else{
            accumulator=this[0]
            startindex=1
        };
        for(let i=0;i<this.length;i++){
            accumulator=userfunc(accumulator,this[i],i)
        }
        return accumulator;

        
    }
}









// const sum = numbers.reduce((acc, num) => acc + num, 0);
const sum = numbers.myreduce((acc, num) => acc * num, 2)
// const sum=numbers.myreduce(numbers)
console.log(sum); 