import React from "react";

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
            <S.CommentImg />
            <S.Column>
                <S.CommentName>{username}</S.CommentName>
                <S.CommentContent>{content}</S.CommentContent>
            </S.Column>
            </S.CommentContents>
        </S.Comment>
    );
} 

export default Comment;