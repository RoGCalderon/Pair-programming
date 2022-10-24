

//Una función que devulva si un número es par o impar

function numeroParImpar(numero){
    if(numero%2 === 0){
        console.log('El número ingresado es par');
    }else{
        console.log('El número ingresado es impar');
    }
}

//console.log(numeroParImpar(27));

// Función que realice las 4 operaciones básicas
//let opcion = parseInt(prompt('Ingrese una opción: 1- sumar, 2-restar,3- multiplicar, 4- dividir'));
//let num1 = parseInt(prompt('Ingrese un número'));
//let num2 = parseInt(prompt('Ingrese otro número'));
//console.log(opcion);
//console.log(num1);
//console.log(num2);


function calculadora(opcion,num1,num2){
    switch(opcion){
        case 1: 
        let suma=(num1 + num2);
        console.log(suma)
        break;
        case 2: 
        let resta = (num1 - num2);
        console.log(resta);
        break;
        case 3: 
        let multiplicacion= (num1 * num2);
        console.log(multiplicacion)
        break;
        case 1: 
        let dividion = (num1 / num2);
        console.log(dividion)
        break;
    }
}

//calculadora(opcion,num1,num2);

// Función que pide al usuario ingresar distintos números y los va sumando, finaliza cuando el usuario ingresa cero

function sumaNumeros(){
    let numero = 1;
    let suma = 0;
    while (numero!=0 ){
        numero=parseInt(prompt('Ingrese un número'));
        suma+= numero;
    }
    console.log(suma);
}

//sumaNumeros();

let eleccion = parseInt(prompt('Ejercicio n°1, ejercicio n°2, ejercicio n°3 '))

function menu(eleccion){
    if(eleccion === 1){
        let numero= parseInt(prompt('Ingrese un número entero'))
        numeroParImpar(numero);
    }else if(eleccion === 2){
        let opcion = parseInt(prompt('Ingrese una opción: 1- sumar, 2-restar,3- multiplicar, 4- dividir'));
            let num1 = parseInt(prompt('Ingrese un número'));
            let num2 = parseInt(prompt('Ingrese otro número'));
            calculadora(opcion,num1,num2);
    }else if(eleccion ===3){
        sumaNumeros();
    }
}

menu(eleccion);