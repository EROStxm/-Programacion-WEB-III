/* 2. Crear una función que invierta el orden de las palabras en una frase.
let cad = miFuncion(“abcd”)
console.log(obj) // dcba */
const miFuncion=(a)=>{
    let aux="";
    for (let i = 0; i < a.length; i++) {
        aux = a[i] + aux;
    }
    return aux;
}
let obj= miFuncion("abcd");
console.log(obj);