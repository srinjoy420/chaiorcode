let teas=["gereen tea","black tea","ginger tea","masala tea","lemon tea"];
const index=teas.indexOf("ginger tea");
if(index>-1){
    teas.splice(index,1);
}
console.log(teas);
let cafinatedtea=0;
for(let i=0;i<teas.length;i++){{
    if(teas[i]!="ginger tea"){
        cafinatedtea++;
    }
}
}
console.log(cafinatedtea);
let uppercase=0;

for(let i=0;i<teas.length;i++){
    if(teas[i]===teas[i].toUpperCase()){
        uppercase++;
    }
}
// find most charecters
let mostchar=0;
let mostcharname="";
for(let i=0;i<teas.length;i++){
    if(teas[i].length>mostcharname.length){
        mostchar=teas[i].length;
        mostcharname=teas[i];
    }
}
// resverse array
const reversearray=[];
for(let i=teas.length-1;i>=0;i--){
    reversearray.push(teas[i]);
}
