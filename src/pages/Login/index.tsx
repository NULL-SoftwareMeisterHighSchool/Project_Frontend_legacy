import Eye from "@assets/images/pages/Eye.svg";
import EyeClose from "@assets/images/pages/EyeClose.svg";
import LoginImage from "@components/pages/LoginImage";
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
						<span>Log in</span>
						<div>로그인</div>
					</S.Title>
					<S.Inputs>
						<S.Id>
							<span>아이디</span>
							<S.InputBox>
								<S.Input placeholder="아이디를 입력해 주세요" />
							</S.InputBox>
						</S.Id>
						<S.Password>
							<span>비밀번호</span>
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
						<span>
							회원이 아니신가요? <Link to={"/Signup"}>회원가입</Link>
						</span>
						<S.LoginBtn>로그인</S.LoginBtn>
					</S.Auth>
				</S.Wrapper>
			</S.LoginForm>
			<LoginImage />
		</S.Container>
	);
};

export default Login;
