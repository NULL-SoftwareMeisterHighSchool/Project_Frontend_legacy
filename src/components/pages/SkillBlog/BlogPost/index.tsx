import * as S from "./style";

type BlogPropsType = {
  data: {
    id: number;
    name: string;
    summary: string;
    titleImg: string;
    date: string;
  }
}
const BlogPost = ({ data }: BlogPropsType) => {
  return (
    <S.MainContainer>
      <img src={data.titleImg} />
      <S.Title>
        <S.TitleText>{data.name}</S.TitleText>
        <S.Line />
        <S.TitleText>{data.date}</S.TitleText>
      </S.Title>
      
      <p>{data.summary}</p>
    </S.MainContainer>
  )
}

export default BlogPost;