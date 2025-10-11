/*
    Titulo:  table
    Autor: Johan archila 
    Fecha:septiembre de 2025
*/

let table, multiplier, result
let startTable = 1
let endTable = 5
let maxMultiplier = 10
let evenCount = 0
let oddCount = 0

//Process
for(table = startTable; table <= endTable; table++){
  for(multiplier = 1; multiplier <= maxMultiplier; multiplier++){
  result = table * multiplier

if(result % 2 === 0){
console.log(result + " is even")
evenCount++
} else {
console.log(result + " is odd")
oddCount++
 } }
}

console.log("Total even numbers: " + evenCount)
console.log("Total oddCount :" + oddCount);