alert('Boas vindas ao jogo do número secreto');
let nome = prompt ('Qual é seu nome?')
let numeroMaximo = parseInt(Math.random()*100+1);
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
// *Math.random gera um numero 0 a 1 aleatorio. parseInt ultiliza so uma casa decimal .  
console.log(numeroSecreto)
let chute;
let tentativas = 1;

// enquanto chute não for igual ao n.s.
while (chute != numeroSecreto) {
    chute = prompt('Escolha um número entre 1 e '+ numeroMaximo);
    // se chute for igual ao número secreto
    if (chute == numeroSecreto) {
       break; // Parar
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`)
        } else {
            alert(`O número secreto é maior que ${chute}`)
        }
        // tentativas = tentativas + 1
        tentativas++
    }
}
/*if (tentativas > 1) {
    alert('Isso aí! você descobriu o número secreto '+ numeroSecreto 'com' + tentativas 'tentativas');
} else 
alert ('Isso aí! você descobriu o número secreto '+ numeroSecreto 'com' + tentativas 'tentativa.'); */

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
alert(`Isso ai ${nome}  !' Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);
// tentativa > 1? e para selecionar a primeira opção, caso contratio a segunda opção. operador ternario
