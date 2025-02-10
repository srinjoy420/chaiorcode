const numbers=[1,2,3,4,5];
// polyfill for forEach
if(!Array.prototype.myforeach){
    Array.prototype.myforeach=function(callback){
       const originalarr=this;
       for(let i=0;i<originalarr.length;i++){
           callback(originalarr[i],i);
       }
    
    }
}
numbers.myforeach((num,index)=>{
    console.log(num,index);
})
