/*     
     Ejercicio: calculate friction
     Fecha: 25 de sept 2025
     Autor: Christopher Gracia
*/

let forceFriction =0;
let coefficientFriction =5;
let numberMass = 3;
let normalForce =5;
let mass = 12;
let gravity = 9.8;
let objects =3;

//proceso

for(objects=1; objects<= numberMass; objects++){
    normlaForce=mass*gravity;
    forceFriction= coefficientFriction*normalForce;
}
    console.log("the normalForce is :" +normalForce);
    console.log("the forceFriction is :" +forceFriction);



