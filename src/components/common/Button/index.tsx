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
	state = "DEFAULT",
	fontSize = "14px",
	value,
	disabled,
}: ButtonPropsType) => {
	return (
		<S.Button state={state} disabled={disabled} fontSize={fontSize}>
			{value}
		</S.Button>
	);
};

export default Button;
