const readlineSync = require('readline-sync');

const racaDecachorro = ["bulldog","vira-lata","pitbull","husky","puddle"]
const escolha =readlineSync.question("escolha uma raca de 0 a 4")



console.log(racaDecachorro[escolha])