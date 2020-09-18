import React, { createContext, useState, useEffect } from 'react'

export const AppContext = createContext()

const AppProvider = ({ children }) => {

    const [result, setResult] = useState('')
    const [round, setRound] = useState('')
    const [showingResult, setShowingResult] = useState(false)

    useEffect(() => {
        (result !== '') && (setShowingResult(true))
        setTimeout(() => {
            (result !== '') && (setShowingResult(false))
        }, 2000)
    }, [result])

    useEffect(() => {

        console.log(round)

        const user = round.user
        const computer = round.computer

        const conditional = user !== undefined && user !== ""
            && computer !== undefined && computer !== ""

        if (conditional) {

            //EMPATE
            if (user === computer) {
                setResult('Empate')
            }

            // PEDRA X TESOURA
            if (user === 'rock' && computer === 'scissors') {
                setResult('Você ganhou!')
            }
            if (user === 'scissors' && computer === 'rock') {
                setResult('Você perdeu!')
            }

            // PAPEL X PEDRA
            if (user === 'paper' && computer === 'rock') {
                setResult('Você ganhou!')
            }
            if (user === 'rock' && computer === 'paper') {
                setResult('Você perdeu!')
            }

            // PAPEL X TESOURA
            if (user === 'scissors' && computer === 'paper') {
                setResult('Você ganhou!')
            }
            if (user === 'paper' && computer === 'scissors') {
                setResult('Você perdeu!')
            }


        }

    }, [round])

    return (
        <AppContext.Provider value={{
            result,
            setRound,
            showingResult
        }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppProvider