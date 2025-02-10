const teas={
    name: 'Green Tea',
    type:"green",
    caffien:"low"
}
teas.origin="china"
// remove type property
delete teas.type
//check has porperty orgin
console.log(teas.hasOwnProperty('origin'))
// for in loop
for(let key in teas){
    console.log(key,teas[key]);
}
const myteas={
    greentea:{
        name: 'Green Tea',
        type:"green",
        caffien:"low",
        cups:{
            small:2,
            medium:3,
            large:4
        }
    },
    blacktea:{
        name: 'Black Tea',
        type:"black",
        caffien:"high",
        milk:ture
    }
}
// copy of teas objects
const teas2=Object.assign({},teas);
const teacopy={...teas};
console.log(myteas);


