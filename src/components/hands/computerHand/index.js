import React, { useState, useContext, useEffect, useCallback } from 'react'
import { Container } from './style'

import { useTransition, animated } from 'react-spring'

import { AppContext } from '../../../contexts/AppContext'

import Rock from '../../../assets/rockhand.svg'
import Paper from '../../../assets/paperhand.svg'
import Scissors from '../../../assets/scissorsHand.svg'

function ComputerHand() {

    const { round, playing } = useContext(AppContext)

    const handleHandEffect = () => {
        if (round.computer === 'rock') {
            return <img src={Rock} />
        }
        if (round.computer === 'paper') {
            return <img src={Paper} />
        }
        if (round.computer === 'scissors') {
            return <img src={Scissors} />
        }
    }

    return (
        <Container playing={playing} >
            {(playing) ? (
                <>
                    <img src={Rock} />
                    <img src={Paper} />
                    <img src={Scissors} />
                </>
            ) : handleHandEffect()}
        </Container>
    )

}

export default ComputerHand