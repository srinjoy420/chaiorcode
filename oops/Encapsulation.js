// encaptutatio:->The process of wrapping properties and functions within a single unit is known as encapsulation. 
class address{
    constructor(city,state){
        this.city=city;
        this.state=state;
    }
    pin_code(pin){
        this.pin=pin;
    }
    getfulladd(){
        return `${this.city},${this.state},${this.pin}`
    }
}

let srinjoy=new address("mahanad","westbengal");
srinjoy.pin_code(712149);
console.log(srinjoy.getfulladd());