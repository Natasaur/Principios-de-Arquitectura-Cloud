var http = require('http');
const fs = require('node:fs/promises');
const mime = {
   'html': 'text/html'
}
var server = http.createServer();

function mensaje (petic, resp) {
   resp.writeHead(201,{'content-type':'text/plain'}); //Envía el código 200 "Conexión exitosa al navegador cliente"
   resp.write('Hola Mundo, mi nombre es Natalia Garcia!!!');
   resp.end();
}
server.on('request', mensaje);

server.listen(3000, function() {
   console.log('La aplicación está funcionando');
   console.log('author@Natalia Garcia')
});