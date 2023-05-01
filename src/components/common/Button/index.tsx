import React from "react";
import { ButtonStateType } from "../../../types/common/button.type";
import * as S from "./style";

interface ButtonPropsType extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	width?: string;
	height?: string;
	state?: ButtonStateType;
	fontSize?: string;
	value?: string | number;
}

const Button = ({
	width = "70px",
	height = "48px",
	state = "DEFAULT",
	fontSize = "14px",
	value,
	disabled,
}: ButtonPropsType) => {
	return (
		<S.Button
			style={{ width, height }}
			state={state}
			disabled={disabled}
			fontSize={fontSize}
		>
			{value}
		</S.Button>
	);
};

export default Button;
