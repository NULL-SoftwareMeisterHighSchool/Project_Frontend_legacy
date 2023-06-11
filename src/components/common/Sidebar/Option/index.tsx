import * as S from './style';
import { ReactNode } from "react";

interface OptionPropsType {
	to : string;
	pagename : string;
	children: ReactNode;
}

export const Option = ({
	to, 
	pagename,
	children
}:OptionPropsType) => {
	return (
		<S.Option to={to}>
			{children}
			<S.PageName>{pagename}</S.PageName>
		</S.Option>
	);
};
