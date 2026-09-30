const prompt  = require('prompt-sync')();

let resultado;

let opcion = '';

while (true){
 opcion = prompt("\nPresione 1 para multplicar \nPresione 2 para sumar\nPresione 3 para restar\nPresione 4 para dividir o C para salir\nOpcion : ");
if(opcion == "c"){
    break;
}
let numero1 = prompt(" ingrese el primer numero: ");

let numero2 = prompt(" ingrese el segundo numero: ");
if(opcion == '1'){
    operacion = '*'
    resultado = Number(numero1) * Number(numero2);
    console.log(`El resultado de la operacion ${operacion} es ${resultado}`);
}
else if(opcion == '2'){
     operacion = '+'
     resultado = Number(numero1) + Number(numero2);
    console.log(`El resultado de la operacion ${operacion} es ${resultado}`);
}
else if(opcion == '3'){
    operacion = '-'
    resultado = Number(numero1) - Number(numero2);
    console.log(`El resultado de la operacion ${operacion} es ${resultado}`);
}
else if(opcion == '4'){
    if(numero2 == 0){
        console.log("Operacion invalida :/");
        continue;
    }else{
    operacion ='/'
    resultado = Number(numero1) / Number(numero2);
    console.log(`El resultado de la operacion ${operacion} es ${resultado}`);}
}else{
    console.log("Operacion no valida :/");
    break;
}


}