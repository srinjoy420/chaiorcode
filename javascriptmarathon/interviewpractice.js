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

//Convert Temperatures

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
const farenhightweather=weather.map((faren)=>(faren.temp*9/5)+32)
// console.log(`${farenhightweather}f`);

// convert to uppercase
const words = ["hello", "world", "javascript"];
const capitalfirst=words.map((word)=>word[0].toLocaleUpperCase()+word.slice(1))
// console.log(capitalfirst);

// name short form 
const names = ["John Doe", "Jane Smith", "Alice Johnson"];
const nameshortform = names.map((pname) => {
    const parts = pname.split(" ");  // Split full name into first and last name
    return parts[0][0] + "." + parts[1][0] + "."; // Take first letters and join them
});

console.log(nameshortform);






