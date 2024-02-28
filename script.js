function verificaPar(numero) {
    return new Promise((resolve, reject) => {
        // Verifica se o número é par
        if (numero % 2 === 0) {
            resolve("Número validado é par");
        } else {
            reject("Error: número informado é ímpar");
        }
    });
}

// Testando a função com um número par
verificaPar(4).then(mensagem => {
    console.log(mensagem);
}).catch(erro => {
    console.error(erro);
});

// Testando a função com um número ímpar
verificaPar(5).then(mensagem => {
    console.log(mensagem);
}).catch(erro => {
    console.error(erro);
});
