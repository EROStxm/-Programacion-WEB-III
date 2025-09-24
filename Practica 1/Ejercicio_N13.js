/*  Proporcione un ejemplo concreto donde el anidamiento de promesas se puede
reescribir mejor con async/await haciendo el código más limpio y mantenible */

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

async function ejecutarPromesas() {
    const resultado1 = await promesa1;
    console.log(resultado1);
    const resultado2 = await promesa2;
    console.log(resultado2);
}

ejecutarPromesas();