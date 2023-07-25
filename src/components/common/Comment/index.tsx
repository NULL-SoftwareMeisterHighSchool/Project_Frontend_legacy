import React from "react";
import UserIcon from "@components/common/UserIcon";
import { CommentStateType } from './comment.type'
import * as S from './style'

export interface ComentType{
    username: string;
    content: String;
    state: CommentStateType;
}

const Comment = (
    {
        username,
        content,
        state = "COMMENT",
    }:
ComentType) => {
    return(
        <S.Comment state={state}>
            <S.CommentContents>
            <UserIcon backWidth="40px" iconWidth={22}/>
            <S.Column>
                <S.CommentName>{username}</S.CommentName>
                <S.CommentContent>{content}</S.CommentContent>
            </S.Column>
            </S.CommentContents>
        </S.Comment>
    );
} 

export default Comment;