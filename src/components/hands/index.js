import React, { useState, useContext, useEffect } from 'react'
import { Container } from './style'

import { AppContext } from '../../contexts/AppContext'

import Rock from '../../assets/rockhand.svg'
import Paper from '../../assets/paperhand.svg'
import Scissors from '../../assets/scissorsHand.svg'

function Hands({ player }) {

    const { setRound } = useContext(AppContext)

    const sortComputerHand = () => {
        const handsPossible = ['rock', 'paper', 'scissors']
        const handSorted = Math.floor(Math.random() * 3);
        return handsPossible[handSorted]
    }

    const [userHand, setUserHand] = useState('')
    const [computerHand, setComputerHand] = useState('')

    useEffect(() => {
        setRound({
            user: userHand,
            computer: computerHand
        })
    }, [userHand, computerHand])

    const handleHandChoosed = hand => {
        if (player === 'user') {
            setUserHand(hand)
            setComputerHand(sortComputerHand())
        }
    }

    return (
        <Container>

            <img
                onClick={() => handleHandChoosed('rock')}
                src={Rock}
            />

            <img
                onClick={() => handleHandChoosed('paper')}
                src={Paper}
            />

            <img
                onClick={() => handleHandChoosed('scissors')}
                src={Scissors}
            />

        </Container>
    )

}

export default Hands