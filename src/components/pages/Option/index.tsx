import React from "react";
import * as S from "./style";

const Option = ({ idx, text, isOptionSelected, handleOptions }: any) => {
	const handleOptionClick = () => {
		handleOptions(idx);
	};

	return (
		<S.Option onClick={handleOptionClick} isOptionSelected={isOptionSelected}>
			{text}
		</S.Option>
	);
};

export default Option;
