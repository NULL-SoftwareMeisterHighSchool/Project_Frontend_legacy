import React, { useEffect, useState } from "react";
import { useMutation, useQuery } from "react-query";
import * as S from "./style";
import { getboardDetail, putWrite } from '@apis/article';
import { useParams } from "react-router-dom";
import { alertError, alertSuccess } from "@utils/toastify";

const UpdateBoard = () => {
    const Toast = React.lazy(() => import("@components/pages/WriteBoard/Toast"));
    const { id } = useParams();
    const [title, setTitle] = useState("");
    const [articleType, setArticleType] = useState("GENERAL");
    const [content, setBlogContent] = useState("");
    const { mutate: putwriteMutate } = useMutation(putWrite, {
        onSuccess: ()=>{
            alertSuccess("글 수정에 성공했습니다.");
            window.location.href = "/";
        },
        onError: ()=>{
            alertError("글 수정에 실패했습니다.");
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
                    putwriteMutate({id, title, content});
                }}>글 수정하기</S.Post>
            </S.Header>
            <S.TitleInput
                placeholder="제목을 입력해주세요"
                value={title}
                onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
                    setTitle(e.target.value)
                }
            />
            <React.Suspense fallback={<div>Loading...</div>}>
                <Toast content={content} setContent={setBlogContent} />
            </React.Suspense>
        </>
    );
};

export default UpdateBoard;