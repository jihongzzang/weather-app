import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
    ${reset}
    :root {}

    html {
        font-size: 62.5%;
    }

    body {
        font-family: 'Noto Sans KR', sans-serif;
        font-size: 1.6rem;
        line-height: 1.5;
        letter-spacing: -0.375px;
        font-weight: 400;
        -webkit-overflow-scrolling: touch;
        background: ${({ theme }) => theme.backgroundColor};
    }

    #root {
    }

    * {
        box-sizing: border-box;
    }

    a { 
        color: #fff; 
        text-decoration: none; 
        outline: none; 
    } 

    svg {
        flex-shrink: 0;
    }

    /* Chrome, Safari, Edge, Opera */
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    .scrollbar-hide::-webkit-scrollbar {
        display: none;
    }

    select {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        outline: none;
    }

    select::-ms-expand {
        display: none;
    }
`;

export default GlobalStyles;
