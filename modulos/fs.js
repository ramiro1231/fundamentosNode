const fs = require('fs');

function leer (ruta, cb) {
    fs.readFile(ruta, (err, data) => {
        //Leido
        cb(data.toString());
    })
}


function escribir(ruta, contenido, cb) {
    fs.writeFile(ruta, contenido, function (err) {
        if (err) {
            console.error('No he podido escribirlo,', err);
        } else {
            console.log('Se ha escrito correctamente');
        }
    })
}

function borrar (ruta, cb) {
    fs.unlink(ruta, cb);
}
borrar(__dirname + '/archivo1.txt', console.log);
//escribir (__dirname + '/archivo1.txt', 'soy un archivo nuevo', console.log)
//leer(__dirname + '/archivo.txt',console.log);

