const text = "Sam is good at codingschool"

console.log(text.replace("codingschool" , "school"));

console.log(text.replace("Sam", "Susi").replace("codingschool", "school"));

console.log(text.replace("codingschool","tennis"));


const myVar1 = text.replace("codingschool", "school");
const myVar2 = text.replace("Sam", "Susi").replace("codingschool", "school");
const myVar3 = text.replace("codingschool", "tennis");

document.write(myVar1 + "<br>");
document.write(myVar2 + "<br>");
document.write(myVar3 + "<br>");