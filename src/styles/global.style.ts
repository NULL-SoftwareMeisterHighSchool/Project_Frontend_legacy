import { createGlobalStyle } from "styled-components";
import { color } from "./theme.style";
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

    .CircularProgressbar {
		width: 120px;
		height: 120px;
	}

	.CircularProgressbar-text {
		font-family: 'Pretendard';
		font-style: normal;
		font-weight: 600;
		font-size: 24px;
		line-height: 36px;
		color: ${color.primaryBase};
	 }
`;

export default GlobalStyle;
