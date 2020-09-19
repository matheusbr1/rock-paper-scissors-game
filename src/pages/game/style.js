import styled, { css } from 'styled-components'

export const Container = styled.div`
    display: grid;
    height: 100vh;
    width: 100%;

    color: rgba(255,255,255);
    font-size: 1.3em;

    grid-template: "Score Score"
                   "Player Computer";


    @media(max-width:768px) {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
`

export const Score = styled.div`
    grid-area: Score;
    height: 30vh;
    width: 100%;
    max-width: 920px;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1#result {
        transition: color 0.2s;
    }

    ${props => props.result === 'Você ganhou!' && css`
        h1#result {
            color: #1E5601;
        }
    `}

    ${props => props.result === 'Você perdeu!' && css`
        h1#result {
            color: #70161D;
        }
    `}
    
`
const HandsPlayer = styled.div`
    height: 70vh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;

    > div {
        transition: width 0.8s
    }

    @media(max-width:768px) {
        height: 45vh;
    }

    ${props => !props.playing && css`
        > div {
            width: 50%;

            @media(max-width:768px) {
                width: 45%;
            }
        }
    `}
`
export const Player = styled(HandsPlayer)`
    grid-area: Player;
`
export const Computer = styled(HandsPlayer)`
    grid-area: Computer;
`