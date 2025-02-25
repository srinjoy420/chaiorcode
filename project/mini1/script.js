function updateclock(){
const time=document.getElementById("time");
const date=document.getElementById("date");

const now=new Date();
console.log(now);
const hours=now.getHours()%12 || 12;
// console.log(hours);
// const time1=0 || 12
// console.log(time1);
const minutes=now.getMinutes().toString().padStart(2,"0");

const seconds=now.getSeconds().toString().padStart(2,"0");

const ampm=hours>=12 ? "PM" : "AM";
time.textContent=`${hours}.${minutes}.${seconds}.${ampm}`;
const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
};
date.textContent = now.toLocaleDateString(undefined, options);

}

setInterval(updateclock,1000)
updateclock()