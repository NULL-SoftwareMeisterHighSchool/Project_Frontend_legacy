import styled from "styled-components";
import { color } from "@styles/theme.style";
import { Title, BodyLarge2 } from "@styles/text.style";

export const Background = styled.div`
    position: fixed;
    z-index: 1;
    display: flex;
    width: 100vw;
    height: 100vh;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;

    background: rgba(0, 0, 0, 0.24);
    backdrop-filter: blur(12px);
`;

export const PopUp = styled.div`
    display: flex;
    width: 620px;
    padding: 24px;
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;

    border-radius: 16px;
    background-color: ${color.white};
`;

export const Close = styled.div`
    width: 25px;
    width: 25px;
`;

export const PopUpText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 4px;
`;

export const PopUpInfo = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    align-self: stretch;
`;

export const PopUpTitle = styled(Title)`
    line-height: 36px; 
`;

export const PopUpSmalltalk = styled(BodyLarge2)`
    line-height: 24px; 
`;

export const PopUpClose = styled.div`
    color: black;
`;

export const Share = styled.div`
    display: flex;
    padding: 12px 24px;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;

    border-radius: 8px;
    background: ${color.grayLight2};
    color: ${color.grayDark1}
`;

export const Url = styled(BodyLarge2)`
    display: flex;
    align-items: center;
    gap: 24px;
`;
