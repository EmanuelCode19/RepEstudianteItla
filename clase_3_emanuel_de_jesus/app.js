const express = require('express')

const app = express();


app.use(express.static('assets'))


app.get('/curriculum', function(req,res){
    res.sendFile(__dirname + '/index.html')
})

app.listen(3000)
console.log('Exprees ha iniciado')