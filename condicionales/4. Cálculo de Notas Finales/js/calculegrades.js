/*     
     Ejercicio: calcule grades
     Fecha: 22 de sept 2025
     Autor: Christopher Gracia
*/
 

let gradeOne = 4.5;
let gradeTwo = 5.0;
let gradeThree = 3.0;
let percentageOne;
let percentageTwo;
let percentageThree;
let adition;

//proceso
 
percentageOne = gradeOne*0.20;
percentageTwo = gradeTwo*0.35;
percentageThree = gradeThree*0.45;


adition =percentageOne+percentageTwo+percentageThree;
console.log("the adition and is : " +adition);

if( adition >=4.5){
console.log("top grade");
}

else if( adition >4.5){
console.log("good grade");
} 

if( adition >= 3.0){
console.log("the note is average");
}

if( adition >= 3.0){
console.log("bad garde");
}
