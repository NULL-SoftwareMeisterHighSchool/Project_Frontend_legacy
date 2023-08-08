import Button from "@components/common/Button";
import * as S from "./style";
import Input from "@components/common/Input";
import { useMutation } from 'react-query';
import { postComment } from '@apis/article';
import { useState } from "react";

type Props = {
    id: string | undefined;
}

const CommentWrite = ({
    id
}:Props) => {
    const [ body, setBody ] = useState('');
    const { mutateAsync: commentMutate } = useMutation(postComment, {
        onSuccess: () => {
          console.log("Success");
        },
        onError: () => {
          alert('댓글작성 실패');
        }
      });
      
    return (  
        <S.CommentInfo>
            <S.InputBtnContainer>
                <div>
                    <Input 
                    title="댓글 작성" 
                    width="100%" 
                    placeholder="댓글 내용을 입력해 주세요"
                    onChange={(e)=>{setBody(e.target.value)}}
                    value={body}
                    onKeyDown={(e)=>{
                        if (e.key === "Enter" && !e.shiftKey && body.length > 0) {
                            e.preventDefault();
                            commentMutate({ id, body });
                            alert("댓글 작성 성공");
                            setBody("");
                        }
                    }}/>
                </div>
                <Button 
                value="댓글 작성"
                onClick={
                    ()=>{
                        if(body.length > 0){
                            commentMutate({ id, body });
                            alert("댓글 작성 성공");
                            setBody("");
                        }
                        else{
                            alert("빈칸입니다");
                        }
                    }
                }/>
            </S.InputBtnContainer>
        </S.CommentInfo>
    );
}
 
export default CommentWrite;