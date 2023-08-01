import * as S from "./style";
import SearchFilter from "@components/pages/SkillBlog/SearchFilter";
import BlogPost from "@components/pages/SkillBlog/BlogPost";
import { SkillBlogDefaultImg } from "@assets/images/allfiles";
import TitlePath from "@components/common/TitlePath";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { getBlog } from "@apis/article";
import useDate from "@hooks/useDate";

type skillDataProps = {
    article: blogType[];
    total: number;
};
type blogType = {
    id: number;
    type: string;
    title: string;
    thumbnail: string;
    summary: string;
    author: {
        id: number;
        name: string;
    };
    createdAt: string;
};

const SkillBlog = () => {
    const [skillData, setSkillData] = useState<skillDataProps>({
        article: [],
        total: 0,
    });
    const [searchInput, setSearchInput] = useState<string>("");
    const getData = () => {
        getBlog({
            type: "TECH",
            offset: 0,
            limit: 0,
            order:
                filterData === "최신순"
                    ? "TIME"
                    : filterData === "최신순"
                    ? "VIEWS"
                    : "LIKES",
            setData: setSkillData,
            query: searchInput,
        });
    };
    const {} = useQuery("users", () => getData());

    const [filterData, setFilterData] = useState("최신순");
    useEffect(() => {
        getData();
    }, [filterData]);

    return (
        <>
            <TitlePath title="기술 블로그" path="Menu > 기술블로그" />
            <S.MainContainer>
                <SearchFilter
                    onKeyDown={(e: React.KeyboardEvent) => {
                        if (e.keyCode === 13) {
                            getData();
                        }
                    }}
                    searchVal={searchInput}
                    searchSetVal={setSearchInput}
                    setFilterData={setFilterData}
                />
                <S.BlogContainer>
                    {skillData.article.map((data) => (
                        <BlogPost
                            key={data.id}
                            id={data.id}
                            name={data.author.name}
                            summary={data.summary}
                            titleImg={data.thumbnail ?? SkillBlogDefaultImg}
                            date={useDate(data.createdAt).date}
                        />
                    ))}
                </S.BlogContainer>
            </S.MainContainer>
        </>
    );
};

export default SkillBlog;
