/*     
     Ejercicio: operaciones aritmeticas
     Fecha: 20 de sept 2025
     Autor: jaime melendez */

let daysWorked = 22;
let valueDay = 5000; 
let salaryMultiplication;
let pension = 0.12;
let health = 0.6;
let arl = 0.052;
let netSalary;
let multiplication;
let discount;
let multiplicationHealth; 
let multiplicationArl;
let multiplicationPension;


// Procesos

salary = daysWorked * valueDay;
multiplication = salary * 0.12;
multiplication = salary * 0.6;
multiplication = salary * 0.052;
netSalary = salary - discount;

//Imprimer

console.log("the salary is: "+salary);
console.log("the salary is: "+multiplicationPension);
console.log("the salary is: "+multiplicationHealth);
console.log("the salary is: "+multiplicationArl);
console.log("the salary is: "+netSalary);