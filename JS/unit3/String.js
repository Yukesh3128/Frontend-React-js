let FName="Hello";
let LName="World";

console.log("FName - "+FName+" LName - "+LName);
console.log("hello 'World'");
console.log('hello "World"');
console.log(`hello "world" 'home'`);
console.log(`FName - ${FName} LName - ${LName}`);

// String Methods
let str1="Yukesh";
// length - 1, index/position - 0
console.log("Length : ", str1.length);
console.log("Upper : ", str1.toUpperCase());
console.log("Lower :", str1.toLowerCase());

let str2="YukeshVenkat";
console.log(str2.indexOf("V"));
console.log(str2.lastIndexOf("e"));
console.log(str2.charAt(0));
console.log(str2.charAt(2));

let str3="Welcome";
console.log(str3.indexOf("l"));
console.log(str3.lastIndexOf("e"));

let msg="Hello world home";
console.log(msg.includes("Hello"));
console.log(msg.startsWith("Hello"));
console.log(msg.endsWith("home"));

let text="Hello yukesh";
console.log(text.slice(0,10));

let text2="         String           ";
console.log(text2);
console.log(text2.trim());
console.log(text2.trimEnd());
console.log(text2.trimStart());

let msg2="Hi, welcome";
console.log(msg2.replace("Hi", "Hello"))
console.log(msg2.replaceAll("Hi", "Hello"));

let data="Yukesh venkat";
console.log(data.split(" "));
console.log(data.repeat(5));

let str4="Hello";
let str5="World";
console.log(str4+ " "+str5);
console.log(str4.concat(" ",str5));

let check="Yukesh";
console.log(check.toString());
