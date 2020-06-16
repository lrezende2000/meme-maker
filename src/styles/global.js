import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        marign: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
    }

    body {
        background: #eee;
    }

    button,
    input {
        outline: 0;
    }

    button {
        cursor: pointier;
    }
`;