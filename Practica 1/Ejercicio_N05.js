/* Crear una función que determine si una cadena es palíndromo (se lee igual al derecho y
al revés).
let band = miFuncion(“oruro”)
console.log(band) // true
let band = miFuncion(“hola”)
console.log(band) // false */

const palindromo = (cadena) =>{
    let aux=cadena;
    let aux2="";
    for (let i = 0; i < cadena.length; i++) {
        aux2 = aux2 + cadena[cadena.length-i-1];
    }
    if (aux === aux2) {
        return true;
    } else {
        return false;
    }
}
let band = palindromo("oruro");
console.log(band);
