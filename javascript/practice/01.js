function patanehi(fn,dilay){
    console.log(arguments);

    let myid;
    return function(...args){
        clearTimeout(myid);
        myid=setTimeout((...args) => {
            fn.bind(this,args)

            
        }, dilay);
    }
    

}
patanehi()