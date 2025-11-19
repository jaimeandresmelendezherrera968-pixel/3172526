/*     
     Ejercicio: table 9 con impar y par
     Fecha: 24 de sept 2025
     Autor:  jaime
*/


let number = 9;
let counter = 1;
let value;



//proceso

while(counter <= 5){
  console.log(number + " x " + counter + " = " + (number*counter));

  if(counter%2==0){
       value="bazz";
}
  else{
       value="buzz";
}
console.log(counter + ": " + value);
     counter = counter + 1;

}
