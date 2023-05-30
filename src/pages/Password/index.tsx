import React, { useState } from "react";
import Eye from "@assets/images/pages/Eye.svg";
import EyeClose from "@assets/images/pages/EyeClose.svg";
import LoginImage from "@components/pages/LoginImage";
import * as S from "./style";

const Password = () => {
	const [isClicked, setIsClicked] = useState<boolean>(false);

	const handleClick = () => {
		setIsClicked(!isClicked);
	};

	return (
		<S.Container>
			<S.PasswordForm>
				<S.Wrapper>
					<S.Title>
						<span>Change Password</span>
						<div>비밀번호 변경</div>
					</S.Title>
					<S.Inputs>
						<S.PrevPassword>
							<span>기존 비밀번호</span>
							<S.InputBox>
								<S.Input placeholder="기존에 사용하던 비밀번호를 입력해 주세요" />
							</S.InputBox>
						</S.PrevPassword>
						<S.NewPassword>
							<span>새 비밀번호</span>
							<S.InputBox>
								<S.Input
									type={isClicked ? "text" : "password"}
									placeholder="영·숫자·기호 포함 8자 이상"
								/>
								<img onClick={handleClick} src={isClicked ? EyeClose : Eye} />
							</S.InputBox>
						</S.NewPassword>
					</S.Inputs>
					<S.Change>
						<S.PasswordBtn>비밀번호 변경</S.PasswordBtn>
					</S.Change>
				</S.Wrapper>
			</S.PasswordForm>
			<LoginImage />
		</S.Container>
	);
};

export default Password;
