const patanehi = (fn, delay)=>{
    let myid = null;
    return (...args) => {
        if (myid === null) {
            fn(...args);

            myid = setTimeout(() => {
                // fn.apply(this,args);
                myid = null;
            }, delay);

        }
    }
}
patanehi()