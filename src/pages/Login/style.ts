import styled from "styled-components";
import { BodyLarge, TitleLarge } from "@styles/text.style";

export const Container = styled.div`
	height: 100vh;
	width: 100vw;
	display: flex;
	font-family: "Pretendard";
`;

export const LoginForm = styled.div`
	height: 100%;
	width: 800px;
	display: flex;
	justify-content: center;
`;

export const Wrapper = styled.div`
	width: 400px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 80px;
`;

export const Title = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
`;

export const Subtitle = styled(BodyLarge)``;

export const LoginTitle = styled(TitleLarge)``;

export const Auth = styled(Title)``;

export const Inputs = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-direction: column;
	width: 100%;
	gap: 40px;
`;

export const LoginBtn = styled.button`
	background-color: #0084db;
	border-radius: 8px;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 48px;
	color: white;
	padding: 14px 20px;
	border: none;
`;

export const InputBox = styled.div`
	padding: 12px 14px;
	background: #eff4f4;
	font-size: 0px;
	line-height: 0px;
	display: flex;
	border-radius: 8px;
`;

export const Input = styled.input`
	height: 24px;
	width: calc(100% - 28px);
	background: #eff4f4;
	color: #b6bec1;
	border: none;
	::placeholder {
		opacity: 0.6;
	}
	outline: none;
`;

export const Id = styled(Title)`
	width: 100%;
	gap: 10px;
	img {
		width: 24px;
		height: 24px;
		cursor: pointer;
	}
`;

export const Password = styled(Id)``;
