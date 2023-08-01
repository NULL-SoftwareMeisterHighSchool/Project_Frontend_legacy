import Button from "@components/common/Button";
import * as S from "./style";
import Input from "@components/common/Input";

const CommentWrite = () => {
    return (  
        <S.CommentInfo>
            <S.InputBtnContainer>
                <div>
                    <Input 
                    title="댓글 작성" 
                    width="100%" 
                    placeholder="댓글 내용을 입력해 주세요"/>
                </div>
                <Button value="댓글 작성"/>
            </S.InputBtnContainer>
        </S.CommentInfo>
    );
}
 
export default CommentWrite;