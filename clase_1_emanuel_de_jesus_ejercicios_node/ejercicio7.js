//Escribe un programa que pida un número y diga si es divisible por 2.
const prompt = require('prompt')

prompt.start()

console.log('digite un valor para saber si es divible por 2')

prompt.get(['valor1',], function (err, result) {

    if(result.valor1 % 2 === 0){

        console.log( result.valor1 + ' es divisible ')
    }else {
        console.log( result.valor1 + ' No es divisible ' )
    }

});

