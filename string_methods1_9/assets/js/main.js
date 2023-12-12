
const text1 = "Sam is going to codingschool"
const text2 = "Susi"
const text3 = "and"

document.write(text1.replace("codingschool","school")+ " " + text3.concat()+ " " + text2.replace("Susi", "to the movie theater") + "<br>")

document.write(text1.replace("codingschool","the movie theater")+ "<br>")

document.write(text2.concat()+ " " + text3.concat()+ " " + text3.replace("and","Sam are going to school") + "<br>")

document.write(text2.concat()+ " " + text3.concat()+ " " + text3.replace("and", "Sam are going to gym")+ " " + text3.concat()+ " " + text2.replace("Susi", "to the movie theater")+ "<br>")

document.write(text1.replace("codingschool", "school")+ " " + text3.concat(" " + text2.replace("Susi", "to the movie theater"))+ "<br>");

   

