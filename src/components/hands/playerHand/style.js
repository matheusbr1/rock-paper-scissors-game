import styled, { css } from 'styled-components'

export const Container = styled.div`

    display: flex;
    width: 100%100vh;
    justify-content: space-evenly;

    img {
        width: 100%;
        height: 400px;
        opacity:0.2
    }

    img:hover {
        opacity:1
    }

    ${props => props.playing ? css`
        img {
            opacity:0.2
        }
    ` : css`
        img {
            opacity:1
        }
    `}

    @media(max-width:768px) {
        img {
            height: unset
        }
    }
`