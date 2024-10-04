function stringFunctionsExample() {
    let originalString = "  JavaScript é incrível!  ";
    let exemploStringFuncoes = document.getElementById('exemplo-string-funcoes');

    // Função trim() - Remove espaços em branco do início e do fim da string
    let trimmedString = originalString.trim();
    exemploStringFuncoes.innerHTML += '<p><strong>Original:</strong> "' + originalString + '"</p>';
    exemploStringFuncoes.innerHTML += '<p><strong>Trimmed:</strong> "' + trimmedString + '"</p>';

    // Função toUpperCase() - Converte a string para letras maiúsculas
    let upperCaseString = trimmedString.toUpperCase();
    exemploStringFuncoes.innerHTML += '<p><strong>Upper Case:</strong> "' + upperCaseString + '"</p>';

    // Função replace() - Substitui uma parte da string por outra
    let replacedString = upperCaseString.replace("INCRÍVEL", "FANTÁSTICO");
    exemploStringFuncoes.innerHTML += '<p><strong>Replaced:</strong> "' + replacedString + '"</p>';
}

// Chama a função para executar o exemplo
stringFunctionsExample();

// Explicação:
// 1. A função trim() remove espaços em branco do início e do fim da string.
// 2. A função toUpperCase() converte a string para letras maiúsculas.
// 3. A função replace() substitui uma parte da string por outra.