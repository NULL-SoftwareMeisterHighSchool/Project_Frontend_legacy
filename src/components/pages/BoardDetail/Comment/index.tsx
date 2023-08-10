import UserIcon from "@components/common/UserIcon";
import { More } from "@assets/images/icon/More";
import { Delete } from "@assets/images/icon/Delete";
import { CommentStateType } from "./comment.type";
import { deleteComment } from "@apis/article";
import { useMutation } from "react-query";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Modal from "@components/common/modal";
import * as S from "./style";

export interface ComentType {
  commentID: number;
  username: string;
  content: String;
  date: String;
  time: String;
  to: any;
  state?: CommentStateType;
}

const Comment = ({
  commentID,
  username,
  content,
  date,
  time,
  to,
  state = "COMMENT",
}: ComentType) => {
  const { id } = useParams();
  const [commentOpen, setCommentOpen] = useState<boolean>(false);
  const [modal, setModal] = useState<boolean>(false);
  const { mutateAsync: deleteCommentMutate } = useMutation(deleteComment, {
    onSuccess: ()=>{
      alert("삭제 성공");
      setCommentOpen(false);
      setModal(false);
    },
    onError: ()=>{
      alert("삭제 실패");
      setCommentOpen(false);
      setModal(false);
    },
  });

  return (
    <>
      {commentOpen && (
        <Modal setVal={setCommentOpen}>
          <S.UseTitleContainer>
            <S.UserTitle>정말로 댓글을 삭제하실건가요?</S.UserTitle>
            <S.UserSubTitle>삭제한 댓글은 되돌릴 수 없어요.</S.UserSubTitle>
          </S.UseTitleContainer>
          <S.UserBtnContainer>
            <button onClick={()=>{
              setCommentOpen(false);
            }}>취소</button>
            <button onClick={()=>{
              deleteCommentMutate({id, commentID});
            }}>댓글 삭제하기</button>
          </S.UserBtnContainer>
        </Modal>
      )}
      <S.Comment state={state}>
        <S.CommentContents>
          <UserIcon
            backWidth="40px"
            iconWidth={22}
            onClick={() => {
              window.location.replace(to);
            }}
          />
          <S.Row>
            <S.Column>
              <S.CommentName
                onClick={() => {
                  window.location.replace(to);
                }}
              >
                {username}
              </S.CommentName>
              <S.CommentContent>{content}</S.CommentContent>
            </S.Column>
            <div
              onClick={() => {
                {
                  modal ? setModal(false) : setModal(true);
                }
              }}
            >
              <More />
            </div>
          </S.Row>
          {modal && (
            <S.CommentDelet onClick={()=>{
                setCommentOpen(true);
            }}>
              <Delete />
              <S.CommentDeletText>댓글 삭제하기</S.CommentDeletText>
            </S.CommentDelet>
          )}
        </S.CommentContents>
        <S.CommentInfo>
          <S.CommentInfoText>{date}</S.CommentInfoText>
          <S.CommentInfoText>{time}</S.CommentInfoText>
        </S.CommentInfo>
      </S.Comment>
    </>
  );
};

export default Comment;
