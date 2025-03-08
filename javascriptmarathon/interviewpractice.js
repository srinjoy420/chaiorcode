let expenses=[
    {
        description:"Groceries",
        amount:75,
        catagory:"food"
    },
    {
        description:"Rent",
        amount:1500,
         catagory:"utilites"
    },
    {
        description:"Gas",
        amount:100,
         catagory:"esential"
    },
    {
        description:"Eating out",
        amount:200,
         catagory:"food"
    }
]
let totalamound=expenses.map((rate)=>rate.amount).reduce((sum,price)=>sum+price,0);
// console.log(totalamound);

// Convert Temperatures

const weather=[
    {
        temp:28,
        day:"sunny"
    },
    {
        temp:43,
        day:"hot"
    },
    {
        temp:28,
        day:"windy"
    },
    {
        temp:0,
        day:"cold"
    }
]
const farenhightweather=weather.map((faren)=>(faren.temp*9/5)+32).reduce((sum,temp)=>sum+temp,0)
//  console.log(`${farenhightweather}f`);

// // convert to uppercase
const words = ["hello", "world", "javascript"];
const capitalfirst=words.map((word)=>word[0].toLocaleUpperCase()+word.slice(1))
// console.log(capitalfirst);

// name short form 
const names = ["John Doe", "Jane Smith", "Alice Johnson"];
const nameshortform = names.map((pname) => {
    const parts = pname.split(" ");  // Split full name into first and last name
    return parts[0][0] + "." + parts[1][0] + "."; // Take first letters and join them
});

// console.log(nameshortform);

// problem combined using map filter and reduce
const students = [
    { name: "Alice", score: 42 },
    { name: "Bob", score: 76 },
    { name: "Charlie", score: 58 },
    { name: "David", score: 90 },
    { name: "Eve", score: 33 }
  ];

const passstudent=students.filter((students)=>students.score>=50).map((students)=>students.name.toUpperCase())
// console.log(passstudent);
let average=students.filter((students)=>students.score>=50).map((students)=>students.score)
let avgscore=average.reduce((sum,score)=>sum+score,0)/average.length;
// console.log(avgscore);
// next problem
const employees = [
    { name: "Alice", salary: 45000 },
    { name: "Bob", salary: 52000 },
    { name: "Charlie", salary: 48000 },
    { name: "David", salary: 60000 },
    { name: "Eve", salary: 70000 }
  ];

  
const salaryhike=employees.map((emp)=>{
   return{
    name:emp.name,
    salary:emp.salary*1.10
   }
})
 console.log(salaryhike);
 let total=salaryhike.filter((emp)=>emp.salary>50000).reduce((sum,salary)=>sum+salary.salary,0);

 console.log(total);
 






