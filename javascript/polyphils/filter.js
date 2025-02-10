if(!Array.prototype.myfilter){
    Array.prototype.myfilter = function(usefun){
        const result=[]
        for(let i=0;i<this.length;i++){
            if(usefun(this[i])){
                result.push(this[i]);
               
            }
        }
        return result;
    }
}












//filter
const arr=[1,2,3,4,5,];

// const filteredArray=arr.filter((e)=>e%2==0);
const filteredArray=arr.myfilter((e)=>e%2==0);
console.log(filteredArray);
