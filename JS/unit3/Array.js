//Type
{
  let color=["Red", "Green", "Blue"]
  console.log(color)
  console.log(typeof(color))
}
//Array
{
  let color=new Array("Red", "Green", "Orange", "Blue")
  console.log(color)
}
//Push
{
  let fruits=["Apple", "Banana"];
  console.log(fruits)
  console.log(fruits.push("Mango"))
  console.log(fruits)
}
//Pop
{
  let fruits=["Apple", "Banana", "Mango"]
  console.log(fruits.pop()) // removes Mango
  console.log(fruits)
}
//Shift
{
  let fruits=["Apple", "Banana", "Mango"]
  console.log(fruits.shift()) // removes Apple
  console.log(fruits)
}
//Unshift
{
  let fruits=["Banana", "Mango"]
  console.log(fruits.unshift("Apple"))
  console.log(fruits)
}
//Length
{
  let nums=[1,2,3,4,5]
  console.log(nums.length)
  console.log(nums[1])
}
//Index
{
  let colors=["red", "green", "blue", "red"]
  console.log(colors.indexOf("red")) // 0
  console.log(colors.lastIndexOf("red")) // 3
}
//Includes
{
  let color=["red", "green", "blue"]
  console.log(color.includes("green"))
  console.log(color.includes("yellow"))
}
//Join
{
  let color=["red", "green", "blue"]
  console.log(color.join(" & "))
}
//Reverse
{
  let nums=[1,2,3,4,5,9,8,7,6]
  nums.reverse()
  console.log(nums)
}
//Sort
{
  let alp=["a","s","d","f","g","h","j","k","l","m","n","b","v","c","x","z","q","w","e","r","t","y","u","i","o","p"]
  alp.sort() // A → Z
  alp.reverse() // Z → A
  console.log(alp)
}
//Numerical sort
{
  let nums=[1,2,3,4,5,10,20,50,40,30,500,400,200,300,100]
  nums.sort((a,b)=>a-b) // numerical sort
  console.log(nums)
}
//Merged
{
  let a=[1,2,3,4,5]
  let b=[6,7,8,9,0]
  let merged=a.concat(b)
  console.log(merged)
  console.log(a+b) // gives string "1,2,3,4,56,7,8,9,0"
}
//Slice
{
  let colors=["red", "green", "blue", "yellow", "orange"]
  let sliced=colors.slice(0,3)
  console.log(sliced)
}
//Splice
{
  let topics=["HTML", "CSS", "BS", "JavaScript", "React JS", "Redux", "Redux Toolkit", "Java", "Python", "Spring Boot"]
  topics.splice(1,5,"PostMan API")
  console.log(topics)

  topics.splice(1,0,"XML","C","C++")
  console.log(topics)

  topics.splice(1,1)
  console.log(topics)
}
//Foreach
{
  let nums=[1,2,3,4,5,6,7,8,9,10]
  nums.forEach(value => console.log(value*5))
}
//Map
{
  let nums=[1,2,3,4,5]
  let answer=nums.map(value => value*5)
  console.log(answer)
}
//Map
{
  let nums=[2,,4,6,8,10]
  let answer=nums.map(value => value/5)
  console.log(answer)
}
//Filter
{
  let nums=[1,2,3,4,5,6,7,8,9,10]
  let even=nums.filter(n => n%2===0)
  console.log(even)
  let odd=nums.filter(n => n%2!==0)
  console.log(odd)
}
