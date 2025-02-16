

// Person.prototype.describe = function() {
//     console.log(`${this.name}`);
// }

// function greet(name) {
//     console.log(`Hello ${name}`);
//     return new Person(name);
// }
// greet.describe()

function createcounter(){
    let count=0
    return function(){
        count++;
        return count;
    }
}
const counter=createcounter();
console.log(counter());
// function onef(){
//     let myname="sachin";
// }
// console.log(myname);

(function(){
    console.log("hello");
    
})()
