// data type
// number
age=20
console.log(age)
console.log(typeof(age))

// undefined
var name
console.log(name)
console.log(typeof(name))

// null
a=null
console.log(a)
console.log(typeof(a))

// boolean
a=true
console.log(a)
console.log(typeof(a))

// array
cars=["gtr","bmw","benz","audi"]
console.log(cars)
console.log(typeof(cars))

// arithmetic operator
a=90
b=3
c=a+b
console.log("addition",c)
console.log("subraction",a-b)
console.log("multiplication",a*b)
console.log("division",a/b)
console.log("modulus",a%b)
console.log("star",a**b)

// assignment operator
a=35
b=10
a+=b
console.log("+=",a)
console.log("-=",a-=b)
console.log("=",a=b)
console.log("/=",a/=b)
console.log("%=",a%=b)
console.log("=",a**=b)

// pre increment, post 
a=10
b=a++
console.log(b)
console.log(a)

a=22
b=a--
console.log(a)
console.log(b)

// relational operator
a=6
b=6
console.log(a>b)
console.log(a>=b)
console.log(a!=b)
console.log(a<b)
console.log(a<=b)
console.log(a===b)
console.log(a!==b)

// celsius to fahrenheit 
c=30
f=( c *9/5 ) + 32
console.log(f)

// fahrenheit to celsius
f=40
c=(f-32) * 5/9 
console.log(c)

// kilometer to miles 
km=19
mi=(km*0.621371)
console.log(mi)

// miles to lm
miles=40
km=(miles*1.60934)
console.log(km)

// age calculator
a=2025
b=(a-2005)
console.log("age",b)

// simple interest
p=50000
r=5
t=2
c=(p*r*t)/100
console.log("simple interst",c)

// salary
yearly=500000
month=yearly/12
week=yearly/52
daily=yearly/365
hour=daily/8
console.log(month)
console.log(week)
console.log(daily)
console.log(hour)