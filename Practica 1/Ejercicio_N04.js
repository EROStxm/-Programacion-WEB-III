/* Crear una función que reciba un arreglo de números y devuelva el número mayor y el
menor, en un objeto.
let obj = miFuncion([3,1,5,4,2])
console.log(obj) // { mayor: 5, menor: 1 } */
const miFuncion=(A)=>{
    let mayor=A[0];
    let menor=A[0];
    for (let i = 0; i < A.length; i++) {
        if (mayor<A[i])
            mayor=A[i];
        if (A[i]<menor)
            menor=A[i];
    }
    const obj={
        may:`${mayor}`,
        men:`${menor}`
    }
    return obj;
}
let obj = miFuncion([3,1,5,4,2])
console.log(obj)