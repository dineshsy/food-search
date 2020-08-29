import styled from 'styled-components'

export const ContentWrapper = styled.div`
    width: 100%;
    margin: auto;
    max-width: 1440px;
    display: ${(props) => props.display};
    padding: 0 5rem;
`

export const RestaurantWrapper = styled.div`
    width: 15rem;
    height: 20rem;
    border-radius: 10px;
    background-color: #fff;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    transition: all 0.3s cubic-bezier(0.19, 1, 0.22, 1);
    :hover {
        transform: translateZ(1rem) translateY(-1rem);
        filter: drop-shadow(0px 10px 10px rgba(0, 0, 0, 0.25));
    }
    display: grid;
    padding: 1rem;
`
export const RestaurantsWrapper = styled.section`
    padding: 5rem 0;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
    gap: 1.5rem 1rem;
    display: grid;
`
export const Label = styled.label`
    font-size: ${(props) => props.size};
    color: ${(props) => props.color};
    font-weight: ${(props) => (props.bold ? 600 : 400)};
`
