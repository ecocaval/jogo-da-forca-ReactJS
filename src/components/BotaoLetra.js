import {useState} from "react"
import styled from "styled-components"

export default function BotaoLetra({letra, jogoEmProgresso}) {

    const [botaoFoiClicado, setBotaoFoiClicado] = useState(false)

    return(
            <StyledButton className={((!jogoEmProgresso || botaoFoiClicado) ? "botao-desativado" : "")} 
                        onClick={(() => setBotaoFoiClicado(true))}
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