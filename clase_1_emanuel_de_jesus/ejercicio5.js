//Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.

const prompt = require('prompt')

prompt.start()

console.log('digite dos numeros')

prompt.get(['valor1','valor2'], function (err, result) {

    if(result.valor1 > result.valor2){

        console.log(' el mayor es ' + result.valor1)

    }else{

        console.log(' el mayor es ' + result.valor2)

    }

});
