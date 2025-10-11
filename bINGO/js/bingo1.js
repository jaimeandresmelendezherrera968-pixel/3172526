/*
 * Bingo con Arrays y Patrones
 * Autor: jaime andres 
 * Fecha: 2025-09-30
 */


/* Hacer un bingo con una matriz */

let matrizBingo = [  ];
let mult;
let i;
let j;

for (i = 1; i <= 5; i++) {
  let fila = [  ];
  for (j = 1; j <= 5; j++) {
    mult = 2 * i + 10 * (j - 1);
    fila.push(mult);
  }
  matrizBingo.push(fila);
}
console.table("matrizBingo");
console.log("B  I  N  G  O");

for (let i = 0; i < 5; i++) {
  console.log(matrizBingo[i].join("   "));
}

console.log("--------------");
console.log("X:");
for (i = 0; i < 5; i++) {
  fila = " ";
  for (j = 0; j < 5; j++) {
    if (i === j || i + j === 4) {
      fila += matrizBingo[i][j] + "  ";
    } else {
      fila += "   ";
    }
  }
  console.log(fila);
}

console.log("--------------");
console.log("L:");

for (i = 0; i < 5; i++) {
    fila = "";
    for (j = 0; j < 5; j++) {
        if (j === 0 || i === 4 && i + j === 5 || i === 4 && i + j === 6 ) {
            fila += matrizBingo[i][j] + "    ";
        } else {
            fila += "    ";
        }
    }
    console.log(fila);
}

console.log("--------------");
console.log("J:");
for (i = 0; i < 5; i++) {
    fila = "  ";
    for (j = 0; j < 5; j++) {
        if (j === 4 || i === 4 &&  i + j === 6 || i === 4 && i + j === 7 ) {
            fila += matrizBingo[i][j] + " ";
        } else {
            fila += "   ";
        }
    }
    console.log(fila);
}

console.log("--------------");
console.log("I:");
for (i = 0; i < 5; i++) {
    fila = "";
    for (j = 0; j < 5; j++) {
        if (i === 0 && i+j === 1 || i === 0 && i+j === 2 || i === 0 && i+j === 3 || j === 2 || i === 4 && i+j === 5 || i === 4 && i+j === 6 || i === 4 && i+j === 7) {
            fila += matrizBingo[i][j] + " ";
        } else {
            fila += "   ";
        }
    }
    console.log(fila);
}

console.log("-----------------");
console.log("B:");
for (i = 0; i < 5; i++) {
    fila = "";
    for (j = 0; j < 5; j++) {
        if (j === 0 || j === 2 || i === 0 && j === 1 || i === 2 && j === 1 || i === 4 && j === 1) {
            fila += matrizBingo[i][j] + " ";
        } else {
            fila += "    ";
        }
    }
    console.log(fila);
}

console.log("------------------");
console.log("V:");
for (i = 0; i < 5; i++){
  fila = "";
  for (j = 0; j < 5; j++) {
    if (j === 0 && i === 0 || j === 0 && i === 1 || j === 0 && i === 2 || i === 3 && j === 1 || i === 4 && j === 2 ||  i === 3 && j === 3 || j === 4 && i === 2 || j === 4 && i === 1 || j === 4 && i === 0) {
      fila += matrizBingo[i][j] + " ";
    } else {
      fila += "  ";
    }
  }
  console.log(fila);
}

console.log("---------------------");
console.log("Q");
for (i = 0; i < 5; i++) {
    fila = "";
    for (j = 0; j < 5; j++) {
        if (i === 0 && j != 4 || j === 0 && i != 4 || i === 3 && j != 4 || j === 3 && i != 4 || i === 4 && j === 4 || i === 2 && j === 2 ) {
            fila += matrizBingo[i][j] + " ";
        } else {
            fila += "   ";
        }
    }
    console.log(fila);
}

// console.log(matrizBingo[0][0],matrizBingo[0][1],matrizBingo[0][2],matrizBingo[0][3],matrizBingo[0][4]);
// console.log(matrizBingo[1][0],matrizBingo[1][1],matrizBingo[1][2],matrizBingo[1][3],matrizBingo[1][4]);
// console.log(matrizBingo[2][0],matrizBingo[2][1],matrizBingo[2][2],matrizBingo[2][3],matrizBingo[2][4]);
// console.log(matrizBingo[3][0],matrizBingo[3][1],matrizBingo[3][2],matrizBingo[3][3],matrizBingo[3][4]);
// console.log(matrizBingo[4][0],matrizBingo[4][1],matrizBingo[4][2],matrizBingo[4][3],matrizBingo[4][4]);









