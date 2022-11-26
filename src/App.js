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
  const [jogoFoiReiniciado, setJogoFoiReiniciado] = useState(false)
  const [chuteConteudo, setChuteConteudo] = useState('')
  const [letrasChutadas, setLetrasChutadas] = useState([])
  const [usuarioGanhou, setUsuarioGanhou] = useState(false)
  const [corDoChute, setCorDoChute] = useState('')

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
            setJogoFoiReiniciado={setJogoFoiReiniciado}
            setChuteConteudo={setChuteConteudo}
            setLetrasChutadas={setLetrasChutadas}
            corDoChute={corDoChute}
            setCorDoChute={setCorDoChute}
          />
          <Letras
            jogoEmProgresso={jogoEmProgresso}   
            setJogoEmProgresso={setJogoEmProgresso}
            palavraSorteada={palavraSorteada}   
            setPalavraSorteada={setPalavraSorteada}  
            numeroDeErros={numeroDeErros}
            setNumeroDeErros={setNumeroDeErros}
            setImagemDaForca={setImagemDaForca}
            jogoFoiReiniciado={jogoFoiReiniciado}
            setChuteConteudo={setChuteConteudo}
            setJogoFoiReiniciado={setJogoFoiReiniciado}
            letrasChutadas={letrasChutadas}
            setLetrasChutadas={setLetrasChutadas}
            setUsuarioGanhou={setUsuarioGanhou}
            setCorDoChute={setCorDoChute}
          />
          <Chute
            jogoEmProgresso={jogoEmProgresso}
            setJogoEmProgresso={setJogoEmProgresso}
            jogoFoiReiniciado={jogoFoiReiniciado}
            setJogoFoiReiniciado={setJogoFoiReiniciado}
            chuteConteudo={chuteConteudo}
            setChuteConteudo={setChuteConteudo}
            palavraSorteada={palavraSorteada}
            setPalavraSorteada={setPalavraSorteada}
            setNumeroDeErros={setNumeroDeErros}
            setImagemDaForca={setImagemDaForca}
            setLetrasChutadas={setLetrasChutadas}
            setUsuarioGanhou={setUsuarioGanhou}
            setCorDoChute={setCorDoChute}
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
