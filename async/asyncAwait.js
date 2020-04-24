async function hola (nombre) {
    return new Promise(function(resolve, reject) {
       setTimeout(() => {
           console.log('Hola ' + nombre)
           resolve(nombre);
       }, 1500);
    });
}

async function hablar(nombre) {
   return new Promise ((resolve, reject) => {
       setTimeout(() => {
           console.log('Bla bla bla bla... ')
           resolve(nombre);
       }, 1000);
   })
}
async function adios(nombre, otroCallback) {
   return new Promise ( (resolve, reject) => {
       setTimeout(() => {
           console.log('Adios ' + nombre)
           resolve(nombre);
       }, 1000);
   });

}

// --

async function main () {
    let nombre =  await hola('Ramiro');
    await hablar();
    await hablar();
    await hablar();
    await hablar();
    await adios(nombre);
    console.log('Termina proceso ...');
};

console.log('Iniciando proceso ...');
main();

