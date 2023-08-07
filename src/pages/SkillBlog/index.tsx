import * as S from "./style";
import SearchFilter from "@components/pages/SkillBlog/SearchFilter";
import BlogPost from "@components/pages/SkillBlog/BlogPost";
import { SkillBlogDefaultImg } from "@assets/images/allfiles";
import TitlePath from "@components/common/TitlePath";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { getBlog } from "@apis/article";
import useDate from "@hooks/useDate";
import Button from "@components/common/Button";
import { useInView } from "react-intersection-observer";

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
    /** skill blog 데이터 */
    const [skillData, setSkillData] = useState<skillDataProps>({
        article: [],
        total: 0,
    });
    /** 검색어 */
    const [searchInput, setSearchInput] = useState<string>("");
    /** 필터 */
    const [filterData, setFilterData] = useState("최신순");

    /** axios 연동 함수 */
    const getConcatSkillData = (newData?: boolean) => {
        if (newData) {
            getBlog({
                type: "TECH",
                offset: skillData.article.length,
                limit: 20,
                order:
                    filterData === "최신순"
                        ? "TIME"
                        : filterData === "최신순"
                        ? "VIEWS"
                        : "LIKES",
                setData: setSkillData,
                query: searchInput,
                data: skillData,
                newData,
            });
        } else {
            getBlog({
                type: "TECH",
                offset: 0,
                limit: 20,
                order:
                    filterData === "최신순"
                        ? "TIME"
                        : filterData === "최신순"
                        ? "VIEWS"
                        : "LIKES",
                setData: setSkillData,
                data: skillData,
                query: searchInput,
            });
        }
    };

    /** 필터 변경시 데이터 받아오기 */
    useEffect(() => {
        getConcatSkillData();
    }, [filterData]);

    useEffect(() => {
        getConcatSkillData(true);
    }, []);

    const [ref, inView] = useInView();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (inView && !loading) {
            setLoading(true);
            getConcatSkillData();
            setLoading(false);
        }
    }, [inView]);
    return (
        <>
            <TitlePath title="기술 블로그" path="Menu > 기술블로그" />
            <S.MainContainer>
                <SearchFilter
                    onKeyDown={(e: React.KeyboardEvent) => {
                        if (e.keyCode === 13) {
                            // getSkillData(0);
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
                {/* <Button
                    value="더보기"
                    state="GRAY"
                    onClick={() => getConcatSkillData({ offset: 0, limit: 12 })}
                /> */}

                <div style={{ height: "1000px", backgroundColor: "red" }}>
                    asd
                </div>
                <div ref={ref}>hello</div>
            </S.MainContainer>
        </>
    );
};

export default SkillBlog;
