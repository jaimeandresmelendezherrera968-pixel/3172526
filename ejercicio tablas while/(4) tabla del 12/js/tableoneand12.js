/*
    Titulo: Multiplication 
    Autor: jaime
    Fecha:septiembre de 2025
*/

let table, multiplier, result
let startTable = 2
let endTable = 12
let maxMultiplier = 10
let between10and20 = 0
let between20and50 = 0
let greaterThan50 = 0

//Process
for(table = startTable; table <= endTable; table++){
    for(multiplier = 1; multiplier <= maxMultiplier; multiplier++){
        result = table * multiplier

        if(result > 10 && result <= 20){
            between10and20++
        }
        else if(result > 20 && result <= 50){
            between20and50++
        }
        else if(result > 50){
            greaterThan50++
        }

   if(result % 2 === 0){
     console.log("Even result adjusted: " + (result + 1))
        }
    }
}

console.log("Results between 10 and 20: " + between10and20)
console.log("Results between 20 and 50: " + between20and50)
console.log("Results greater than 50: " + greaterThan50)
