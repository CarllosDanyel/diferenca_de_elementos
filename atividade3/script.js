let quantidade = prompt('Insira a quantidade de números pares (de 2 a 18)');
quantidade = parseInt(quantidade);

if (quantidade >= 2 && quantidade <= 18) {
    let numerosPares = [];
    let contador = 2;
    do {
        numerosPares.push(contador);
        contador += 2;
    } while (numerosPares.length < quantidade);

    let exemploDoWhile = document.getElementById('exemplo-do-while');
    exemploDoWhile.innerHTML += '<h3>Números Pares</h3>';
    numerosPares.forEach(function(numero) {
        exemploDoWhile.innerHTML += '<p>' + numero + '</p>';
    });
} else {
    alert('Por favor, insira um valor entre 2 e 18.');
}

// Explicação:
// O código solicita ao usuário uma quantidade de números pares (entre 2 e 18).
// Se o valor estiver dentro do intervalo permitido, ele usa um loop do-while para adicionar números pares sequenciais a um vetor.
// O loop continua até que o vetor contenha a quantidade especificada pelo usuário.
// Em seguida, o conteúdo do vetor é exibido na página.