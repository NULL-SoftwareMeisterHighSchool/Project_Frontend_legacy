import UserIcon from "@components/common/UserIcon";
import { CommentStateType } from './comment.type'
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
    return(
        <S.Comment state={state}>
            <S.CommentContents>
            <UserIcon 
            backWidth="40px" 
            iconWidth={22}
            onClick={()=>{window.location.replace(to)}}
            />
            <S.Column>
                <S.CommentName onClick={()=>{window.location.replace(to)}}>{username}</S.CommentName>
                <S.CommentContent>{content}</S.CommentContent>
            </S.Column>
            </S.CommentContents>
            <S.CommentInfo>
                <S.CommentInfoText>{date}</S.CommentInfoText>
                <S.CommentInfoText>{time}</S.CommentInfoText>
            </S.CommentInfo>
        </S.Comment>
    );
} 

export default Comment;