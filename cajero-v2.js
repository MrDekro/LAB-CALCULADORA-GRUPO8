const prompt  = require('prompt-sync')();

function pedirNumero(mensaje = "Ingrese un numero: ") {

    return Number(prompt(mensaje));
}

function calcular(numero1, operacion,numero2) {

if(operacion == "*"){

    return Number(numero1) * Number(numero2);
}
else if(operacion == "+"){
     return Number(numero1) + Number(numero2);
}
else if( operacion == "-"){
    return Number(numero1) - Number(numero2);
}
else if(operacion = "/"){
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
    let numero1 = pedirNumero();
    let operacion = prompt(" Presione * para multplicar  Presione + para sumar Presione - para restar Presione / para dividir: ");
    let numero2 = pedirNumero();
    let calcula =calcular(numero1, operacion,numero2);
     mostrarResultado(calcula)
}

let activo = true;
let atender;


while (activo == true) {
    
const pregunta = prompt(" Desea realizar otra operacion?: S/N -> ");

    if(pregunta == "S" || pregunta == "s"){
        atender = atenderOperacion();
        continue;
    }else if(pregunta == "N" || pregunta == "n"){
        activo = false;
    }

}
console.log(" Sesión cerrada correctamente ✔. Te esperamos muy pronto");