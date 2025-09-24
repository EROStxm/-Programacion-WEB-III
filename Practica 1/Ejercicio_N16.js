/* Proporcione un ejemplo para migrar una función con promesas a async/await */
/* Ejemplo */
const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promesa resuelta");
    }, 1000);
});

promesa.then((resultado) => {
    console.log(resultado);
});