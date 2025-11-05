/*     
     Ejercicio: mechanical work
     Fecha: 23 de sept 2025
     Autor: jaime melendez
*/


let mechanicalWork =6;
let distance = 4;
let totalwork =0;
let counter =0;

while(distance<0){
     mechanicalWork= force*distance;
     totalwork = totalwork+mechanicalWork,
     counter = counter +1;
     distance = distance -1;
}
console.log("the mechanicalWokr is the : " +mechanicalWork)
console.log("the counter is :" +counter);
