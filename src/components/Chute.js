import styled from "styled-components"

export default function Chute() {
    return (
        <>
            <SessaoDoChute>
                <p>Já sei a palavra!</p>
                <input></input>
                <button onClick={() => alert('Já sei a palavra!')}><p>Chutar</p></button>
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