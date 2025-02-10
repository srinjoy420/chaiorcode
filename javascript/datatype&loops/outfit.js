// server call,rainy,cloudy,sunny
// let weather="rainy";
// conditional operator
let weather = ["rainy", "cloudy", "sunny"];

let i = Math.floor(Math.random() * weather.length);
// console.log(weather[i]);
if (weather[i] == "rainy") {
    console.log("Take an umbrella");
}
else if (weather[i] == "cloudy") {
    console.log("Wear a jacket");
}
else {
    console.log("Dress appropriately");
}

