const readlineSync = require("readline-sync");

const frase = readlineSync.question("Me diga uma plavra  que tem o: ");

console.log(frase.toUpperCase())
console.log(frase.replaceAll("o","i"))
console.log(frase.length)