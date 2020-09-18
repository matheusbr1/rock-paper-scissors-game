import React, { useContext, useEffect, useState } from 'react'
import { Container, Score, Player, Computer } from './style'
import Hands from '../../components/hands'

import { AppContext } from '../../contexts/AppContext'

function Game() {

    const { result, showingResult } = useContext(AppContext)

    useEffect(() => {
        console.log(result)
    }, [result])

    return (
        <Container>
            <Score>

                {(showingResult) ? (
                    <h1> {
                        (result !== '') && (result)
                    } </h1>
                ) : (
                        <>
                            <h1>Score</h1>
                            <h2>Você: 0</h2>
                            <h2>Computer: 0</h2>
                        </>
                    )}
            </Score>

            <Player>
                <h1>Player</h1>
                <Hands player={'user'} />
            </Player>

            <Computer>
                <h1>Computer</h1>
                <Hands player={'computer'} />
            </Computer>
        </Container>
    )
}

export default Game