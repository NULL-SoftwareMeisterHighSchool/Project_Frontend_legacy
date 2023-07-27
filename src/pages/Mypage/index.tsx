import AppLayout from "@layouts/AppLayout";
import * as S from "./style";
import skilldata from "@fixtures/skillBoard.json";
import BlogPost from "@components/pages/SkillBlog/BlogPost";
import StackName from "@components/pages/Mypage/Stack";
import Post from "@components/common/Post";
import Dummy from "@fixtures/board.json";
import { BodyStrong } from "@styles/text.style";
import UpdateProfile from "@components/pages/Mypage/UpdateProfile";
import { useState } from "react";

const Mypage = () => {
    const [updateProfileOpen, setUpdateProfileOpen] = useState(false);
    const [userData, setUserData] = useState({
        introduction: "대덕소마고 재학중인 디자이너입니다.",
        github: "https://github.com/asdf1234",
        portfolio: "https://hahahoho.com/pofol",
        skill: ["React","Djanggo","Spring","Nest.js"],
    });
    const skillBlog = skilldata.post;
    return (
        <AppLayout title="마이페이지" path="Menu > 마이페이지">
            <UpdateProfile
                val={updateProfileOpen}
                setVal={setUpdateProfileOpen}
                userData={userData}
                setUserData={setUserData}
            />
            <S.MypageContainer>
                <S.User>
                    <div>
                        <S.UserImg />
                        <S.UserIntro>
                            <S.UserName>최승우</S.UserName>
                            <S.UserDescript>
                                {userData.introduction}
                            </S.UserDescript>
                        </S.UserIntro>
                        <S.UserContectSection>
                            <S.UserContectInfo>
                                <S.UserContectTitle>Email</S.UserContectTitle>
                                <S.UserContect>
                                    kwon282800@somein.kr
                                </S.UserContect>
                            </S.UserContectInfo>
                            <S.UserContectInfo>
                                <S.UserContectTitle>Github</S.UserContectTitle>
                                <S.UserContect>
                                    {userData.github}
                                </S.UserContect>
                            </S.UserContectInfo>
                        </S.UserContectSection>
                    </div>
                    <S.ProfileUpdateBtn
                        onClick={() => setUpdateProfileOpen(true)}
                    >
                        <BodyStrong>프로필 수정</BodyStrong>
                    </S.ProfileUpdateBtn>
                </S.User>
                <S.Stack>
                    {userData.skill.map(v=><StackName>{v}</StackName>)}
                </S.Stack>
                <S.Blog>
                    <S.SubTitle>내가 작성한 블로그</S.SubTitle>
                    <S.BlogContainer>
                        {skillBlog.map((data) => (
                            <BlogPost
                                key={data.id}
                                id={data.id}
                                name={data.name}
                                summary={data.summary}
                                titleImg={data.titleImg}
                                date={data.date}
                            />
                        ))}
                    </S.BlogContainer>
                </S.Blog>
                <S.Post>
                    <S.SubTitle>내가 작성한 게시물</S.SubTitle>
                    <S.PostContainer>
                        {Dummy.post.map((post) => (
                            <Post
                                id={post.id}
                                title={post.title}
                                name={post.name}
                                date={post.date}
                                to=""
                            />
                        ))}
                    </S.PostContainer>
                </S.Post>
            </S.MypageContainer>
        </AppLayout>
    );
};

export default Mypage;
