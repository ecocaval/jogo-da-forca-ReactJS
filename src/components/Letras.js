import { useState } from "react";
import styled from "styled-components"
import BotaoLetra from "./BotaoLetra"

export default function Letras({jogoEmProgresso, setJogoEmProgresso, palavraSorteada, setPalavraSorteada, numeroDeErros, setNumeroDeErros, setImagemDaForca}) {
    const alfabeto = ["A","B","C","D","E","F","G","H","I","J",
                      "K","L","M","N","O","P","Q","R","S","T",
                      "U","V","W","X","Y","Z"];                                      

    const [letrasChutadas, setLetrasChutadas] = useState([])
                      
    return(
        <>
            <SessaoLetras>
                {alfabeto.map((letra) => {
                    return (<BotaoLetra key={letra} 
                                        letra={letra} 
                                        jogoEmProgresso={jogoEmProgresso}
                                        setJogoEmProgresso={setJogoEmProgresso}
                                        palavraSorteada={palavraSorteada}
                                        setPalavraSorteada={setPalavraSorteada}
                                        numeroDeErros={numeroDeErros}
                                        setNumeroDeErros={setNumeroDeErros}
                                        setImagemDaForca={setImagemDaForca}
                                        letrasChutadas={letrasChutadas}
                                        setLetrasChutadas={setLetrasChutadas}/>)
                })}
            </SessaoLetras>
        </>
    )
}

const SessaoLetras = styled.section`
    display: grid;
    grid-template-rows: repeat(2, auto);
    grid-auto-flow: column;
    margin: 50px auto;
    width: 70%;
`;