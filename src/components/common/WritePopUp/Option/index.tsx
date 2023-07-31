import * as S from './style';
import { ReactNode } from "react";
import { RightArrow } from "@assets/images/icon/RightArrow";
import { color } from "@styles/theme.style";

interface OptionPropsType {
	to : string;
	optionName : string;
	icon: ReactNode;
}

const Option = ({
	to, 
	optionName,
	icon
}:OptionPropsType) => {
	return (
		<S.Option 
			to={to}
		>
			<S.OptionInfo>
				<S.Icon>	
					{icon}
				</S.Icon>
				<S.OptionName>{optionName}</S.OptionName>
			</S.OptionInfo>
			<RightArrow width={24} fill={color.grayDark1}/>
		</S.Option>
	);
};

export default Option;