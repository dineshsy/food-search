import styled, { createGlobalStyle } from 'styled-components'
import { rgba } from 'polished'
export const InputStyles = createGlobalStyle`
    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    textarea:-webkit-autofill,
    textarea:-webkit-autofill:hover,
    textarea:-webkit-autofill:focus,
    select:-webkit-autofill,
    select:-webkit-autofill:hover,
    select:-webkit-autofill:focus {
        border: 1px solid transparent !important;
        -webkit-text-fill-color: #828282 !important;
        -webkit-box-shadow: none !important;
        transition: background-color 5000s ease-in-out 0s !important;
    }

    ::-webkit-input-placeholder {
        /* Chrome/Opera/Safari */
        color: ${rgba('#FFF', 0.74)};
    }

    ::-moz-placeholder {
        /* Firefox 19+ */
        color: ${rgba('#FFF', 0.74)};
    }

    :-ms-input-placeholder {
        /* IE 10+ */
        color: ${rgba('#FFF', 0.74)};
    }

    :-moz-placeholder {
        /* Firefox 18- */
        color: ${rgba('#FFF', 0.74)};
    }
`

export const ResponsiveBoilerPlate = createGlobalStyle`
/* 0 - 600px: Phone 
600 - 900px: Tablet portrait 
900 - 1200px: Tablet landscape 
[1200 - 1800] is where our normal styles apply 
1800px + : Big desktop */
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap');
*,
*::after,
*::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
    font-family: 'Roboto', sans-serif;
}

html {
    font-size: 62.5%;
    scroll-behavior: smooth;
}

@media only screen and (max-width: 75em) {
    html {
        font-size: 56.25%;
    }
}

@media only screen and (max-width: 56.25em) {
    html {
        font-size: 50%;
    }
}

@media only screen and (min-width: 112.5em) {
    html {
        font-size: 75%;
    }
}

body {
    box-sizing: border-box;
}

@media only screen and (max-width: 56.25em) {
    body {
        padding: 0;
    }
}

::selection {
    background-color: #2aa3f6;
    color: white;
}
`
export const BodyWrapper = styled.main`
    width: 100%;
    height: 100%;
`
