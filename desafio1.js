const personagem =["goku","homem aranha","naruto","sasuke","hinata"]

function QuemSoueu(array){
    
    const indiceAleatorio = math.floor(math.random() * array.lenght);

    return array [indiceAleatorio];


}
const personagemEscolhido = QuemSoueu(personagem);

console.log("voce e o personagem",personagemEscolhido)