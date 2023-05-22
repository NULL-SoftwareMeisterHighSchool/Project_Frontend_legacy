import * as S from './style';
import * as I from '@assets/images/allfiles';

interface OptionPropsType {
	to : string;
	src : string;
	pagename : string;
}

export const Option = ({
	to,
	src, 
	pagename
}:OptionPropsType) => {
	return (
		<S.Option to={to}>
			<S.Icon src={src} alt='아이콘'/>
			<S.PageName>{pagename}</S.PageName>
		</S.Option>
	);
};
