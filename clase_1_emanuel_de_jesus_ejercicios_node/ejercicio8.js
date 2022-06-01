/*
Escribir un programa que nos diga si un número dado es primo 
(no es divisible por ninguno otro número que no sea él mismo o la unidad).
*/
const prompt = require('prompt')

prompt.start()

console.log('digite un valor para saber si es un numero primo')

prompt.get(['valor1',], function (err, result) {

    if(result.valor1 % 2 !== 0){

        console.log( result.valor1 + ' es numero primo ')
    }else {
        console.log( result.valor1 + ' No es numero primo ' )
    }

});

