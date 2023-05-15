import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { color } from '@styles/theme.style';
import {Body, Body2} from '@styles/text.style';

export const Fixed = styled.nav`
	position: fixed;
`;

export const Bar = styled.nav`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	padding: 20px;
	gap: 20px;

	position: absolute;
	width: 240px;
	height: 100vh;
	left: 0px;
	top: 0px;

	background: ${color.grayLight2};
`;

export const User = styled(Body2)`
	display: flex;
	flex-direction: row;
	align-items: center;
	padding: 10px;
	gap: 10px;

	width: 200px;
	height: 56px;

	border-radius: 8px;

	/* Inside auto layout */

	flex: none;
	order: 0;
	align-self: stretch;
	flex-grow: 0;
`;

export const Line = styled.hr`
	width: 200px;
	height: 0px;

	border: 1px solid ${color.grayLight1};
`;

export const Menu = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	padding: 0px;

	width: 200px;
	height: 202px;


	/* Inside auto layout */

	flex: none;
	order: 2;
	align-self: stretch;
	flex-grow: 0;
`;

export const Subtitle = styled(Body)`
	display: flex;
	flex-direction: row;
	align-items: flex-start;
	padding: 0px 0px 10px;

	color: ${color.grayDark1};
`;

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
	/* Computer */
	width: 24px;
	height: 24px;
`;

export const PageName = styled(Body2)`
	font-style: normal;
	line-height: 17px;

	/* Gray Colors/Gray Dark 1 */
	color: ${color.grayDark1};

	/* Inside auto layout */

	flex: none;
	order: 1;
	flex-grow: 0;
`;

