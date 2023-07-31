import React, { useState } from "react";
import * as S from "./style";

import Button from "@components/common/Button";
import Input from "@components/common/Input";
import AuthLayout from "@layouts/AuthLayout";

import { Body2, BodyLarge, BodyStrong, TitleLarge } from "@styles/text.style";
import LeftArrow from "@assets/images/pages/LeftArrow.svg";
type ArrayType = {
	name: string, title: string,placeholder: string
}
const EnRolledSignup = () => {
	const [pageNum, setPageNum] = useState(1);

	const [userData, setUserData] = useState({
		school: "",
		email: "",
		year: "",
		name: "",
		id: "",
		password: ""
	});
	const inputType: ArrayType[] = [
		{ name: "school", title: "학교", placeholder: "재학중이거나 졸업한 학교를 입력해 주세요" },
		{ name: "email", title: "학교 이메일", placeholder: "학교 전용 이메일을 입력해 주세요" },
		{ name: "year", title: "입학연도", placeholder: "학교에 입학한 년도를 입력해 주세요" },
		{ name: "code", title: "인증번호", placeholder: "학교 이메일로 보내진 인증번호를 입력해 주세요" },
		{ name: "name", title: "이름", placeholder: "실명을 입력해 주세요" },
		{ name: "id", title: "아이디", placeholder: "아이디를 입력해 주세요" },
		{ name: "password", title: "비밀번호", placeholder: "영·숫자·기호 포함 8자 이상" },
		{ name: "github", title: "GitHub", placeholder: "자신의 Github 주소를 입력해 주세요" }
	];
	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setUserData({
			...userData,
			[name]: value
		})
	}

	return (
		<AuthLayout position="right">
			<div>
				<S.Title>
					<BodyLarge>Sign In</BodyLarge>
					<S.ArrowContainer>
						{pageNum !== 1 && <S.BackArrow src={LeftArrow} onClick={()=> setPageNum(pageNum-1)} />}
						<TitleLarge>회원가입</TitleLarge>
					</S.ArrowContainer>
				</S.Title>
				<S.InputContainer>
					{
						inputType.slice((pageNum - 1) * 4, pageNum * 4).map(d => <Input title={d.title} width="100%" placeholder={d.placeholder} name={d.name} onChange={onChange} />)
					}
				</S.InputContainer> 
				<S.SubmitContainer>
					<div>
						<Body2>회원이신가요?</Body2>
						<BodyStrong>로그인</BodyStrong>
					</div>
					<Button height="48px" value={pageNum === 1 ? "다음" : "회원가입"} />
				</S.SubmitContainer>
			</div>
		</AuthLayout>
	);
};

export default EnRolledSignup;
