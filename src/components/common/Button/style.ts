import { ButtonStateType } from "../../../types/common/button.type";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";

export const Button = styled.button<{
	width: string;
	height: string;
	state: ButtonStateType;
	fontSize: string;
}>`
	width: calc(${({ width }) => width} - 28px);
	height: calc(${({ height }) => height} - 20px);
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 14px 20px;
	border: none;
	border-radius: 8px;
	cursor: pointer;
	color: #ffffff;
	font-size: ${({ fontSize }) => fontSize};
	${({ state }) => state && getButtonStyle[state]}
	${({ disabled }) =>
		disabled &&
		css`
			background-color: #e1e8ea;
			color: #b6bec1;
		`};
`;

const getButtonStyle: Record<ButtonStateType, FlattenSimpleInterpolation> = {
	DEFAULT: css`
		background-color: #0084db;
		:hover {
			background-color: #00abff;
		}
		:active {
			background-color: #0063b7;
		}
	`,
	ATTENTION: css`
		background-color: #db2c36;
		color: #ffe6d8;
		:hover,
		:active {
			background-color: #ffe6d8;
			color: #db2c36;
		}
	`,
	CAUTION: css`
		background-color: #b75f00;
		color: #fff2cc;
		:hover,
		:active {
			background-color: #fff2cc;
			color: #b75f00;
		}
	`,
	SUCCESS: css`
		background-color: #2c8c1c;
		color: #e7fad4;
		:hover,
		:active {
			background-color: #e7fad4;
			color: #2c8c1c;
		}
	`,
	CRITICAL: css`
		background-color: #3349d8;
		color: #eff4f4;
		:hover,
		:active {
			background-color: #eff4f4;
			color: #3349d8;
		}
	`,
	GRAY: css`
		background-color: #eff4f4;
		color: #2e3133;
		:hover {
			background-color: #e1e8ea;
			color: #000000;
		}
		:active {
			background-color: #eff4f4;
			color: #2e3133;
		}
	`,
};
