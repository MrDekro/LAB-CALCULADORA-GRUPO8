const prompt  = require('prompt-sync')();

function pedirNumero(mensaje = "Ingrese un numero: ") {

    return Number(prompt(mensaje));
}

function calcular(numero1, operacion,numero2) {

if(operacion = '*'){

    return Number(numero1) * Number(numero2);
}
else if(operacion = '+'){
     return Number(numero1) + Number(numero2);
}
else if( operacion = '-'){
    return Number(numero1) - Number(numero2);
}
else if(operacion ='/'){
    if(numero2 == 0){
        return "No se puede dividir por 0"
    }else{
    
    return Number(numero1) / Number(numero2);
}}else{
    return "Operacion no valida :/";
}
}
function mostrarResultado(resultado) {
    console.log(`El resultado de la operacion es ${resultado}`);
}


function atenderOperacion() {
    numero1 = pedirNumero();
    operacion = prompt(" Presione * para multplicar  Presione + para sumar Presione - para restar Presione / para dividir o C para salir Opcion : ");
    numero2 = pedirNumero();
    calcula = calcular(numero1, operacion,numero2);
    muestra = mostrarResultado(calcula)
}

let activo = true;

while (activo == true){
atenderOperacion();

}
console.log(" Sesión cerrada correctamente ✔. Te esperamos muy pronto");