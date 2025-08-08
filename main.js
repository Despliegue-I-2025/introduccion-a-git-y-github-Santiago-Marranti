const http = require('http');
const IP = '127.0.0.1';
const puerto = 3001

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hola Mundo!');
});

server.listen(puerto, IP, () => {
    console.log(`Servidor ejecutandose en https://${IP}:${puerto}/`);
});