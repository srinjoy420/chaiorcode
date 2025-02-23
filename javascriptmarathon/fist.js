// const sym=Symbol()
// // console.log(typeof(sym));
// // console.log(Math.max(3,4));
// console.log(Math.floor(Math.random()*6)+1);
// let array1 = [1, 2, 3];
// // let array2 = [4, 5, 6];
// // let mergedArray = array1.concat(array2);
// // console.log(mergedArray)
// let array2=[...array1,1];// unpack array
// console.log(array2);

// function truthy(value){
//     if(value){
//         console.log("truthy");
        
//     }
//     else{
//         console.log("falsy");
        
//     }
// }
// truthy("")
// function login(username,password){
//     if(!username==="admin" && password==="1234"){
//         console.log("login");
        
//     }
//     else{
//         console.log("Invalid credentials");
        
//     }
// }
// login("admin","1234")

let salesdata=[
    {product:"apple",price:10},
    {product:"orange",price:15},
    {product:"banana",price:5}
]
let initialvalue=0;
let totalsales=salesdata.reduce((acc,sale)=>acc+sale.price,0)
console.log(totalsales);


const inventory=[
    {product:"apple",quantity:10},
    {product:"orange",quantity:5},
    {product:"banana",quantity:15}
]
// let filtervalue=inventory.filter((item)=>(item.quantity<15))
let filtervalue=inventory.filter((item)=>{
    return item.quantity<15;
})
// console.log(filtervalue);

// console.log(lowstockitem);
let useractivity=[
    {user:"user1",activity:45},
    {user:"user2",activity:88},
    {user:"user1",activity:72},
    {user:"user3",activity:33},
    
 
];
let mostactive=useractivity.reduce((maxuser,user)=>user.activity>maxuser.activity ? user :maxuser)
console.log(mostactive);



