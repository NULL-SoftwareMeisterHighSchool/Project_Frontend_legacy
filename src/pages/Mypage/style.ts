import styled from "styled-components";
import { color } from "@styles/theme.style";
import { Title ,Body2, TitleLarge, BodyStrong, BodyLarge } from "@styles/text.style";

export const MypageContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 40px;
`;

export const User = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`;

export const UserImg = styled.div`
    width: 80px;
    height: 80px;
    border-radius: 80px;
    background-color: ${color.grayDark2};
`;

export const UserIntro = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
`;

export const UserName = styled(Title)`
`;

export const UserDescript = styled(BodyLarge)`
`;

export const UserContectSection = styled.div`
    display: flex;
    padding: 0px 64px;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 12px;
`;

export const UserContectInfo = styled.div`
    display: flex;
`;

export const UserContectTitle = styled(Body2)`
    width: 64px;
    color: ${color.grayDark1};
`;

export const UserContect = styled(Body2)`
    color: ${color.grayDark1};
`;
