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
import { useState } from "react";
import * as S from "./style";
import TitlePath from "@components/common/TitlePath";

const Main = () => {
    let gitGrade = '';
    const [gitData, setGitData] = useState({
        contributionCount: 100,
        starCount: 12,
        issueCount: 13,
        pullRequestCount: 14,
        contributedRepositoryCount: 15,
        score: 110
    });
    const { } = useQuery("userGit", () => getGit({ setGitData }));    
    if(gitData.score >= 10000){
        gitGrade = 'S';
    }else if(gitData.score >= 5000) {
        gitGrade = 'A';
    }else if(gitData.score >= 2000) {
        gitGrade = 'B';
    }else if(gitData.score >= 800) {
        gitGrade = 'C';
    }else if(gitData.score >= 200) {
        gitGrade = 'D';
    }else if(gitData.score >= 50) {
        gitGrade = 'E';
    }else{
        gitGrade = 'F';
    }
    return (
        <>
            <TitlePath title="메인" path="Menu > 메인" primaryBase />
            <S.Github>
                <S.Score>
                    <CircularProgressbarWithChildren
                        value={gitData.score}
                        text={gitGrade}
                        styles={buildStyles({
                            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                            strokeLinecap: "butt",

                            // How long animation takes to go from one percentage to another, in seconds
                            pathTransitionDuration: 0.5,

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
                        {Dummy.post.map((post) => (
                            <Post
                                id={post.id}
                                title={post.title}
                                name={post.name}
                                date={post.date}
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
                        {Dummy.post.map((post) => (
                            <Post
                                id={post.id}
                                title={post.title}
                                name={post.name}
                                date={post.date}
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
