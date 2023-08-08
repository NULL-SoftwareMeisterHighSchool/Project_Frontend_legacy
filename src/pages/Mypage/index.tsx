import TitlePath from "@components/common/TitlePath";
import * as S from "./style";
import BlogPost from "@components/pages/SkillBlog/BlogPost";
import StackName from "@components/pages/Mypage/Stack";
import Post from "@components/common/Post";
import { BodyStrong } from "@styles/text.style";
import { SkillBlogDefaultImg } from "@assets/images/allfiles";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { delCookie } from "@utils/cookies";
import useDate from "@hooks/useDate";
import { getUserMe } from "@apis/users";
import UserIcon from "@components/common/UserIcon";
import UpdateProfile from "@components/pages/Mypage/UpdateProfile";

const Mypage = () => {
    const [updateProfileOpen, setUpdateProfileOpen] = useState(false);
    const [userData, setUserData] = useState({
        name: "김규하",
        email: "kwon@akdjf.kro.kr",
        bio: "대덕소마고 재학중인 디자이너입니다.",
        githubURL: "https://github.com/asdf1234",
        portfolioURL: "https://hahahoho.com/pofol",
        stacks: ["React", "Djanggo", "Spring", "Nest.js"],
        articles: {
            general: [
                {
                    id: 1,
                    title: "나의 멋진 React 공부 일지",
                    thumbnail: "",
                    summary: "오늘 리액트 공부를 했다",
                    author: {
                        id: 1,
                        name: "권강빈",
                    },
                    createdAt: "2016-10-27T17:13:40",
                },
                {
                    id: 2,
                    title: "나의 멋진 React 공부 일지",
                    thumbnail: "",
                    summary: "오늘 리액트 공부를 했다",
                    author: {
                        id: 1,
                        name: "권강빈",
                    },
                    createdAt: "2016-10-27T17:13:40",
                },
            ],
            tech: [
                {
                    id: 1,
                    title: "나의 멋진 React 공부 일지",
                    thumbnail: "",
                    summary: "오늘 리액트 공부를 했다",
                    author: {
                        id: 1,
                        name: "권강빈",
                    },
                    createdAt: "2016-10-27T17:13:40",
                },
                {
                    id: 2,
                    title: "나의 멋진 React 공부 일지",
                    thumbnail: "",
                    summary: "오늘 리액트 공부를 했다",
                    author: {
                        id: 1,
                        name: "권강빈",
                    },
                    createdAt: "2016-10-27T17:13:40",
                },
            ],
        },
    });

    const { articles, name, email, ...changeUserData } = userData;
    const { refetch } = useQuery("getUserMe", getUserMe, {
        onSuccess: (res) => {
            setUserData(res.data);
        },
        onError: () => {
            console.log("Error");
        },
        enabled: false,
    });
    useEffect(() => {
        refetch();
    }, []);
    return (
        <>
            <TitlePath title="마이페이지" path="Menu > 마이페이지" />
            <UpdateProfile
                val={updateProfileOpen}
                setVal={setUpdateProfileOpen}
                userData={changeUserData}
            />
            <S.MypageContainer>
                <S.User>
                    <div>
                        <S.UserSection>
                            <UserIcon backWidth="80px" iconWidth={44} />
                            <S.UserIntro>
                                <S.UserName>{userData.name}</S.UserName>
                                <S.UserDescript>{userData.bio}</S.UserDescript>
                            </S.UserIntro>
                        </S.UserSection>
                        <S.UserContectSection>
                            <S.UserContectInfo>
                                <S.UserContectTitle>Email</S.UserContectTitle>
                                <S.UserContect>{userData.email}</S.UserContect>
                            </S.UserContectInfo>
                            <S.UserContectInfo>
                                <S.UserContectTitle>Github</S.UserContectTitle>
                                <S.UserContect>
                                    {userData.githubURL}
                                </S.UserContect>
                            </S.UserContectInfo>
                        </S.UserContectSection>
                    </div>
                    <S.BtnArea>
                        <S.Btn
                            onClick={() => {
                                delCookie("refreshToken", { path: "/" });
                                delCookie("accessToken", { path: "/" });
                                alert("로그아웃");
                                window.location.href = "/";
                            }}
                        >
                            <BodyStrong>로그아웃</BodyStrong>
                        </S.Btn>
                        <S.Btn onClick={() => setUpdateProfileOpen(true)}>
                            <BodyStrong>프로필 수정</BodyStrong>
                        </S.Btn>
                    </S.BtnArea>
                </S.User>
                <S.Stack>
                    {userData.stacks.map((v) => (
                        <StackName>{v}</StackName>
                    ))}
                </S.Stack>
                <S.Blog>
                    <S.SubTitle>내가 작성한 블로그</S.SubTitle>
                    <S.BlogContainer>
                        {userData.articles.tech.map((data) => (
                            <BlogPost
                                key={data.id}
                                id={data.id}
                                name={data.author.name}
                                summary={data.summary}
                                titleImg={
                                    data.thumbnail === ""
                                        ? SkillBlogDefaultImg
                                        : ""
                                }
                                date={useDate(data.createdAt).date}
                            />
                        ))}
                    </S.BlogContainer>
                </S.Blog>
                <S.Post>
                    <S.SubTitle>내가 작성한 게시물</S.SubTitle>
                    <S.PostContainer>
                        {userData.articles.general.map((post) => (
                            <Post
                                id={post.id}
                                title={post.title}
                                name={post.author.name}
                                date={useDate(post.createdAt).date}
                                to=""
                            />
                        ))}
                    </S.PostContainer>
                </S.Post>
            </S.MypageContainer>
        </>
    );
};

export default Mypage;
