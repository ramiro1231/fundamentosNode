const http = require('http');

http.createServer(router).listen(3000);

function router (req, res) {
    console.log('nueva peticion');
    console.log(req.url);

    switch(req.url) {
        case '/hola':
            res.write('Hola, que tal');
            res.end();
            break;
        default:
            res.write('Nose que quieres');
            res.end();
    }
   /* res.writeHead(201, {'Content-Type': 'text/plain'});
    //Escribir respuesta
    res.write('hola, ya se usar HTTP de nODEJS');

    res.end();*/
}



console.log('Escuchando http en el puerto 3000');
