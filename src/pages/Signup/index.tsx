import LeftArrow from "@assets/images/pages/LeftArrow.svg";
import LoginImage from "@components/pages/LoginImage";
import { Link } from "react-router-dom";
import * as S from "./style";

const Signup = () => {
	return (
		<S.Container>
			<LoginImage />
			<S.SignupForm>
				<S.Wrapper>
					<S.Title>
						<span>Sign up</span>
						<S.Prev>
							<Link to={"/Login"}>
								<S.PrevBtn src={LeftArrow} />
							</Link>
							회원가입
						</S.Prev>
					</S.Title>
					<S.Inputs>
						<S.Id>
							<span>이름</span>
							<S.InputBox>
								<S.Input placeholder="실명을 입력해 주세요" />
							</S.InputBox>
						</S.Id>
						<S.Id>
							<span>아이디</span>
							<S.InputBox>
								<S.Input placeholder="아이디를 입력해 주세요" />
							</S.InputBox>
						</S.Id>
						<S.Password>
							<span>비밀번호</span>
							<S.InputBox>
								<S.Input placeholder="영·숫자·기호 포함 8자 이상" />
							</S.InputBox>
						</S.Password>
					</S.Inputs>
					<S.Auth>
						<span>
							회원이신가요? <Link to={"/Login"}>로그인</Link>
						</span>
						<S.SignupBtn>회원가입</S.SignupBtn>
					</S.Auth>
				</S.Wrapper>
			</S.SignupForm>
		</S.Container>
	);
};

export default Signup;
