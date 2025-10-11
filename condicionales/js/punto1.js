
/*     
     Ejercicio: are the three cuadres
     Fecha: 22 de sept 2025
     Autor: jaime melendez

*/

let squareOne;
let squareTwo;
let squareThree;
let sideOne = 5;
let sideTwo = 9;
let sideThree = 3;

//proceso

squareOne = sideOne*sideOne;
squareTwo = sideTwo*sideTwo;
squareThree = sideThree*sideThree;

console.log("squareOne is :" +squareOne)
console.log("squareTwo is :" +squareTwo)
console.log("squareThree is :" +squareThree)


if(squareOne == squareTwo ^ squareOne == squareThree ) {
        console.log("are equal" );
}

else if(squareOne == squareTwo ^ squareOne > squareThree){
         console.log("squareOne and squareTwo greater" );
}

else if(squareOne == squareThree ^ squareOne > squareTwo){
         console.log("squareOne and squareThree greater" );
}

else if(squareTwo == squareThree ^ squareTwo > squareOne){
         console.log("squareTwo and squareThree greater" );
}

else if(squareOne > squareTwo ^ squareOne > squareThree){
         console.log("squareOne is greater" );
}

else if(squareTwo > squareTwo ^ squareOne > squareThree){
         console.log("squareTwo is greater" );
}

else {
         console.log("squareThree is greater");
}