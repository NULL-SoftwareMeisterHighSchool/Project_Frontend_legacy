import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import AppLayout from "@layouts/AppLayout";
import Post from "@components/common/Post";
import Banner from "@components/pages/Main/Banner";
import Record from "@components/pages/Main/Record";
import Dummy from "@fixtures/board.json";
import { useState } from "react";
import * as S from "./style";

const Main = () => {
  const [mainData, serMainData] = useState({
    value: 10,
    grade: "B+",
    stars: 11,
    commit: 1200,
    pr: 100,
    issues: 120,
    contributed: 12,
  });
  return (
    <AppLayout title="메인" path="Menu > 메인" primaryBase>
      <S.Github>
        <S.Score>
          <CircularProgressbarWithChildren
            value={mainData.value}
            text={mainData.grade}
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
          <Record title="Total Stars Earned" score={mainData.stars} />
          <Record title="Total Commits" score={mainData.commit} />
          <Record title="Total PRs" score={mainData.pr} />
          <Record title="Total Issues" score={mainData.issues} />
          <Record title="Contributed to" score={mainData.contributed} />
        </S.Comprehensive>
      </S.Github>
      <S.BannerArea>
        <Banner
          title="인기 게시글"
          subtitle="인기 게시글을 만나보세요"
          buttonValue="더보기"
        />
        <Banner
          title="기술 블로그"
          subtitle="전공 지식을 습득해 보세요"
          buttonValue="더보기"
        />
      </S.BannerArea>
      <S.BoardArea>
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
      </S.BoardArea>
    </AppLayout>
  );
};

export default Main;
