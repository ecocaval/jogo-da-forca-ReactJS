export default function sortearPalavras(palavras) {
    const indiceDasPalavrasOriginais = []
    const palavrasOriginais = [...palavras]
   
    let indiceDasPalavrasSorteadas = [];
    let palavrasSorteadas = [];

    palavrasOriginais.forEach((_,index) => {
        indiceDasPalavrasOriginais.push(index);
    })

    indiceDasPalavrasSorteadas = indiceDasPalavrasOriginais.sort((a,b) => {
        return 0.5 - Math.random();
    })

    palavrasOriginais.forEach((_,index) => {
        palavrasSorteadas.push(palavrasOriginais[indiceDasPalavrasSorteadas[index]])
    })

    return ([{
        naoEscondida: palavrasSorteadas[0],
        escondida: palavrasSorteadas[0].replace(/./g, '_')
    }]) ;
}