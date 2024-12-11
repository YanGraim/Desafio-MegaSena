function sorteio(numeros) {
    if(numeros < 6 || numeros > 9) {
        console.log("Apenas número de 6 a 9");
        return [];
    }

    const numeroSorteado = [];
    while(numeroSorteado.length > numeros) {
        const numeroAleatorio = Math.floor(Math.random() * 60) + 1;
        numeroSorteado.push(numeroAleatorio);
    }
}

const numerosSorteio = sorteio(7);
console.log(numerosSorteio);