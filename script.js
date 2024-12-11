function sorteio(numeros) {
    if(numeros < 6 || numeros > 9) {
        console.log("Apenas número de 6 a 9");
        return [];
    }

    const numeroAleatorio = Math.floor(Math.random() * 60) + 1;

    return numeroAleatorio;
}

const numeroSorteado = sorteio(7);
console.log(numeroSorteado);