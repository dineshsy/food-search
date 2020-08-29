import React from 'react'
import styled, { keyframes } from 'styled-components'

const loader = keyframes`
    0%{
        clip-path: inset(100% 0 0 0);
    }
    50%{
        clip-path: inset(0 0 0 0);
    }
    100%{
        clip-path: inset(100% 0 0 0 0);
    }
`

const LoaderWrapper = styled.div`
    position: relative;
    width: 30%;
    margin: auto;

    &:before {
        content: '';
        padding-top: 100%;
        display: block;
    }

    .__animated {
        clip-path: inset(100% 0 0 0);
        animation: ${loader} 1s ease-in infinite;
    }

    img {
        width: 60%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
`
export const Loader = () => {
    return (
        <LoaderWrapper>
            <img
                class="__animated"
                src="https://image.flaticon.com/icons/svg/561/561071.svg"
                alt=""
            />
            <img
                src="https://image.flaticon.com/icons/svg/560/560969.svg"
                alt=""
            />
        </LoaderWrapper>
    )
}
