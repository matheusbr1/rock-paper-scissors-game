import React, { useContext, useEffect, useState } from 'react'
import { Container, Score, Player, Computer } from './style'

import PlayerHand from '../../components/hands/playerHand'
import ComputerHand from '../../components/hands/computerHand'

import { useSpring, animated } from 'react-spring'

import { AppContext } from '../../contexts/AppContext'

function Game() {

    const { result, playing, scorePlayer, scoreComputer } = useContext(AppContext)

    const [device, setDevice] = useState(() => (window.innerWidth > 768) ? 'desk' : 'mobile')

    const propHand = useSpring({
        from: { marginBottom: -250 },
        to: { marginBottom: 0 }
    })

    const propScore = useSpring({
        from: { marginTop: -250 },
        to: { marginTop: 0 }
    })

    return (
        <Container>
            <Score>
                <animated.div style={propScore} >
                    {(!playing) ? (
                        <h1> {
                            (result !== '') && (result)
                        } </h1>
                    ) : (<>
                        <h1>Score</h1>
                        <h2>Você: {scorePlayer}</h2>
                        <h2>Computer: {scoreComputer}</h2>
                    </>)}
                </animated.div>
            </Score>

            <Player>
                <h1>Player</h1>
                <animated.div style={propHand}  >
                    <PlayerHand />
                </animated.div>
            </Player>
            <Computer>
                <h1>Computer</h1>
                <animated.div style={propHand}>
                    <ComputerHand />
                </animated.div>
            </Computer>
        </Container>
    )
}

export default Game