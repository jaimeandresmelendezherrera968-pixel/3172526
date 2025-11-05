/*
     Ejercicio: ejercicio1
     Fecha: 29 sept 2025
     Autor: jaime melendez 
*/



let tablaMatriz=[];
let tabla;
let multiplicar;
for(tabla =1; tabla <10; tabla++){
 let multiplicador =[];
 for (let numero =1; numero <=10; numero++){
   multiplicar= numero *tabla;
   multiplicador.push(multiplicar);
   }
  tablaMatriz.push(multiplicador);
}
console.log(tablaMatriz);
