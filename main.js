// 2.	Realice un programa que calcule el máximo de N números leídos desde teclado.

let num, mayor= 0;

do{
    num=Number(prompt("Señor usuario, por favor ingrese un número. Posteriormente le da aceptar para seguir ingresando más números y cuando desee terminar presione el número 0 para que el programa le indique cuál de los números ingresados es el mayor"));
    console.log(`El número ingresado fue ${num}`);
    if (num > mayor){
    mayor=num;
    }
}
    while(num != 0){
    console.log(`De los números ingresados, el mayor de éstos es: ${mayor}`);
    }



