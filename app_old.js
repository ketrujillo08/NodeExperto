const http = require('http');

http.createServer((req, res) => {

        res.writeHead(200, { 'Content-Type': 'appication/json' });
        //res.write('Hola Mundo');

        let salida = {
            nombre: 'Kevin',
            apellido: 'Trujillo',
            edad: 25,
            url: req.url
        }
        res.write(JSON.stringify(salida));
        res.end();
    })
    .listen(7070);

console.log("Escuchando en puerto 7070");