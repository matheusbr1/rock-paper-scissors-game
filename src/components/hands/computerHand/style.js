import styled from 'styled-components'

export const Container = styled.div`

    display: flex;
    width: 100%100vh;
    justify-content: space-evenly;

    img {
        width: 100%;
        height: 400px;
    }

    @media(max-width:768px) {
        img {
            height: unset
        }
    }
`