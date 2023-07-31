import AppLayout from "@layouts/AppLayout";
import * as S from "./style";
import SearchFilter from "@components/pages/SkillBlog/SearchFilter";
import skilldata from "@fixtures/skillBoard.json";
import BlogPost from "@components/pages/SkillBlog/BlogPost";
import { SkillBlogDefaultImg } from "@assets/images/allfiles";
import TitlePath from "@components/common/TitlePath";

const SkillBlog = () => {
    const blogData = skilldata.post;
    return (
        <>
            <TitlePath title="기술 블로그" path="Menu > 기술블로그" />
            <S.MainContainer>
                <SearchFilter />
                <S.BlogContainer>
                    {blogData.map((data) => (
                        <BlogPost
                            key={data.id}
                            id={data.id}
                            name={data.name}
                            summary={data.summary}
                            titleImg={data.titleImg ?? SkillBlogDefaultImg}
                            date={data.date}
                        />
                    ))}
                </S.BlogContainer>
            </S.MainContainer>
        </>
    );
};

export default SkillBlog;
