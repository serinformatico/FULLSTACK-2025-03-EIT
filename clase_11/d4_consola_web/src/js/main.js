let greeting = "Hola Mundo";
console.log(greeting);

let info = "mensaje de información";
console.info(info);

let error = "mensaje de error";
console.error(error);

let assertion = (1 > 2);
console.assert(assertion, "mensaje de resultado negativo: 1 no es mayor 2");

// Mostrar el tiempo transcurrido en milisegundos entre un punto
// inicial y un punto final (bloque de código en ejecución)
console.time();
    let a = 10;
    let b = 15;
    let c = a + b;
    console.log(c);
console.timeEnd();
