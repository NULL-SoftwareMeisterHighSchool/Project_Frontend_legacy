import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";

import { color } from "@styles/theme.style";
import { TitleLarge2, Body2, BodyLarge2, BodyStrong, SubTitle } from "@styles/text.style";


export const Post = styled.main`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
 
    gap: 40px;
`; 

export const Thumbnail = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 40px;
`; 

export const Title = styled(TitleLarge2)`
    width: fit-content;
    height: 57px;

    color: ${color.black};
`;

export const Profile = styled.article`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 12px;

    width: fit-content;
    height: 48px;
`;

export const ProfileInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 4px;

    width: fit-content;
    height: 40px;
`;

export const Name = styled(BodyLarge2)`
    width: fit-content;
    height: 19px;

    line-height: 19px;

    color: #5C5C5C;
`; 

export const Date = styled(Body2)`
    width: fit-content;
    height: 17px;

    line-height: 17px;
    
    color: #757575;
`;

export const Line = styled.hr`
	width: 100%;
	height: 0px;

	border: 1px solid ${color.grayLight1};
`;

export const IconSection = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
`;

export const Icons = styled.div`
	display: flex;
    align-items: center;
    gap: 24px;
`;

export const IconInfo = styled(Body2)`
    display: flex;
    align-items: center;
    gap: 4px;
`;

export const IconText = styled(Body2)`
    color: ${color.grayDark1};
`;

export const UpdateIcon = styled(Link)`
    display: flex;
    align-items: center;
    gap: 4px;
    text-decoration: none;
`;

export const UpdateText = styled(Body2)`
    color: ${color.primaryBase};
`;

export const Comment = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding: 0px 0px 40px;
    gap: 10px;

    width: 100%;
`;


export const Reply = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 20px;
    gap: 6px;

    width: 100%;
    height: 100px;

    background: #F3F3F3;
    border-radius: 8px;
`;

export const WhatFollows = styled(SubTitle)`
    height: 32px;

    line-height: 160%;
    text-align: center;

    color: ${ color.black };
`;

export const Board = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	padding: 0px;

	width: 100%;
	height: 424px;
`;