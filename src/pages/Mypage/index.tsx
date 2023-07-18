import AppLayout from "@layouts/AppLayout";
import * as S from "./style";
import skilldata from "@fixtures/skillBoard.json";
import BlogPost from "@components/pages/SkillBlog/BlogPost";
import StackName from "@components/pages/Mypage/Stack";


const Mypage = () => {
    const skillBlog = skilldata.post;
    return (
        <AppLayout title="마이페이지" path="Menu > 마이페이지">
            <S.MypageContainer>
                <S.User>
                    <S.UserImg />
                    <S.UserIntro>
                        <S.UserName>최승우</S.UserName>
                        <S.UserDescript>대덕소마고 재학중인 디자이너입니다.</S.UserDescript>
                    </S.UserIntro>
                    <S.UserContectSection>
                        <S.UserContectInfo>
                            <S.UserContectTitle>Email</S.UserContectTitle>
                            <S.UserContect>kwon282800@somein.kr</S.UserContect>
                        </S.UserContectInfo>
                        <S.UserContectInfo>
                            <S.UserContectTitle>Github</S.UserContectTitle>
                            <S.UserContect>https://github.com/asdf1234</S.UserContect>
                        </S.UserContectInfo>
                    </S.UserContectSection>
                </S.User>
            </S.MypageContainer>
        </AppLayout>
    );
}
 
export default Mypage;