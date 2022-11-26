import forca0 from "./components/assets/forca0.png"
import forca1 from "./components/assets/forca1.png"
import forca2 from "./components/assets/forca2.png"
import forca3 from "./components/assets/forca3.png"
import forca4 from "./components/assets/forca4.png"
import forca5 from "./components/assets/forca5.png"
import forca6 from "./components/assets/forca6.png"

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
            palavraSorteada={palavraSorteada}
            setPalavraSorteada={setPalavraSorteada}
            jogoEmProgresso={jogoEmProgresso}
            setJogoEmProgresso={setJogoEmProgresso}
          />
          <Letras
            jogoEmProgresso={jogoEmProgresso}        
          />
          <Chute/>
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
