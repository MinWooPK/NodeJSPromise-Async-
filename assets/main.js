// codigo productor -----> cantante 
// codigo consumidor ----> espectador
// promesa --------------> lsita de suscripcion 

let promise = new Promise(function(resolve, reject){
// ejecutor, codigo productor del cantante 

promise.then(

    function(resault){/* manejas el resultado exitoso */},
    function(error){ /* manejas un error*/},
)
})

// 2 argumentos: 
//          resolve(value) - si el trabajo finalizo con exito, con el resultado (value)
//          reject(error)  - si ocurrio un error, "error" es el objeto error

// Para resumir:
// el objeto 'promise' devuelto por el constructor 'new Pormise' tiene estas propiedades:

//                 - state : inicialmente 'pendiente'; luego cambia a 'cumplito'
//                 cuando se llama al 'resolve', o a 'rechazado' cuando se llama 'reject' 

//                 - resault: inicialmente 'undefinded', luego cambiaria a 'value' 
//                 cuando se llama al 'resolve(value)',, o a 'error' cuando se llama a
//                 'reject(error)'

let promiseExample = new Promise(function(resolve, reject){

// la funcion ejecuta automaticamente cuando se contruye la promsea 
// despues de 1 (1000) segundo, indica que la tarea esta hecha con el resutlado "hecho"

setTimeout(() => resolve("hecho"),1000);
});

// =============================================================================
// =================================== CONSUMIDORES ============================
// =============================================================================

// then y catch

// Syntaxis aislada
promise.then(

    function(resault){/* manejas el resultado exitoso */},
    function(error){ /* manejas un error*/},
)

// Ejemplo Completo

let promiseEjemploCompleto = new Promise(function(resolve, reject){
    setTimeout(() => resolve("hecho"),1000);
});
    // la funcion ejecuta automaticamente cuando se contruye la promsea 
    // despues de 1 (1000) segundo, indica que la tarea esta hecha con el resutlado "hecho"
    
 
    // resolve ejecuta la primera funcion del .then
    promiseEjemploCompleto.then(
        result => alert(resolve),   /* muestra "hecho" despues de 1 seg*/
         error => alert(reject)     /* no se ejecuta el error*/
    );
    
    