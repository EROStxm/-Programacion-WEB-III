/* Realizar un código para ejecutar una función callback después 2 segundos */

const callback = (callback) =>{
    console.log("...");
    setTimeout(() => {
        console.log("bien hecho");
        callback();
    }, 2000);
}
const miFuncion=()=>{
    console.log("xd");
}
callback(miFuncion);