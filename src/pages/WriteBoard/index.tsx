import React, { useEffect, useState } from "react";
import * as S from "./style";
import Toast from "@components/pages/WriteBoard/Toast";

const WriteBoard = () => {
    const [title, setTitle] = useState("");
    const [blogContent, setBlogContent] = useState(
        "## 내용을 입력해주세요.\n이것은 내용입니다. 호호호"
    );
    
    return (
        <>
            <S.Header>
                <S.STitle>기술 블로그 글쓰기</S.STitle>
                <S.Post>글 게시하기</S.Post>
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
