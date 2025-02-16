class person{
    constructor(fname,lname){
        this.fname=fname;
        this.lname=lname;
        //console.log(this.getfulname());
        ; //it aumatiocally log
    }
    getfulname(){
        return `${this.fname} & ${this.lname}`
    }
}
class eat extends person{
    constructor(fname,lname,food){
        super(fname,lname);
        this.food=food;
    }
    
}
const b=new eat('ram',"sam","butter")
const p1=new person('John','Doe');
const p2=new person("srinjoy","ghodh")

console.log(p1.getfulname());
console.log(b.getfulname());
// eat.prototype=peso.prototype