/* Proporcione un ejemplo para convertir una promesa en un callback */
/* Ejemplo */
const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promesa resuelta");
    }, 1000);
});

promesa.then((resultado) => {
    console.log(resultado);
});