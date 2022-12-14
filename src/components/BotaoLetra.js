import {useState} from "react"
import styled from "styled-components"

import forca0 from "./assets/forca0.png"
import forca1 from "./assets/forca1.png"
import forca2 from "./assets/forca2.png"
import forca3 from "./assets/forca3.png"
import forca4 from "./assets/forca4.png"
import forca5 from "./assets/forca5.png"
import forca6 from "./assets/forca6.png"

export default function BotaoLetra({letra, jogoEmProgresso, setJogoEmProgresso, palavraSorteada, setPalavraSorteada, numeroDeErros, setNumeroDeErros, setImagemDaForca, letrasChutadas, setLetrasChutadas, jogoFoiReiniciado, setChuteConteudo, setJogoFoiReiniciado, setUsuarioGanhou, setCorDoChute}) {

    const [botaoFoiClicado, setBotaoFoiClicado] = useState(false)
    const imagensdaForca = [forca0, forca1, forca2, forca3, forca4, forca5, forca6]

    function verificaChute() {

        setJogoFoiReiniciado(false)

        if(letrasChutadas.includes(letra)) {
            return
        }

        setLetrasChutadas([...letrasChutadas, letra])
        
        const palavraSorteadaNaoEscondida = Array.from(palavraSorteada[0].naoEscondida)
        const letraParaComparar = letra.toLowerCase()

        setBotaoFoiClicado(true)
        
        if(palavraSorteadaNaoEscondida.includes(letraParaComparar)) {
            let palavraAtualizada = [...Array.from(palavraSorteada[0].escondida)]

            palavraAtualizada = palavraAtualizada.map((letra,index) => {
                if(palavraSorteadaNaoEscondida[index]===letraParaComparar) {
                    return palavraSorteadaNaoEscondida[index]
                }
                return letra
            })
            palavraAtualizada = palavraAtualizada.join('') // converts array to string
            
            if(palavraAtualizada === palavraSorteada[0].naoEscondida) {
                setJogoEmProgresso(false)
                setLetrasChutadas([]) 
                setChuteConteudo('')
                setCorDoChute('green')
            }

            palavraAtualizada = formataPalavraAtualizada(palavraAtualizada) 
            setPalavraSorteada(palavraAtualizada)                  
        } else {
            aumentaQuantidadeDeErros()
        }
    }

    function formataPalavraAtualizada(palavraAtualizada) {
        return [{
            naoEscondida: palavraSorteada[0].naoEscondida,
            escondida: palavraAtualizada
        }]
    }

    function aumentaQuantidadeDeErros() {
        const numeroDeErrosAumentado = numeroDeErros + 1
        const nummeroMaximoDeErros = imagensdaForca.length

        if(numeroDeErrosAumentado === nummeroMaximoDeErros - 1) {
            setPalavraSorteada(formataPalavraAtualizada(palavraSorteada[0].naoEscondida))
            setJogoEmProgresso(false)
            setLetrasChutadas([]) 
            setChuteConteudo('')
            setCorDoChute('red')
            // colocar o codigo do texto em vermelho aqui
        }

        if(numeroDeErrosAumentado < nummeroMaximoDeErros) {
            setNumeroDeErros(numeroDeErrosAumentado)
            setImagemDaForca(imagensdaForca[numeroDeErrosAumentado])
        }
    }

    function checaGameover() {
        if(jogoFoiReiniciado) {
            setBotaoFoiClicado(false)
        }
        return true
    }

    return(
            <StyledButton className={((!jogoEmProgresso || (botaoFoiClicado?checaGameover():false))?"botao-desativado":"")} 
                          disabled={((!jogoEmProgresso || (botaoFoiClicado?checaGameover():false))?true:false)}
                          onClick={(() => verificaChute())}
                          data-test="letter"                                        
            >
                {letra}
            </StyledButton>
    )
}

const StyledButton = styled.button`

    width: 40px;
    height: 40px;
    font-weight: 700;
    font-size: 16px;
    background: #E1ECF4;
    border: 1px solid #7AA7C7 !important;
    color: #39739D;
    border-radius: 3px;
    margin: 3px 3px;    

    &.botao-desativado {
        background: #798A9F !important;
        color: #6b7075 !important;
    }
    
    `;