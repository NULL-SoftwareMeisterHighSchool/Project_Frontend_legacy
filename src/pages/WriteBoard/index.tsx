import React, { useEffect, useState } from "react";
import { useMutation } from "react-query";
import * as S from "./style";
import { postWrite } from "@apis/article";
import Toast from "@components/pages/WriteBoard/Toast";

const WriteBoard = () => {
    const [title, setTitle] = useState("");
    const [articleType, setArticleType] = useState("GENERAL");
    const [blogContent, setBlogContent] = useState(
        "## 내용을 입력해주세요.\n이것은 내용입니다. 호호호"
    );
    const { mutate: writeMutate } = useMutation(postWrite, {
        onSuccess: ()=>{
            alert("글 작성 성공");
            window.location.href = "/";
        },
        onError: ()=>{
            alert("글 작성 실패!!!");
        }
    });
    return (
        <>
            <S.Header>
                <S.STitle>
                    {
                        articleType == "GENERAL" ? "게시판 글쓰기" : "기술 블로그 글쓰기" 
                    }
                </S.STitle>
                <S.Post onClick={()=>{
                    writeMutate({title, articleType, blogContent})
                }}>글 게시하기</S.Post>
            </S.Header>
            <S.TitleInput
                placeholder="제목을 입력해주세요"
                value={title}
                onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
                    setTitle(e.target.value)
                }
            />
            <Toast content={blogContent} setContent={setBlogContent} />
        </>
    );
};

export default WriteBoard;