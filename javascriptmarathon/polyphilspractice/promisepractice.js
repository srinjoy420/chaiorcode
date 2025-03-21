// const myPromise = new Promise((resolve, reject) => {
//     let success = true; // Change this to false to see rejection
//     setTimeout(() => {
//         if (success) {
//             resolve("Operation Successful!");
//         } else {
//             reject("Operation Failed!");
//         }
//     }, 2000);
// });

const { rejects } = require("assert");
const { error, log } = require("console");
const { resolve } = require("path");

// // Consuming the Promise
// myPromise
//     .then(result => console.log(result))  // Runs when resolved
//     .catch(error => console.log(error))   // Runs when rejected
//     .finally(() => console.log("Promise Completed")); // Always runs

// problem one in promise
// function fetchUserData() {
//     return new Promise((resolve, reject) => {
//         console.log("fetching user data...");

//         setTimeout(() => {
//             let issucess = Math.random() > 0.5;
//             if (issucess) {
//                 resolve({ name: "srinjoy", id: 55 })
//             }
//             else {
//                 reject(new Error("Failed to fetch user data"))
//             }

//         }, 3000);
//     })
// }

// fetchUserData().then(usrdata => console.log("get the user data", usrdata)).catch(error => console.log("error", error)).finally(() => console.log("something"));

// problem two in promise:-Problem 2: Chaining Promises 🍔🚀
// function reciveorder() {
//     return new Promise((resolve, reject) => {
//         console.log("reciving your order...");



//         setTimeout(() => {
//             let orderrecived = true
//             if (orderrecived) {
//                 resolve("oder recived")
//             }
//             else {
//                 reject(new Error("Failed to receive order"))
//             }
//         }, 2000);
//     })
// }

// function cookingstart() {
//     return new Promise((resolve, reject) => {
//         console.log("cooking your order...");
//         setTimeout(() => {
//             let cookingstarted = true
//             if (cookingstarted) {
//                 resolve("cooking started")
//             }
//             else {
//                 reject("Failed to cook order")
//             }

//         }, 3000)


//     })
// }

// function ready() {
//     return new Promise((resolve, reject) => {
//         console.log("the order is ready...");
//         setTimeout(() => {
//             let orderready = true
//             if (orderready) {
//                 resolve("order ready")
//             }
//             else {
//                 reject(new Error("Failed to prepare order"))
//             }

//         }, 1000);

//     })
// }
// reciveorder()
//     .then(response => {
//         console.log(response);
//         return cookingstart();
//     })
//     .then(response => {
//         console.log(response);
//         return ready();
//     })
//     .then(response => {
//         console.log(response);
//         console.log("Enjoy your meal! 🍽️");
//     })
//     .catch(error => console.log("Error:", error.message));


// Problem 3: Using Promise.all 🚀

// function promise1(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             let result=true
//             if(result){
//                 resolve("promise1 resolved")
//             }
//             else{
//                 reject(new Error("promise1 rejected"))
//             }
            
//         }, 1000);
//     })
// }
// function promise2(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             let result=true
//             if(result){
//                 resolve("promise2 resolved")
//             }
//             else{
//                 reject(new Error("promise2 rejected"))
//             }
            
//         }, 2000);
//     })
// }

// function promise3(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             let result=true
//             if(result){
//                 resolve("promise3 resolved")
//             }
//             else{
//                 reject(new Error("promise3 rejected"))
//             }
            
//         }, 3000);
//     })

// }

// Promise.all([promise1(), promise2(), promise3()])
//     .then(response=>{
//         console.log("all promise resolve",response);
        
//     })
//     .catch(err=>{
//         console.log("error",err);
//     })


