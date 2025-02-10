// 90>=a
//80>=bb
//70>=c
//60>=d
//fail

let rand=Math.floor(Math.random()*100);
console.log(rand);

function gradecalculate(rand){
    if(rand>=90){
        return "A";
    }
    else if(rand>=80 && rand<=90){
        return "B";
    }
    else if(rand>=70 && rand<=80){
        return "C";
    }
    else if(rand>=60 && rand<=70){
        return "D";
    }
    else{
        return "Fail";
    }
}
let grade=gradecalculate(rand);
console.log(grade);



