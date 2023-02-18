//1. Realizar un programa que permita leer 2 números diferentes y nos diga cual es el mayor de los 2 números.

let num1 = Number(prompt("Señor usuario, ingrese el primer número"));
let num2 = Number(prompt("Señor usuario, ingrese el segundo número"));


if (num1 == num2) {
    console.log(`Tanto el número ${num1} como el número ${num2} son iguales`);
} else if (num1 > num2) {
    console.log(`El número ${num1} es mayor que el número ${num2}`);
} else {
    console.log(`El número ${num2} es mayor que el número ${num1}`);
}

