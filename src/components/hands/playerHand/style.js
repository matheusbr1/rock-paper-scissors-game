import styled, { css } from 'styled-components'

export const Container = styled.div`

    display: flex;
    width: 100%;
    justify-content: space-evenly;

    img {
        width: 33%;
        height: 400px;
        opacity:0.2;
        transition: linear 0.05s;
    }

    img:hover {
        opacity:1
    }

    ${props => props.playing ? css`
        img {
            opacity:0.2;
        }
    ` : css`
        img {
            opacity:1;
            transition: none;
            width: 100%;
        }
    `}

    @media(max-width:768px) {
        img {
            height: unset
        }
    }
`