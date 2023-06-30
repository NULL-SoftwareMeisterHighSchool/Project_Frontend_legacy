import React, { useState } from "react";
import * as S from "./style";

import Button from "@components/common/Button";
import Input from "@components/common/Input";
import AuthLayout from "@layouts/AuthLayout";

import { Body2, BodyLarge, BodyStrong, TitleLarge } from "@styles/text.style";
import LeftArrow from "@assets/images/pages/LeftArrow.svg";
type ArrayType = {
	name: string, title: string, value: string, placeholder: string
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
		{ name: "school", title: "학교", value: "", placeholder: "재학중이거나 졸업한 학교를 입력해 주세요" },
		{ name: "email", title: "학교 이메일", value: "", placeholder: "학교 전용 이메일을 입력해 주세요" },
		{ name: "year", title: "입학연도", value: "", placeholder: "학교에 입학한 년도를 입력해 주세요" },
		{ name: "name", title: "이름", value: "", placeholder: "실명을 입력해 주세요" },
		{ name: "id", title: "아이디", value: "", placeholder: "아이디를 입력해 주세요" },
		{ name: "password", title: "비밀번호", value: "", placeholder: "영·숫자·기호 포함 8자 이상" }
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
						{pageNum !== 1 && <S.BackArrow src={LeftArrow} />}
						<TitleLarge>회원가입</TitleLarge>
					</S.ArrowContainer>
				</S.Title>
				<S.InputContainer>
					{
						inputType.slice((pageNum - 1) * 3, pageNum * 3).map(d => <Input title={d.title} width="100%" placeholder={d.placeholder} name={d.name} onChange={onChange} />)
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
