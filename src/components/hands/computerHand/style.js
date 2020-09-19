import styled, { css } from 'styled-components'

export const Container = styled.div`

    display: flex;
    width: 100%;
    justify-content: space-evenly;

    img {
        width: 33%;
        height: 400px;
        transition: linear 0.05s;
    }

    ${props => !props.playing && css`
        img {
           width: 100%
        }
    `}

    @media(max-width:768px) {
        img {
            height: unset
        }
    }
`