/* Crear una función que reciba un arreglo de números y devuelva en un objeto a los pares
e impares:
let obj = miFuncion([1,2,3,4,5])
console.log(obj) // { pares: [2,4], impares: [1,3,5]} */

const miFuncion =(A)=>{
    let pares=[];
    let impares=[];
    let pa=0;
    let im=0;
    for (let i = 0; i < array.length; i++) {
        if (A[i]%2==0) {
            pares[pa]=A[i];
            pa++;
        }else{
            impares[im]=A[i];
            im++;
        }
    }
    return {pares,impares};
}