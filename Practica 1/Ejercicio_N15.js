/*  Proporcione un ejemplo para convertir un callback en una promesa */
/* Ejemplo */
const funcionConCallback = (callback) => {
    setTimeout(() => {
        callback("Callback ejecutado");
    }, 1000);
};

const convertirACallback = () => {
    return new Promise((resolve, reject) => {
        funcionConCallback((resultado) => {
            resolve(resultado);
        });
    });
};

convertirACallback().then((resultado) => {
    console.log(resultado);
});