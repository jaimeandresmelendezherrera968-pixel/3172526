/*     
     Ejercicio: ley newton movement
     Fecha: 23 de sept 2025
     Autor: Christopher Gracia
*/

let force = 5;
let mass =3;
let speed =0;
let time = 1;
let secounds = 0;
let initialSpeed = 7;
let totalDistance = 0;
let aceleraction;

while(force>=0){
 aceleration = force/mass
 speed = initialSpeed + aceleration*time
 totalDistance = speed*time
 secounds = secounds +1;
 force = force-1;

}

console.log("the totaldistance is :" +totalDistance);
console.log("the secounds is :" +secounds);


