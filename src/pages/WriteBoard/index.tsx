import * as S from './style';
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';

type Props = {
  content?: string;
};

const WriteBoard = ({ content }:Props) => {
  return (
    <>
      <S.Header>
        <S.STitle>기술 블로그 글쓰기</S.STitle>
        <div />
        <S.Post>글 게시하기</S.Post>
      </S.Header>
      <Editor 
        initialValue={content ?? '# 제목\n 내용을 입력해주세요.'}
        previewStyle="vertical"
        initialEditType='markdown'
        autofocus={true}
        hideModeSwitch
        height='90vh'
      />
    </>
  );
};

export default WriteBoard;