function hola (nombre, micallback) {

    setTimeout(() => {
        console.log('Hola ' + nombre)
        micallback();
    }, 1500);
}

function hablar(callbackHablar) {
    setTimeout(() => {
        console.log('Bla bla bla bla... ')
        callbackHablar();
    }, 1000);
}
function adios(nombre, otroCallback) {
    setTimeout(() => {
        console.log('Adios ' + nombre)
        otroCallback();
    }, 1000);
}

function conversacion(nombre, veces, callback) {
    if (veces > 0){
        hablar (function () {
            conversacion(nombre, --veces, callback );
        });
    } else {
        adios(nombre,callback);
    }
}
//

console.log('Iniciando proceso ...');
hola('Ramiro', function(nombre) {
    conversacion(nombre, 3 , function () {
        console.log('PRoceso terminado')
    });
})

/*
hola('Ramiro', function () { 
    adios('Ramiro', function () {
        console.log('Terminando proceso ...')
    });
})
/*hola('Ramiro', function () {
    hablar(function () {
        hablar(function () { 
            adios('Ramiro', function () {
                console.log('Terminando proceso ...')
            });
        })
    })
});*/



