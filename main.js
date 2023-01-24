let salir="p";
while (salir != "Y"){
alert (calculadora(parseInt(prompt("Ingrese un numero: ")),parseInt(prompt("Ingrese un segundo numero: ")),prompt("Ingrese la operacion: ")));
salir= prompt ("Presione Y para salir.");
}

function calculadora(primerNum, segundoNum, operacion){
    if (operacion == "+"){
        return primerNum + segundoNum;
    }else if(operacion == "-"){
        return primerNum - segundoNum;
    }else if(operacion == "/"){
        return primerNum / segundoNum;
    }else if(operacion == "*"){
        return primerNum * segundoNum;
    }else{
        return 0;
    }   
}
