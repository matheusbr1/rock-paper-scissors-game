import React, { createContext, useState, useEffect } from 'react'

import useSound from 'use-sound'

import FailSound from '../assets/TunePocket-Hi-Tech-Error-Alert-5-Preview.mp3'
import WinSound from '../assets/TunePocket-Click-18-Preview.mp3'
import AtieFound from '../assets/TunePocket-Wet-Punch-3-Preview.mp3'

export const AppContext = createContext()

const AppProvider = ({ children }) => {

    const [playing, setPlaying] = useState(true)

    const [result, setResult] = useState('')
    const [round, setRound] = useState('')

    const [scorePlayer, setScorePlayer] = useState(0)
    const [scoreComputer, setScoreComputer] = useState(0)

    const [FailSoundEffect] = useSound(
        FailSound, { volume: 0.25 }
    );

    const [ATieSoundEffect] = useSound(
        AtieFound, { volume: 0.45 }
    );

    const [WinSoundEffect] = useSound(
        WinSound, { volume: 0.45 }
    );

    var resetGame = () => setTimeout(function () {
        console.log('Resetando game...')
        setPlaying(true)
        setResult('')
        clearTimeout(resetGame)
    }, 3000)

    useEffect(() => {
        if (result === 'Você perdeu!') {
            setScoreComputer(scoreComputer + 1)
            FailSoundEffect()
            resetGame()
        }

        if (result === 'Empate') {
            ATieSoundEffect()
            resetGame()
        }

        if (result === 'Você ganhou!') {
            setScorePlayer(scorePlayer + 1)
            WinSoundEffect()
            resetGame()
        }
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