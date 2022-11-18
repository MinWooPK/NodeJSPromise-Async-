// codigo productor -----> cantante 
// codigo consumidor ----> espectador
// promesa --------------> lsita de suscripcion 


let promise = new Promise(function (resolve, reject) {
    // ejecutor, codigo productor del cantante 

    promise.then(

        function (resault) {/* manejas el resultado exitoso */ },
        function (error) { /* manejas un error*/ },
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

let promiseExample = new Promise(function (resolve, reject) {

    // la funcion ejecuta automaticamente cuando se contruye la promsea 
    // despues de 1 (1000) segundo, indica que la tarea esta hecha con el resutlado "hecho"

    setTimeout(() => resolve("hecho"), 1000);
});

// =============================================================================
// =================================== CONSUMIDORES ============================
// =============================================================================

// then y catch

// Syntaxis aislada
promise.then(

    function (resault) {/* manejas el resultado exitoso */ },
    function (error) { /* manejas un error*/ },
)

// Ejemplo Completo

let promiseEjemploCompleto = new Promise(function (resolve, reject) {
    setTimeout(() => resolve("hecho"), 1000);
});
// la funcion ejecuta automaticamente cuando se contruye la promsea 
// despues de 1 (1000) segundo, indica que la tarea esta hecha con el resutlado "hecho"


// resolve ejecuta la primera funcion del .then
// promiseEjemploCompleto.then(
//     result => alert(resolve),   /* muestra "hecho" despues de 1 seg*/
//      error => alert(reject)     /* no se ejecuta el error*/
// );


// CATCH = promise.then(null,rejected)
// gestona solo casos 'rejected',los errores
// promise.catch(alert);

// Finally
// se ejecuta cuando se cumple la promesa, no importa que tenga exito o no

//     new promise((resolve, reject) => {
//         /* escribimos lo que hay que hacer para luego llamar a rosolve o reject */
//  })

// se ejecuta cuando se cumple la promesa
//  .finally(() => stop /*loading indicator*/)
//  //de eta forma el indicador de carga, siempre es detindo antes de que sigamos adelante
//  .then(
//     result = show /*result*/,
//     err => show /*error*/
//     )

//resumen:  
// - Un manejador finally no obtiene lo que resulto del manejador previo (no tiene argumetnos). 
// Ese resultado es pasado a traves de el al siguiente manejador.
// - Si el manejador de finally devuelve algo, sera ignorado.
// - Cuando es finally el que dispara el errror , 
// la ejecucion pasa al manejador de error mas cercano


//Ejercicios

// ¿Cuál es el resultado del código a continuación?
// let promiseEjercicio = new Promise(function(resolve, reject) {
//   resolve(1);

//   setTimeout(() => resolve(2), 1000);
// });

// promiseEjercicio.then(alert);
//Output 1 


// Demora con una promesa
// La función incorporada setTimeout utiliza callbacks. Crea una alternativa basada en promesas.

// La función delay(ms) debería devolver una promesa. Esa promesa debería resolverse después de ms milisegundos, para que podamos agregarle .then, así:

// function delay(ms) {

//     return new Promise(resolve => setTimeout(resolve, ms)) 

// } 
//   delay(3000).then(() => alert('se ejecuta después de 3 segundos'));



// function delay(ms) {
//  // tu código
//  return new Promise((resolve) => {
//  setTimeout(() => resolve(ms), 3000)
//  })
// }//cierre function

// delay(3000).then(() => alert('se ejecuta después de 3 segundos'));

// ===========================================================================================================
// ================================================== FETCH ==================================================
// ===========================================================================================================


// https://dmitripavlutin.com/javascript-fetch-async-await/


// AJAX (asynchornous javascript and xml)

// let prmosea = fetch(url, [options])
//    url - direccion URL a la que deseamos acceder
//    option - parametros opcionales(encabezado de la peticion,metodos)

//    La respuesta que obtengamos siempre es un proceso de dos pasos
//    - el primero la promesa devuelta por el 'fetch' resuelve la respuesta con un objeto de la clase 'response', 
// esto lo hace tan pronto el servidor responde con los encabezados de la peticion.

// podemos visulalizar los estados HTTP en las propiedades de la respuesta:
// status - codigo de etado HTTP, por ejmplo: 200
// ok - booleana, true si el codigo de etado HTTP es 200 a 299.

// - el segundo , para obtener el cuerpo de la respuesta, utilizamos métodos adicionales

// Métodos de respuesta:
//------ response.text() – lee y devuelve la respuesta en formato texto,
//------ response.json() – convierte la respuesta como un JSON,
//------ response.formData() – devuelve la respuesta como un objeto FormData 
// (Lo que hace especial al objeto FormData es que los métodos de red, tales como fetch, 
//     pueden aceptar un objeto FormData como el cuerpo. Es codificado y enviado como Content-Type: multipart/form-data.),
//------ response.blob() – devuelve la respuesta como Blob (datos binarios tipados),
//------ response.arrayBuffer() – devuelve la respuesta como un objeto ArrayBuffer 
// (representación binaria de datos de bajo nivel),
//------ Adicionalmente, response.body es un objeto ReadableStream, 
// el cual nos permite acceder al cuerpo como si fuera un stream y leerlo por partes.
// Veremos un ejemplo de esto más adelante.



// let url = 'https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits';
// let respuesta = await fetch(url);

// let commits = await respuesta.json(); // leer respuesta del cuerpo y la quiero devolver como JSON
// alert([commits[0].author.login, commits[0].author.id]);
// alert de dos elementos del mismo "nivel"

//  ====================== MISMO EJERCICO CON UNA PROMESA ==============================

// fetch('https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits')
//     .then(Response => Response.json())
//     .then(commits => alert(commits[0].author.login));

// ================================== OBTENER LA RESPUESTA COMO TEXTO RESPONSE.TEXT() =========


// let response = await fetch('https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits');
// let text = await response.text();     // leer respuesta del cuerpo y la quiero devolver como texto

// alert(text)

// =================================================================================================================

// Si obtuvimos un respuesta, no se puede sacar una misma respuesta en el mismo fetch.apply

// response.text()
// response.json()

// solo se efectuaria el response.text(). 
// Si queremos realizar una response.json(), debemos de crear otra funcion a parte

// Encabezado de respuesta
// response.header, se acceden mediante el objeto tipo map().

// let answer = await fetch('https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits')
// Queremos obtener un encabezado
//    alert(answer.headers.get('Content-type'));

//    ouput: application/json; charset=utf-8

//    ========================= SI QUEREMOS OBTENER TODOS LOS ENCABEZADOS =========================================

//     https://www.freecodecamp.org/espanol/news/solicitud-http-en-javascript/

//    let answer = await fetch('https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits');
  
//    for(let[key,value] of answer.headers){
//    alert(`${key} = ${value}`)}


// Encabezado de petición

// let response = fetch(protectedUrl,/*OPTION*/ {
// headers: {
//     Authentication: 'secret'
// }
// })
// Existe una lista de encabezado que no puede ser encabezado

// Peticion POST

// method - metodo HTTP, por ej: POST.
//  body  - cuerpo de la respuesta, cualquiera de las siguientes :
//              cadena de texto
//              objeto FormData
//              Blob/BufferSource
//              URLSearchParams



let user = {
    title: 'Fenomeno',
    body: 'mi petición',
    userId: 900
  };
  
//   let response = await fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json;charset=utf-8'
//     },
//     body: JSON.stringify(user)
//   })
// .then((response) => response.json())
// .then((json) => console.log(json));

// /*
// GET   -> read
// POST  -> create
// PUT   -> update/replace
// PATCH -> update/modify
// DELETE-> delte
// */


// ================================================= Ejercicio =====================================================
// Fetch de usuarios de GitHub
// Crear una función async llamada getUsers(names), que tome como parámetro un arreglo de logins de GitHub, obtenga el listado de usuarios de GitHub indicado y devuelva un arreglo de usuarios de GitHub.
// La url de GitHub con la información de usuario especifica USERNAME es: https://api.github.com/users/USERNAME.
// Detalles a tener en cuenta:
// Debe realizarse una única petición fetch por cada usuario.
// Para que la información esté disponible lo antes posible las peticiones no deben ejecutarse de una por vez.
// Si alguna de las peticiones fallara o si el usuario no existiese, la función debe devolver null en el resultado del arreglo.

// https://es.javascript.info/task/fetch-users
// async function getUsers(names) {
//     let jobs = [];
  
//     for(let name of names) {
//       let job = fetch(`https://api.github.com/users/${name}`).then(
//         successResponse => {
//           if (successResponse.status != 200) {
//             return null;
//           } else {
//             return successResponse.json();
//           }
//         },
//         failResponse => {
//           return null;
//         }
//       );
//       jobs.push(job);
//     }
  
//     let results = await Promise.all(jobs);
  
//     return results;
//   }

// ================================================= Ejercicio =====================================================

// 1. Quiero un perrito, pero no se qué raza escoger, ¿me ayudas?
// En este ejercicio utilizaremos la API de https://dog.ceo/dog-api/. Leyendo su documentación, deberás hacer lo siguiente:
// Imprimir por consola la lista de razas de todos los perros.



// let url = 'https://dog.ceo/api/breeds/list/all';
// let respuesta =  fetch(url);
// let all =  respuesta.text(); 
// alert(all)

fetch("https://dog.ceo/api/breeds/list/all")
.then(res => res.json())
.then(res => console.log(res.message));


// Y LA OTRA FORMA DE HACER 

let url = "https://dog.ceo/api/breeds/list/all";
let res = await fetch(url);

let reste = await res.json(); // leer respuesta del cuerpo y la quiero devolver como JSON
console.log(reste.message);


// Imprimir por consola una imagen random de una raza.

let url2 = "https://dog.ceo/api/breeds/image/random";
let res1 = await fetch(url2);

let random = await res1.json(); // leer respuesta del cuerpo y la quiero devolver como JSON
console.log(random);

fetch("https://dog.ceo/api/breeds/image/random")
.then( res1 => res1.json() )
.then( rest1 => console.log(rest1))


// Imprimir por consola todas las imágenes de una raza concreta.

fetch("https://dog.ceo/api/breed/beagle/images")
.then( res1 => res1.json() )
.then( rest1 => console.log(rest1))

// Otra manera

let urlPerrito = "https://dog.ceo/api/breed/beagle/images";
let respuestas = await fetch(urlPerrito)
let imagneRaza = await respuestas.json()
console.log(imagneRaza.message)

// ¿Y si ahora te pidieramos que podamos poner otra raza en la url para que nos busque otras imágenes? 


// Adapta las urls que ya tenías para que puedas pasarle argumentos.
// Recuerda que para estos ejercicios deberás utilizar fetch. Al haber conseguido que se imprima por consola, 
// el siguiente paso será que se muestren en pantalla con las herramientas que nos ofrece el arbol DOM.