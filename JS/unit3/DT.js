// Current date & time
let now = new Date();
console.log("Current time:", now);

// Date
let day = now.getDate();
let month = now.getMonth() + 1; // Month starts from 0
let year = now.getFullYear();   // jan-0 , dec-11
console.log(`Date: ${day}-${month}-${year}`);

// Time
let hours = now.getHours();
let minutes = now.getMinutes();
let seconds = now.getSeconds();
console.log(`Time: ${hours}:${minutes}:${seconds}`);

// Day
let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
console.log("Day:", days[now.getDay()]);
