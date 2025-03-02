// let fname="hello"
// function sayname(){
//     fname="fff"
//     console.log(fname);
//     return;
//     inner();
// }

// 
// function increment(){
//     let count=0;
//    return function(){
//         count++;
//         return count
//    };
 
// }
// const x=increment();
// const y=increment();
// console.log(x());
// console.log(x());
// console.log(x());
// console.log(x());

// console.log(y());
// console.log(y());



// function createcounter(stepsize=1,initialvalue=0){
//     return function(){
//         initialvalue+=stepsize;
//         return initialvalue;
//     }
// }
// const li=createcounter(2,5);
// console.log(li());
// console.log(li());

function createinstance(){
    let store={
         value:10,
    }
    return function(){
        console.log(store);
        
    }

}