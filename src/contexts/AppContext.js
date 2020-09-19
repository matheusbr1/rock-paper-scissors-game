import React, { createContext, useState, useEffect } from 'react'

export const AppContext = createContext()

const AppProvider = ({ children }) => {

    const [playing, setPlaying] = useState(true)

    const [result, setResult] = useState('')
    const [round, setRound] = useState('')

    const [scorePlayer, setScorePlayer] = useState(0)
    const [scoreComputer, setScoreComputer] = useState(0)

    useEffect(() => {
        if (result === 'Você perdeu!') {
            setScoreComputer(scoreComputer + 1)
        }
        if (result === 'Você ganhou!') {
            setScorePlayer(scorePlayer + 1)
        }

        var resetGame = setInterval(function () {
            console.log('Resetando game...')
            setPlaying(true)
            clearInterval(resetGame)
        }, 3000)

    }, [result])

    useEffect(() => {

        console.log(round)

        const user = round.user
        const computer = round.computer

        const conditional = user !== undefined && user !== ""
            && computer !== undefined && computer !== ""

        if (conditional) {
            //EMPATE
            if (user === computer) setResult('Empate')

            // PEDRA X TESOURA
            if (user === 'rock' && computer === 'scissors') setResult('Você ganhou!')
            if (user === 'scissors' && computer === 'rock') setResult('Você perdeu!')

            // PAPEL X PEDRA
            if (user === 'paper' && computer === 'rock') setResult('Você ganhou!')
            if (user === 'rock' && computer === 'paper') setResult('Você perdeu!')

            // PAPEL X TESOURA
            if (user === 'scissors' && computer === 'paper') setResult('Você ganhou!')
            if (user === 'paper' && computer === 'scissors') setResult('Você perdeu!')
        }

    }, [round])

    return (
        <AppContext.Provider value={{
            result,
            round,
            setRound,

            scorePlayer,
            scoreComputer,

            playing,
            setPlaying
        }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppProvider