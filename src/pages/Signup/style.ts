import styled from "styled-components";
import { color } from "@styles/theme.style";

export const Container = styled.div`
	height: 100vh;
	width: 100vw;
	display: flex;
`;

export const SignupForm = styled.div`
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
	span {
		font-size: 16px;
		line-height: 24px;
	}
	div {
		font-weight: 600;
		font-size: 40px;
		line-height: 52px;
	}
`;

export const Auth = styled(Title)`
	span {
		font-size: 14px;
	}
`;

export const Inputs = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-direction: column;
	width: 100%;
	gap: 40px;
`;

export const SignupBtn = styled.button`
	background-color: ${color.primaryBase};
	border-radius: 8px;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 48px;
	color: ${color.white};
	padding: 14px 20px;
	border: none;
`;

export const InputBox = styled.div`
	padding: 12px 14px;
	background: ${color.grayLight2};
	font-size: 0px;
	line-height: 0px;
	display: flex;
	border-radius: 8px;
`;

export const Input = styled.input`
	height: 24px;
	width: calc(100% - 28px);
	background: ${color.grayLight2};
	color: ${color.grayBase};
	border: none;
	::placeholder {
		opacity: 0.6;
	}
	outline: none;
`;

export const Id = styled(Title)`
	width: 100%;
	gap: 10px;
`;

export const Password = styled(Id)``;

export const PrevBtn = styled.div<any>`
	height: 24px;
	width: 24px;
	background-image: url(${(props) => props.src});
	background-size: contain;
	background-repeat: no-repeat;
	margin-left: -54px;
	cursor: pointer;
`;
export const Prev = styled.div`
	display: flex;
	align-items: center;
`;
