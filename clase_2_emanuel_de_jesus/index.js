const express = require('express')
const app = express()

app.use(express.static('assets'))

app.get('/formulario',function(req,res){
    res.sendFile(__dirname+"/index.html")
})

app.listen(3000) 
console.log('Iniciando el servidor express')