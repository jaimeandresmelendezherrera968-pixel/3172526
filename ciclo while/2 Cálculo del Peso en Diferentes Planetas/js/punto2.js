/*     
     Ejercicio: ley de newton
     Fecha: 23 de sept 2025
     Autor: jaime melendez
*/


let tierraGravity = 9.81 ;
let marteGravity  = 3.71 ;
let jupiterGravity = 24.79 ;


let counter = 0;
let mass = 6;
let totalpesoGravity = 0;

//proceso

while(mass>0){

  let pesoTierra = mass * tierraGravity;
 let pesoMarte  = mass *  marteGravity;
   let pesoJupiter = mass *  jupiterGravity;

totalPesoGravity = pesoTierra + pesoMarte + pesoJupiter; 
mass--;
counter++;
}





console.log ("la suma de todos los pesos de la gravedad son :"+totalPesoGravity);




console.log ("el calculo se hizo un total de :"+ counter+" veces ");





