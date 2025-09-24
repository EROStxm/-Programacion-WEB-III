let conta=0;
let conti=0;
let conto=0;
let contu=0;
let conte=0;
const miFuncion=(a)=>{
    a= a.toLowerCase();
    for (let i = 0; i < a.length; i++) {
        if (a[i]=='a') {
            conta++;
        }
        if (a[i]=='e') {
            conte++;
        }
        if (a[i]=='i') {
            conti++;
        }
        if (a[i]=='o') {
            conto++;
        }
        if (a[i]=='u') {
            contu++;
        }
    }
    return `a: ${conta}, e: ${conte}, i: ${conti}, o: ${conto}, u: ${contu}`;
}
let obj= miFuncion("euforia");
console.log(obj);