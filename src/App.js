import forca0 from "./components/assets/forca0.png"

import GlobalStyle from "./styles/GlobalStyle"

import {useState} from "react"

import Jogo from "./components/Jogo"
import Letras from "./components/Letras"
import Chute from "./components/Chute"
import styled from "styled-components"

function App() {

  const [numeroDeErros, setNumeroDeErros] = useState(0)
  const [imagemDaForca, setImagemDaForca] = useState(forca0)
  const [palavraSorteada, setPalavraSorteada] = useState([{
      naoEscondida: '________',
      escondida: '________'
    }]
  )
  const [jogoEmProgresso, setJogoEmProgresso] = useState(false)

  return (
   <>
      <StyledBody>
        <main>
          <GlobalStyle/>  
          <Jogo
            imagemDaForca={imagemDaForca}
            setImagemDaForca={setImagemDaForca}
            palavraSorteada={palavraSorteada}
            setPalavraSorteada={setPalavraSorteada}
            jogoEmProgresso={jogoEmProgresso}
            setJogoEmProgresso={setJogoEmProgresso}
            setNumeroDeErros={setNumeroDeErros}
          />
          <Letras
            jogoEmProgresso={jogoEmProgresso}   
            setJogoEmProgresso={setJogoEmProgresso}
            palavraSorteada={palavraSorteada}   
            setPalavraSorteada={setPalavraSorteada}  
            numeroDeErros={numeroDeErros}
            setNumeroDeErros={setNumeroDeErros}
            setImagemDaForca={setImagemDaForca}
          />
          <Chute
            jogoEmProgresso={jogoEmProgresso}
          />
        </main>
      </StyledBody>
   </>
  );
}

const StyledBody = styled.main`
  margin: auto;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  > main {
    width: 80%;
  }
`;

export default App;
