import React from "react";
import { ButtonStateType } from "./button.type";
import * as S from "./style";

interface ButtonPropTypes extends React.ButtonHTMLAttributes<HTMLButtonElement> {
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
}: ButtonPropTypes) => {
	return (
		<S.Button state={state} disabled={disabled} fontSize={fontSize}>
			{value}
		</S.Button>
	);
};

export default Button;
