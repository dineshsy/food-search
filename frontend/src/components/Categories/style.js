import styled from 'styled-components'

export const CategorysWrapper = styled.section`
    padding: 10rem 5rem 2.5rem;
    display: flex;
    justify-content: space-between;

    > * {
        :not(:first-child) {
            margin-left: 1rem;
        }
        :not(:last-child) {
            margin-right: 1rem;
        }
    }
`

export const CategoryWrapper = styled.div`
    width: 20rem;
    height: 15rem;
    background: linear-gradient(
            184deg,
            rgba(0, 0, 0, 0.5) 0%,
            rgba(4, 97, 159, 0.5) 74%
        ),
        url('${(props) => props.imgSrc}');
    background-size: cover;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    cursor: pointer;
    :hover {
        transform: translateZ(1rem) translateY(-1rem) scale(1.2);
        filter: drop-shadow(0px 20px 20px rgba(0, 0, 0, 0.25));
    }
    transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);

    display: flex;
    padding: 1rem;
    align-items: flex-end;
    border-radius: 10px;
`

export const Label = styled.label`
    font-size: ${(props) => props.size};
    color: ${(props) => props.color};
    font-weight: ${(props) => (props.bold ? 600 : 400)};
`
