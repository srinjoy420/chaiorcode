function patanehi(fn,dilay){
    console.log(arguments);

    let myid;
    return function(...args){
        clearTimeout(myid);
        myid=setTimeout((...args) => {
            fn.apply(this,args)

            
        }, dilay);
    }
    function greet(name){
        console.log(`hello ${name}`);
    }
    

}
let sachme=patanehi(()=>greet('hello'),3000)
sachme()