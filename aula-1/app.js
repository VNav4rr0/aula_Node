const soma = require('./soma.js');

console.log(soma(10,10));


var http = require('http');

http.createServer(function (req, res) {
    res.end("Resultado: " + soma(10,10))
}).listen(8081)

console.log("Servidor esta ativo!")

