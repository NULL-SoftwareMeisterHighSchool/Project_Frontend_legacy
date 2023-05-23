import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { Body2 } from '@styles/text.style';
import { color } from '@styles/theme.style';


export const Option = styled(Link)`
	display: flex;
	flex-direction: row;
	align-items: center;
	padding: 10px;
	gap: 10px;

	width: 200px;
	height: 44px;

	border-radius: 8px;
	text-decoration: none;
`;

export const Icon = styled.img`
	width: 24px;
	height: 24px;
`;

export const PageName = styled(Body2)`
	font-style: normal;
	line-height: 17px;

	color: ${color.grayDark1};

	flex: none;
	order: 1;
	flex-grow: 0;
`;
