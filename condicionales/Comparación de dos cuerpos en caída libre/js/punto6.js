/*
Titulo: ciclo while
Autor: jaime melendez

*/

let massOne = 14 ;
let massTwo = 5;
let forceOne ;
let forceTwo; 
let gravity = 9.8;
let bodyOne;
let bodyTwo;
//proceso 

forceOne = massOne * gravity;
forceTwo = massTwo * gravity;

console.log("forceone:"+forceOne);
console.log("forcetwo:"+forceTwo);


if (forceOne > forceTwo){
console.log("bodyOne is elderly");
}

else if (forceOne < forceTwo){
console.log("bodyTwo is elderly");
}

else if (forceOne == forceTwo){
console.log("bodyTwo is elderly");
}