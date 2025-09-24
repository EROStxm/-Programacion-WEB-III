/* Proporcione un ejemplo concreto donde el anidamiento de callbacks se puede
reescribir mejor con async/await haciendo el código más limpio y mantenible. */
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
/* el await solo puede ser usado dentro de una función async */
/* el await sirve para "esperar" a que una promesa se resuelva antes de continuar con la ejecución del código */
async function ejecutarPromesas() {
    const resultado1 = await promesa1;
    console.log(resultado1);
    const resultado2 = await promesa2;
    console.log(resultado2);
}

ejecutarPromesas();