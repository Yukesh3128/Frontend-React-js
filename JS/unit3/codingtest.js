// Reverse a string without using built-in functions
function reverseString(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}
console.log(reverseString("yukesh"));

// Check if a string is a palindrome
function isPalindrome(str) {
    let left = 0;
    let right = str.length - 1;

    while (left < right) {
        if (str[left] !== str[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}
console.log(isPalindrome("madam")); 
console.log(isPalindrome("hello"));  

// Find factorial of a number (using loop and recursion)
function factorialLoop(n) {
    let fact = 1;
    for (let i = 1; i <= n; i++) {
        fact *= i;
    }
    return fact;
}
console.log(factorialLoop(5));

// Find the largest of three numbers
function largestOfThree(a, b, c) {
    if (a >= b && a >= c) {
        return a;
    } else if (b >= a && b >= c) {
        return b;
    } else {
        return c;
    }
}
console.log(largestOfThree(10, 25, 15));

// Check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    if (num === 2) return true; 
    if (num % 2 === 0) return false;

    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) return false;
    }
    return true;
}
console.log(isPrime(7)); 
console.log(isPrime(12));

// Generate Fibonacci series (loop and recursion)
function fibonacciLoop(n) {
    let a = 0, b = 1;
    let series = [];

    for (let i = 0; i < n; i++) {
        series.push(a);
        let next = a + b;
        a = b;
        b = next;
    }
    return series;
}
console.log(fibonacciLoop(7));

// Find the sum of digits of a number
function sumOfDigits(num) {
    let sum = 0;
    while (num > 0) {
        sum += num % 10;      
        num = Math.floor(num / 10); 
    }
    return sum;
}
console.log(sumOfDigits(1234)); 

// Find the largest and smallest number in an array


