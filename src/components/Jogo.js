import styled from "styled-components"
import sortearPalavras from "../palavras/sortearPalavras";
import palavras from "../palavras/palavras";

export default function Jogo({imagemDaForca, palavraSorteada, setPalavraSorteada, jogoEmProgresso, setJogoEmProgresso}) {

    function iniciarJogo() {
        setJogoEmProgresso(true)
        setPalavraSorteada(sortearPalavras(palavras))
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
