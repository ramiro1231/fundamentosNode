//const process = require('process');

process.on('beforeExit', () => {
    console.log('Ram, el proceo va terminar');
});

process.on('exit', () => {
    console.log('Ram, el proceo acabo');
});

process.on('uncaughtException', (err,origen) => {
    console.error('Vaya se nos olvido capturar un error');
    console.error(err);
});
//process.on('unhandledRejection');

functionNoexiste();

console.log('Esto si el erro no se recoge no sale');