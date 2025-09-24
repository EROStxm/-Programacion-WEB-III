/* Crear una promesa que devuelva un mensaje de éxito después de 3 segundos */

const miPromesa = new Promise((resolve, reject) => {
    console.log("Esperando...");
    setTimeout(() => {
        resolve("exito");
    }, 3000);
});

miPromesa.then((res)=> {
    console.log(res);
});