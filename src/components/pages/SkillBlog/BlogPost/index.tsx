import { BodyLarge2 } from "@styles/text.style";
import * as S from "./style";

type BlogPropsType = {
  id: number;
  name: string;
  summary: string;
  titleImg?: string;
  date: string;
  to:string;
}
const BlogPost = ({ id,name,summary, titleImg, date,to }: BlogPropsType) => {
  return (
    <S.MainContainer to={to}>
      {titleImg && <img src={titleImg} />}
      <S.Title>
        <S.TitleText>{name}</S.TitleText>
        <S.Line />
        <S.TitleText>{date}</S.TitleText>
      </S.Title>

      <BodyLarge2>{summary}</BodyLarge2>
    </S.MainContainer>
  )
}

export default BlogPost;