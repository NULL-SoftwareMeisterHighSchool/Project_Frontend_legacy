import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset}
    * {
        margin: 0;
        box-sizing: border-box;
    }
    p {
        font-family: 'Pretendard';
    }

    input, button {
        border: none;
        outline: none;
        font-family: 'Pretendard';
    }
    
    input:focus, button:focus {
        outline: none;
    }
`;

export default GlobalStyle;
