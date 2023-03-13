const menorValor = 1;
const maiorValor = 1000;
document.getElementById("menor-valor").innerHTML = menorValor;
document.getElementById("maior-valor").innerHTML = maiorValor;

const numeroSecreto = gerarNumeroAleatorio()

function gerarNumeroAleatorio() {
  return parseInt(Math.random() * maiorValor);
}

console.log("Número Secreto:", numeroSecreto);
