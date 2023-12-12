
const text = "Susi is back from codingschool";

console.log(text.substring(0,4));

console.log(text.substring(4,7));

console.log(text.substring(24,30));

console.log(text.substring(0,7) + " " + text.substring(24,30));


const myVar1 = text.substring(0, 4);
const myVar2 = text.substring(4, 7);
const myVar3 = text.substring(24, 30);
const myVar4 = text.substring(0, 7) + " " + text.substring(24, 30);

document.write(myVar1 + "<br>");
document.write(myVar2 + "<br>");
document.write(myVar3 + "<br>");
document.write(myVar4 + "<br>");
