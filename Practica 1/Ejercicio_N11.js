/* Proporcione un ejemplo concreto de encadenamiento de promesas. */
/* Ejemplo */
const promesa1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(1);
    }, 1000);
});

const promesa2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(2);
    }, 1000);
});
/* la promesa1 se resuelve antes que promesa2 y a esto se le llama "encadenamiento de promesas" */
promesa1.then((resultado1) => {
    console.log(resultado1);
    return promesa2;
}).then((resultado2) => {
    console.log(resultado2);
});