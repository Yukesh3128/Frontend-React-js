let units = 350; 
let bill = 0;


if (units <= 100) {
  bill = 0;                      
} else if (units <= 200) {
  bill = (units - 100) * 2.25;
} else if (units <= 400) {
  bill = (100 * 2.25) + (units - 200) * 4.50;
} else if (units <= 500) {
  bill = (100 * 2.25) + (200 * 4.50) + (units - 400) * 6.00;
} else if (units <= 600) {
  bill = (100 * 2.25) + (200 * 4.50) + (100 * 6.00) + (units - 500) * 8.00;
} else if (units <= 800) {
  bill = (100 * 2.25) + (200 * 4.50) + (100 * 6.00) + (100 * 8.00) + (units - 600) * 9.00;
} else if (units <= 1000) {
  bill = (100 * 2.25) + (200 * 4.50) + (100 * 6.00) + (100 * 8.00) + (200 * 9.00) + (units - 800) * 10.00;
} else {
  bill = (100 * 2.25) + (200 * 4.50) + (100 * 6.00) + (100 * 8.00) + (200 * 9.00) + (200 * 10.00) + (units - 1000) * 11.00;
}

console.log("Units Consumed : " + units);
console.log("EB Bill Amount : ₹" + bill);
