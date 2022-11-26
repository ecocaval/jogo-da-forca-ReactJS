import styled from "styled-components"
import sortearPalavras from "../palavras/sortearPalavras"

import palavras from "../palavras/palavras"
import forca0 from "./assets/forca0.png"

export default function Jogo({imagemDaForca, setImagemDaForca, palavraSorteada, setPalavraSorteada, jogoEmProgresso, setJogoEmProgresso, setNumeroDeErros, setJogoFoiReiniciado}) {

    function iniciarJogo() {
        setJogoEmProgresso(true)
        setPalavraSorteada(sortearPalavras(palavras))
        setNumeroDeErros(0)
        setImagemDaForca(forca0)
        setJogoFoiReiniciado(true)
    }

    return (
        <>
            <ConteudoJogo>
                <img src={imagemDaForca}/>
                <aside>
                    <button onClick={() => iniciarJogo()}>
                        <p>Escolher Palavra</p>
                    </button>
                    <p>{palavraSorteada[0].escondida}</p>
                </aside>
            </ConteudoJogo>
        </>
    );
}
    
const ConteudoJogo = styled.main`

    display: flex;
    justify-content: space-between;
    padding: 50px;
    
    img {
        width: 400px;
    }

    > aside {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        justify-content: space-between;
        height: auto;
    }

    > aside > button {
        width: 200px;
        height: 60px;
        background: #27AE60;
        border-radius: 8px;
        border: none;
        > p {
            font-family: 'Roboto';
            color: #FFFFFF;
            font-weight: 700;
            font-size: 20px;
        }
    } 

    > aside > p {
        font-family: 'Noto Sans';
        font-style: normal;
        font-weight: 700;
        font-size: 50px;
        line-height: 68px;
        display: flex;
        align-items: center;
        text-align: center;
        letter-spacing: 20px;
    }
`;
