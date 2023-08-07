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
    justify-content: space-between;
    >div{
        display: flex;
        align-items: center;
        gap: 20px;
    }
    @media (max-width:1200px) {
        align-items: start;
        flex-direction: column;
    }
`;

export const ProfileUpdateBtn = styled.div`
    padding: 14px 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${color.grayLight2};
    border-radius: 8px;
    cursor: pointer;
    >p{
        color: ${color.grayDark2};
    }
    @media (max-width:1200px) {
        margin: 40px 0 0 10px;
    }
`;

export const UserIntro = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
`;

export const UserInformation = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
`;

export const UserName = styled(Title)`
`;

export const Email = styled(Body2)`
    color: ${color.grayDark1};
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
    @media (max-width:1250px){
        padding: 0px 0px;
    }
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

export const Stack = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 12px;
`;

export const Blog = styled.div`
    display: flex;
    padding: 40px 0px;
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
`;

export const SubTitle = styled(Title)`
`;

export const BlogContainer = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 20px;
    width: 100%;
    overflow-x: scroll;
`;

export const Post = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
`;

export const PostContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;
