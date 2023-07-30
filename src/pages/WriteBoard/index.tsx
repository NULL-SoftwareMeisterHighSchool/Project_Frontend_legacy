import * as S from './style';
import Toast from '@components/pages/Toast';

const WriteBoard = () => {
  return (
    <>
      <S.Header>
        <S.STitle>기술 블로그 글쓰기</S.STitle>
        <S.Post>글 게시하기</S.Post>
      </S.Header>
      <Toast />
    </>
  );
};

export default WriteBoard;