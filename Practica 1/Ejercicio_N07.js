/* Almacenar el resto de los elementos de un arreglo sin tomar en cuenta los dos primeros
elementos de un arreglo, mediante desestructuración */

const A=[1,2,3,4,5,6,7,8,9];

let[ , , ...resto]=A;
const B=resto;
console.log(B);
