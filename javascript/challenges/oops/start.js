class person{
    constructor(fname,lname){
        this.fname=fname;
        this.lname=lname;
    }
    getfulname(){
        return `${this.fname} & ${this.lname}`
    }
}
// prototype

const p1=new person('John','Doe');
const p2=new person("srinjoy","ghodh")

console.log(p1.getfulname());
