


function hola (nombre) {
     return new Promise(function(resolve, reject) {
        setTimeout(() => {
            console.log('Hola ' + nombre)
            resolve(nombre);
        }, 1500);
     });
}

function hablar(nombre) {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            console.log('Bla bla bla bla... ')
            resolve(nombre);
        }, 1000);
    })
}
function adios(nombre, otroCallback) {
    return new Promise ( (resolve, reject) => {
        setTimeout(() => {
            console.log('Adios ' + nombre)
            resolve(nombre);
        }, 1000);
    });

}

console.log('Iniciado el proceso ');
hola('Ramiro')
    .then(hablar)
    .then ( adios)
    .then( (nombre) => {
        console.log('Terminado el proceso ');
    })
    .catch( error => {
        console.error ('Ha habido un error: ');
        console.error(error);
    });