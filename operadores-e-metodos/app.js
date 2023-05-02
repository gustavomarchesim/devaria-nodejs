const { read } = require('fs');

const readLine = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

console.log('O programa a seguir, recebe dois valores e o tipo de operação que o usuário deseja realizar e calcula corretamente.');

const validarNumero = (numero) => {
    const resultado = Number.parseFloat(numero);

    if(!resultado){
        console.log('O número informado não é válido!');
    }
};

const validarOperador = (operador => {
    switch (operador) {
        case '+':
        case '-':
        case '*':
        case '/':
        case '%':
            return operador;
        default: 
            console.log('O operador informado é inválido! ');
            break;
    }
});

readLine.question('Por favor, insira o primeiro número! ', (primeiroNumero) => {
    const numeroValido1 = validarNumero(primeiroNumero);

    if (numeroValido1) {
        readLine.question('Por favor, informe o segundo número! ', (segundoNumero) => {
            const numeroValido2 = validarNumero(segundoNumero);

            if (numeroValido2) {
                readLine.question('Por favor, informe a operação desejada (+, -, /, *, %)', operador => {
                    const operadorValidado = validarOperador(operador);

                    if(operadorValidado){
                        switch(operadorValidado){
                            case '+' : console.log(`operador selecionado adicao resultado ${numeroValido1} + ${numeroValido2} = ${numeroValidado1 + numeroValidado2}`);
                                break;
                            case '-' : console.log(`operador selecionado subtracao resultado ${numeroValidado1} - ${numeroValidado2} = ${numeroValidado1 - numeroValidado2}`);
                                break;
                            case '*' : console.log(`operador selecionado multiplicacao resultado ${numeroValidado1} * ${numeroValidado2} = ${numeroValidado1 * numeroValidado2}`);
                                break;
                            case '/' : console.log(`operador selecionado divisao resultado ${numeroValidado1} / ${numeroValidado2} = ${numeroValidado1 / numeroValidado2}`);
                                break;
                            case '%' : console.log(`operador selecionado modulo resultado ${numeroValidado1} % ${numeroValidado2} = ${numeroValidado1 % numeroValidado2}`);
                                break;
                            default: break;
                        }
                    }
                })

            }
        });
    }  
});