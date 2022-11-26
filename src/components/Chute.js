import { useState } from "react";
import styled from "styled-components"

import forca6 from "./assets/forca6.png"

export default function Chute({jogoEmProgresso, setJogoEmProgresso, chuteConteudo, setChuteConteudo, palavraSorteada, setPalavraSorteada, setNumeroDeErros, setImagemDaForca, setLetrasChutadas}) {

    function verificaChute() {
        console.log(palavraSorteada[0].naoEscondida);
        if(chuteConteudo === palavraSorteada[0].naoEscondida) {
            setPalavraSorteada(formataPalavraAtualizada(chuteConteudo))
            setJogoEmProgresso(false)
            setLetrasChutadas([]) 
        } else {
            setImagemDaForca(forca6)
            setNumeroDeErros(0)
            setJogoEmProgresso(false)
            setLetrasChutadas([]) 
        }
    }

    function formataPalavraAtualizada(palavraAtualizada) {
        return [{
            naoEscondida: palavraSorteada[0].naoEscondida,
            escondida: palavraAtualizada
        }]
    }

    return (
        <>
            <SessaoDoChute>
                <p>Já sei a palavra!</p>
                <input disabled={(!jogoEmProgresso?true:false)}
                       onChange={(e) => {console.log(e.target.value); setChuteConteudo(e.target.value)}}
                       value={chuteConteudo}
                >
                </input>
                <button disabled={(jogoEmProgresso?false:true)}
                        onClick={() => {
                        verificaChute();
                        setChuteConteudo('')
                }}
                >
                    <p>Chutar</p>
                </button>
            </SessaoDoChute>
        </>
    );
}

const SessaoDoChute = styled.main`
    display: flex;
    margin: 60px auto;
    justify-content: center;
    align-items: center;

    > p {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        align-items: center;
        text-align: center;
    }

    input {
        width: 353px;
        height: 40px;
        background: #FFFFFF;
        border: 1px solid #CCCCCC;
        box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.25);
        border-radius: 3px;
        margin: 0 12px;
    }

    button {
        width: 100px;
        height: 40px;
        background: #E1ECF4;
        border: 1px solid #7AA7C7;
        border-radius: 3px;

        &:hover{
            cursor: pointer;
        }

        p {
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 700;
            font-size: 16px;
            color: #3C76A1;
        }
    }
`;