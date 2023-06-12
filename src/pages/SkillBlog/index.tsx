import AppLayout from "@layouts/AppLayout";
import * as S from "./style";
import SearchFilter from "@components/pages/SkillBlog/SearchFilter";
import skilldata from "@fixtures/skillBoard.json";
import BlogPost from "@components/pages/SkillBlog/BlogPost";

const SkillBlog = () => {
  const blogData = skilldata.post;
  return (
    <AppLayout title="기술 블로그" path="Menu > 기술블로그">
      <S.MainContainer>
        <SearchFilter />
        <S.BlogContainer>
          {
            blogData.map(
              data =>
                <BlogPost
                  key={data.id}
                  id={data.id}
                  name={data.name}
                  summary={data.summary}
                  titleImg={data.titleImg}
                  date={data.date}
                />)
          }
        </S.BlogContainer>
      </S.MainContainer>
    </AppLayout>
  )
}

export default SkillBlog;