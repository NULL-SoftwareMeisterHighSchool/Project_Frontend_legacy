import UserIcon from "@components/common/UserIcon";
import { More } from "@assets/images/icon/More";
import { Delete } from "@assets/images/icon/Delete";
import { CommentStateType } from './comment.type';
import { useState } from "react";
import * as S from './style'

export interface ComentType{
    username: string;
    content: String;
    date: String;
    time: String;
    to: any;
    state?: CommentStateType;
}

const Comment = (
    {
        username,
        content,
        date,
        time,
        to,
        state = "COMMENT",
    }:
ComentType) => {
    const [modal, setModal] = useState<boolean>(false);
    return(
        <S.Comment state={state}>
            <S.CommentContents>
                <UserIcon 
                backWidth="40px" 
                iconWidth={22}
                onClick={()=>{window.location.replace(to)}}/>
                <S.Row>
                    <S.Column>
                        <S.CommentName onClick={()=>{window.location.replace(to)}}>{username}</S.CommentName>
                        <S.CommentContent>{content}</S.CommentContent>
                    </S.Column>
                    <div onClick={()=>{
                        {
                            modal ? setModal(false) : setModal(true)
                        }
                    }}>
                        <More />
                    </div>
                </S.Row>
                {
                    modal && 
                    <S.CommentDelet>
                        <Delete />
                        <S.CommentDeletText>댓글 삭제하기</S.CommentDeletText>
                    </S.CommentDelet> 
                }
            </S.CommentContents>
            <S.CommentInfo>
                <S.CommentInfoText>{date}</S.CommentInfoText>
                <S.CommentInfoText>{time}</S.CommentInfoText>
            </S.CommentInfo>
        </S.Comment>
    );
} 

export default Comment;