// 6.	Realizar un programa que lea N números, calcule y escriba la suma de los pares y el producto de los impares.

let num, par=0, impar=1; 

do
{num = Number(prompt("Señor usuario, por favor ingrese un número. Posteriormente le da aceptar para seguir ingresando más números y cuando desee terminar presione el número 0"));
if(num == 0){
    console.log("El programa ha terminado.")
}
else{
if(num%2 == 0){
    par+=num;
    console.log(`El número par ingresado es ${num} y la suma del número par escrito anteriormente es de: ${par}`);
}
else{
    impar*=num;
    console.log(`El número impar ingresado es ${num} y la multiplicación del número impar escrito anteriormente con este es de: ${impar}`);
}
}}
while(num != 0 ){
}


