import styled from 'styled-components'
import { rgba } from 'polished'
export const HeroWrapper = styled.section`
    width: 100%;
    height: 50vh;
    background: linear-gradient(
            147deg,
            ${rgba('#000000', 0.5)} 0%,
            ${rgba('#04619f', 0.5)} 74%
        ),
        url('./hero-bg.jpg');
    background-color: #000000;
    display: grid;
`

export const ContentWrapper = styled.div`
    width: 100%;
    margin: auto;
    max-width: 1440px;
    display: ${(props) => props.display};
    padding: 0 5rem;
`

export const Label = styled.label`
    font-size: ${(props) => props.size};
    color: ${(props) => props.color};
    font-weight: ${(props) => (props.bold ? 600 : 400)};
`
