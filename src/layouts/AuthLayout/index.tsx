import { ReactNode } from "react";
import LeftArrow from "@assets/images/pages/LeftArrow.svg";
import { Link } from "react-router-dom";
import * as S from "./style";

interface AuthLayoutPropTypes {
  children: ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutPropTypes) => {
  return (
    <S.Container>
      <S.SignupForm>
        <S.Wrapper>
          <S.Title>
            <S.Subtitle>Sign up</S.Subtitle>
            <S.Prev>
              <Link to="/Login">
                <S.PrevBtn src={LeftArrow} />
              </Link>
              회원가입
            </S.Prev>
          </S.Title>
          <S.Inputs>
            <S.Name>
              <S.Subtitle>이름</S.Subtitle>
              <S.InputBox>
                <S.Input placeholder="실명을 입력해 주세요" />
              </S.InputBox>
            </S.Name>
            <S.Id>
              <S.Subtitle>아이디</S.Subtitle>
              <S.InputBox>
                <S.Input placeholder="아이디를 입력해 주세요" />
              </S.InputBox>
            </S.Id>
            <S.Password>
              <S.Subtitle>비밀번호</S.Subtitle>
              <S.InputBox>
                <S.Input placeholder="영·숫자·기호 포함 8자 이상" />
              </S.InputBox>
            </S.Password>
          </S.Inputs>
          <S.Auth>
            <S.Subtitle>
              회원이신가요? <Link to="/Login">로그인</Link>
            </S.Subtitle>
            <S.SignupBtn>회원가입</S.SignupBtn>
          </S.Auth>
        </S.Wrapper>
      </S.SignupForm>
    </S.Container>
  );
};
