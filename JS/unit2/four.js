let a = 25;
let b = 40;
let c = 32;
let d = 50;

if (a >= b && a >= c && a >= d) {
  console.log(a + " is the largest");
} else if (b >= a && b >= c && b >= d) {
  console.log(b + " is the largest");
} else if (c >= a && c >= b && c >= d) {
  console.log(c + " is the largest");
} else {
  console.log(d + " is the largest");
}
