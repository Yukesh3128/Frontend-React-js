// FOR IN LOOP()

let ipl = ["MI", "CSK", "GT"];

for (let i in ipl) {
  console.log(i, ipl[i]);
}

// Array 

let numbers = [5, 10, 15, 20, 25, 30];

// FOR OF LOOP() 
console.log("FOR OF:");
for (let num of numbers) {
    console.log(num);
}

// REDUCE()
let sum = numbers.reduce((acc, val) => acc + val, 0);
console.log("Sum using reduce:", sum); // 105

let product = numbers.reduce((acc, val) => acc * val, 1);
console.log("Product using reduce:", product); // 112500000

// FIND()

let firstBig = numbers.find(n => n > 15);
console.log("First > 15:", firstBig); // 20

// FINDINDEX()

let firstBigIndex = numbers.findIndex(n => n > 15);
console.log("Index of first > 15:", firstBigIndex); // 3

// EVERY()

let allEven = numbers.every(n => n % 5 === 0);
console.log("All divisible by 5:", allEven); // true

let allGreater100 = numbers.every(n => n > 100);
console.log("All > 100:", allGreater100); // false

// SOME()

let hasEven = numbers.some(n => n % 2 === 0);
console.log("Any even number?:", hasEven); // true

let hasAbove50 = numbers.some(n => n > 50);
console.log("Any > 50?:", hasAbove50); // false