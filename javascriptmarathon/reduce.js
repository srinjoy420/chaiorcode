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
// let expensereport=expenses.reduce((report,expense)=>{
//     // report[expense.catagory]+=expense.amount;
//     report[expense.catagory]=(report[expense.catagory|| 0])
//     return report;
// },{food:0,Groceries:0,esential:0}
    
// )
// console.log(expensereport);


let tasks=[
    {
        description:"Clean the house",
        completed:true,
        priority:3
    },
    {
        description:"Buy groceries",
        completed:false,
        priority:1
    },
    {
        description:"Do the dishes",
        completed:true,
        priority:2
    }
]

// let pendingsottedtask=tasks.filter((task)=>!task.completed).sort((a,b)=> a.priority-b.priority)

// console.log(pendingsottedtask);

let movierating=[
    {
        title:"Inception",
        rating:[2,3,6],
        released:2010
    },
    {
        title:"The Dark Knight",
        rating:[2,3,6],
        released:2008
    },
    {
        title:"The Matrix",
        rating:[2,3,4],
        released:1999
    }
]


let avgratings=movierating.map((movie)=>{
    let total=movie.rating.reduce((sum,rating)=>sum+rating,0);
    let average=total/movie.rating.length;
    movie.rating=average;
    return movie
    return {title:movie.title,avgratings:average.toFixed(2)}
})