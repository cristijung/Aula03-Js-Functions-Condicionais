
//funções tradicionais

function soma (a, b) {
    return a + b;
}


//arrow function
const somar = (a, b) => a + b;
//--------------------------------------------------
//Função tradicional
function verificarNum(numero) {
    if (numero > 0) {
        return 'positivo';
    } else if (numero < 0) {
        return 'negativo';
    } else {
        return 'igual a zero';   
    }
}
console.log(verificarNum(10));
console.log(verificarNum(-2));
console.log(verificarNum(0));

//Função Arrow
const verificarNumero = (num) => {
    if (num > 0) {
        return 'positivo';
    } else if (num < 0) {
        return 'negativo';
    } else {
        return 'igual a zero';   
    }
}

console.log(verificarNumero(10));
console.log(verificarNumero(-2));
console.log(verificarNumero(0));