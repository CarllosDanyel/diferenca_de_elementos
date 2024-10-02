// Exemplo de uso de "in" e "of" no for
let elementos = ['Água', 'Fogo', 'Ar', 'Terra'];
let exemploInOf = document.getElementById('exemplo-in-of');

exemploInOf.innerHTML += '<h3>Usando "in"</h3>';
for (let indice in elementos) {
    exemploInOf.innerHTML += '<p>' + elementos[indice] + '</p>';
}

exemploInOf.innerHTML += '<h3>Usando "of"</h3>';
for (let elemento of elementos) {
    exemploInOf.innerHTML += '<p>' + elemento + '</p>';
}

// Explicação:
// "in" itera sobre as chaves do objeto (neste caso, os índices do array).
// "of" itera sobre os valores do objeto (neste caso, os elementos do array).