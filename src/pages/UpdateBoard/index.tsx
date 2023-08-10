import React, { useEffect, useState } from "react";
import { useMutation, useQuery } from "react-query";
import * as S from "./style";
import Toast from "@components/pages/WriteBoard/Toast";
import { getboardDetail, patchWrite } from '@apis/article';
import { useParams } from "react-router-dom";

const UpdateBoard = () => {
    const { id } = useParams();
    const [title, setTitle] = useState("");
    const [articleType, setArticleType] = useState("GENERAL");
    const [content, setBlogContent] = useState(
        "## 내용을 입력해주세요.\n이것은 내용입니다. 호호호"
    );
    const { mutate: patchwriteMutate } = useMutation(patchWrite, {
        onSuccess: ()=>{
            alert("글 수정 성공");
            window.location.href = "/";
        },
        onError: ()=>{
            alert("글 수정 실패!!!");
        }
    });
    const { refetch } = useQuery("getUpdate", ()=>getboardDetail(id), {
        onSuccess: (res)=>{
            setTitle(res.data.title);
            setArticleType(res.data.articleType);
            setBlogContent(res.data.body);
        },
        onError: ()=>{
            console.log("Error");
        },
        enabled: false
    });

    useEffect(() => {
        refetch();
    }, []);

    return (
        <>
            <S.Header>
                <S.STitle>
                    {
                        articleType == "GENERAL" ? "게시판 글쓰기" : "기술 블로그 글쓰기" 
                    }
                </S.STitle>
                <S.Post onClick={()=>{
                    patchwriteMutate({id, title, content})
                }}>글 게시하기</S.Post>
            </S.Header>
            <S.TitleInput
                placeholder="제목을 입력해주세요"
                value={title}
                onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
                    setTitle(e.target.value)
                }
            />
            <Toast content={content} setContent={setBlogContent} />
        </>
    );
};

export default UpdateBoard;