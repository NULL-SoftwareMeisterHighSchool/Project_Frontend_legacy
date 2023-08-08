import {
    CircularProgressbarWithChildren,
    buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import Post from "@components/common/Post";
import Banner from "@components/pages/Main/Banner";
import Record from "@components/pages/Main/Record";
import Dummy from "@fixtures/board.json";
import { useQuery } from "react-query";
import { getGit } from "@apis/users";
import { getBlog } from "@apis/article";
import { useState, useEffect } from "react";
import * as S from "./style";
import TitlePath from "@components/common/TitlePath";
import useDate from "@hooks/useDate";

type boardDataProps = {
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

const Main = () => {
    const [gitGrade, setGitGrade] = useState('');
    const [skillData, setSkillData] = useState<boardDataProps>({
        article: [],
        total: 0,
    });

    const [blogData, setBlogData] = useState<boardDataProps>({
        article: [],
        total: 0,
    });

    const [gitData, setGitData] = useState({
        contributionCount: 100,
        starCount: 12,
        issueCount: 13,
        pullRequestCount: 14,
        contributedRepositoryCount: 15,
        score: 1000
    });
    const { } = useQuery("userGit", () => getGit({ setGitData }));
    
    const {} = useQuery("GENERAL", () =>
        getBlog({
            type: "GENERAL",
            offset: 0,
            limit: 8,
            order: "LIKES",
            setData: setBlogData
        })
    );

    const {} = useQuery("TECH", () =>
        getBlog({
            type: "TECH",
            offset: 0,
            limit: 8,
            order: "LIKES",
            setData: setSkillData
        })
    );
    
    const setGrade = (score:number):string => {
        if(score >= 10000){
            return 'S';
        }else if(score >= 5000) {
            return 'A';
        }else if(score >= 2000) {
            return 'B';
        }else if(score >= 800) {
            return 'C';
        }else if(score >= 200) {
            return 'D';
        }else if(score >= 50) {
            return 'E';
        }else{
            return 'F';
        } 
    }

    return (
        <>
            <TitlePath title="메인" path="Menu > 메인" primaryBase />
            <S.Github>
                <S.Score>
                    <CircularProgressbarWithChildren
                        value={gitData.score/100}
                        text={setGrade(gitData.score)}
                        styles={buildStyles({
                            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                            strokeLinecap: "butt",

                            // How long animation takes to go from one percentage to another, in seconds
                            pathTransitionDuration: 0.5,
                            textSize: '30px',
                            // Colors
                            pathColor: `rgba(0, 132, 219)`,
                            trailColor: "#EFF4F4",
                            backgroundColor: "#3e98c7",
                        })}
                    />
                    <S.CircularText>
                        <S.ScoreTitle>Text.User&apos;s</S.ScoreTitle>
                        <S.ScoreSubtitle>Github Stats</S.ScoreSubtitle>
                    </S.CircularText>
                </S.Score>
                <S.Comprehensive>
                    <Record title="Total Stars Earned" score={gitData.starCount} />
                    <Record title="Total Commits" score={gitData.contributionCount} />
                    <Record title="Total PRs" score={gitData.pullRequestCount} />
                    <Record title="Total Issues" score={gitData.issueCount} />
                    <Record
                        title="Contributed to"
                        score={gitData.contributedRepositoryCount}
                    />
                </S.Comprehensive>
            </S.Github>
            <S.BoardArea>
                <S.BlogContainer>
                    <Banner
                        title="인기 게시글"
                        subtitle="인기 게시글을 만나보세요"
                        buttonValue="게시글 더보기"
                        to="/blog"
                    />
                    <S.Board>
                        {blogData.article.map((post) => (
                            <Post
                                id={post.id}
                                title={post.title}
                                name={post.author.name}
                                date={useDate(post.createdAt).date}
                                to=""
                            />
                        ))}
                    </S.Board>
                </S.BlogContainer>
                <S.BlogContainer>
                    <Banner
                        title="기술 블로그"
                        subtitle="전공 지식을 습득해 보세요"
                        buttonValue="기술 더보기"
                        to="/skill"
                    />
                    <S.Board>
                        {skillData.article.map((post) => (
                            <Post
                                id={post.id}
                                title={post.title}
                                name={post.author.name}
                                date={useDate(post.createdAt).date}
                                to=""
                            />
                        ))}
                    </S.Board>
                </S.BlogContainer>
            </S.BoardArea>
        </>
    );
};

export default Main;
