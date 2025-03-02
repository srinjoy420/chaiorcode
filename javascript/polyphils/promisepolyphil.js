// function wait(secoend) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve();
//         }, secoend * 1000);
//     })
// }
// wait(10).then(() => console.log("promise after 10sec")).catch(() => console.log("error")).finally(() => console.log("finally"))

class MyPromise {
    constructor(executor) {
        this._state = 'pending';
        this._successCallbacks = [];
        this._rejectCallbacks = [];
        this._finalcallbacks = [];
        
        
        
        executor(this.resolveFunction.bind(this), this.rejectFunction.bind(this));
    }
    
    then(cb) {
        this._successCallbacks.push(cb);
        this._finalcallbacks.push(cb);
        return this;
        
    }
    
    catch(cb) {
        this._rejectCallbacks.push(cb);
        this._finalcallbacks.push(cb);
        return this;
        
    }
    
    finally(cb) {
        this._finalcallbacks.push(cb);
        return this;
    }
    
    resolveFunction() {
        this._state = "fulfilled";
        this._successCallbacks.forEach(cb => cb());
    }
    
    rejectFunction() {
        this._state = "rejected";
        this._rejectCallbacks.forEach(cb => cb());
    }
    
}


function wait(secoend) {
    return new MyPromise((resolve, reject) => {
        setTimeout(() => {
            reject();
        }, secoend * 1000);
    })
}
wait(5).then(() => console.log("promise after 5sec")).catch(() => console.log("error"))