/*     
     Ejercicio: ley newton 2
     Fecha: 23 de sept 2025
     Autor: Christopher Gracia
*/

let reactionForce =2;
let appliedForce =3 ;
let totalForce =0;
let counter =0;


while(appliedForce>0){
     reactionForce = -appliedForce;
     totalForce = totalForce+appliedForce;
     counter = counter +1;
     appliedForce = appliedForce -1;
}

console.log("the totalforce is the :" +totalForce);
console.log("the counter is the :" +counter);





