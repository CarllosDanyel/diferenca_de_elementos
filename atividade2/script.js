let i = 0;
let numero = prompt('Insira um valor');
let exemploWhile = document.getElementById('exemplo-while');

while (numero <= 10) {
    exemploWhile.innerHTML += '<p>Linha ' + i + '</p>';
    i++;
    numero++;
}

// Explicação:
// O código solicita ao usuário um valor através de um prompt.
// Enquanto o valor inserido for menor ou igual a 10, o loop while executa.
// Dentro do loop, ele escreve "Linha i" no documento, onde i é o contador do loop.
// O valor de i é incrementado em 1 a cada iteração, assim como o valor inserido pelo usuário.
// O loop termina quando o valor inserido pelo usuário é maior que 10.