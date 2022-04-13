const prompt = require('prompt')

prompt.start()

prompt.get(['valor1','valor2'], function (err, result) {
    
     resultado = parseInt(result.valor1) + parseInt(result.valor2)
     console.log(resultado)
});

