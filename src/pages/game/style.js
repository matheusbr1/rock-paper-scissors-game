import styled from 'styled-components'

export const Container = styled.div`
    display: grid;
    height: 100vh;
    width: 100%;

    color: rgba(255,255,255);
    font-size: 1.3em;

    grid-template: "Score Score"
                   "Player Computer";
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
`
const HandsPlayer = styled.div`
    height: 70vh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
`
export const Player = styled(HandsPlayer)`
    grid-area: Player;
`
export const Computer = styled(HandsPlayer)`
    grid-area: Computer;
`