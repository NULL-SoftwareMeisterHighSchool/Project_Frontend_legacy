import AppLayout from "@layouts/AppLayout";
import * as S from "./style";
import SearchBar from "@components/pages/SkillBlog/SearchBar";
import skilldata from "@fixtures/skillBoard.json";
import BlogPost from "@components/pages/SkillBlog/BlogPost";

const SkillBlog = () => {
  const blogData = skilldata.post;
  return (
    <AppLayout>
      <S.MainContainer>
        <S.TitleContainer>
          <S.Path>Menu {`>`} 기술 블로그</S.Path>
          <S.Title>기술 블로그</S.Title>
        </S.TitleContainer>
        <SearchBar />
        <S.BlogContainer>
          {
            blogData.map(data => <BlogPost key={data.id} data={data} />)
          }
        </S.BlogContainer>
      </S.MainContainer>
    </AppLayout>
  )
}

export default SkillBlog;