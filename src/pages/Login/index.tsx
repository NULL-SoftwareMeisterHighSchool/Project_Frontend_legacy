import React from "react";
import Eye from "@assets/images/pages/Eye.svg";
import EyeClose from "@assets/images/pages/EyeClose.svg";
import LoginIcon from "@assets/images/pages/LoginIcon.svg";
import LoginImg from "@assets/images/pages/LoginImg.jpg";
import { useState } from "react";
import { Link } from "react-router-dom";
import * as S from "./style";

const Login = () => {
	const [isClicked, setIsClicked] = useState<boolean>(false);

	const handleClick = () => {
		setIsClicked(!isClicked);
	};

	return (
		<S.Container>
			<S.LoginForm>
				<S.Wrapper>
					<S.Title>
						<S.Subtitle>Log in</S.Subtitle>
						<S.LoginTitle>로그인</S.LoginTitle>
					</S.Title>
					<S.Inputs>
						<S.Id>
							<S.Subtitle>아이디</S.Subtitle>
							<S.InputBox>
								<S.Input placeholder="아이디를 입력해 주세요" />
							</S.InputBox>
						</S.Id>
						<S.Password>
							<S.Subtitle>비밀번호</S.Subtitle>
							<S.InputBox>
								<S.Input
									type={isClicked ? "text" : "password"}
									placeholder="비밀번호를 입력해 주세요"
								/>
								<img onClick={handleClick} src={isClicked ? EyeClose : Eye} />
							</S.InputBox>
						</S.Password>
					</S.Inputs>
					<S.Auth>
						<S.Subtitle>
							회원이 아니신가요? <Link to="/Signup">회원가입</Link>
						</S.Subtitle>
						<S.LoginBtn>로그인</S.LoginBtn>
					</S.Auth>
				</S.Wrapper>
			</S.LoginForm>
			<S.LoginImage src={LoginImg}>
				<img src={LoginIcon} />
			</S.LoginImage>
		</S.Container>
	);
};

export default Login;
