// 4.	Realizar un programa de procesos en el que se almacenen 3 números en 3 variables A, B y C.
// El diagrama debe decidir cual es el mayor y cual es el menor

let A = Number(prompt("Señor usuario, ingrese el valor para asignarle a la variable A:"));
let B = Number(prompt("Señor usuario, ingrese el valor para asignarle a la variable B:"));
let C = Number(prompt("Señor usuario, ingrese el valor para asignarle a la variable C:"));

console.log(`Señor usuario, el número mayor de las tres variables es: ${Math.max(A,B,C)}`)
console.log(`Señor usuario, el número menor de las tres variables es: ${Math.min(A,B,C)}`)

