import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus {
        outline: 0;
        box-shadow: 0 0 0 2px ${({ theme }) => theme.colors['gray-500']};
    }

    body {
        background: ${({ theme }) => theme.colors['gray-900']};
        color: ${({ theme }) => theme.colors['gray-300']};
    }

    body, input, button, textarea {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1rem;
        -webkit-font-smoothing: antialiased;
    }

    input:focus {
        border-color: inherit;
        -webkit-box-shadow: none;
        box-shadow: none;
        outline: none;
    }

`;
