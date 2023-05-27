import * as S from "./style";

type BlogPropsType = {
  id: number;
  name: string;
  summary: string;
  titleImg?: string;
  date: string;
}
const BlogPost = ({ id,name,summary, titleImg, date }: BlogPropsType) => {
  return (
    <S.MainContainer>
      {titleImg && <img src={titleImg} />}
      <S.Title>
        <S.TitleText>{name}</S.TitleText>
        <S.Line />
        <S.TitleText>{date}</S.TitleText>
      </S.Title>

      <p>{summary}</p>
    </S.MainContainer>
  )
}

export default BlogPost;