
// Cargar el módulo 'http' incorporado en Node.js
const http = require('http');

// Constantes de ip y puertos.
const IP = '127.0.0.1';
const puerto = 3001

const server = http.createServer((req, res) => {
    // Configurar respuesta HTTP
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain'); // Indicamos que la respuesta es texto plano
    res.end('Hola Mundo!'); // Texto que se envía al navegador/cliente
});

// Hacer que el servidor escuche en un puerto y una dirección
server.listen(puerto, IP, () => {
    console.log(`Servidor ejecutandose en https://${IP}:${puerto}/`);
});