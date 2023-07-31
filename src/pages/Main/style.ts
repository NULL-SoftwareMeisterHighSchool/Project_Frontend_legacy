import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { TitleLarge, BodyLarge, BodyStrong, Body2, SubTitle } from '@styles/text.style'
import { color } from '@styles/theme.style';

export const Github = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	padding: 0px;
	gap: 20px;

	width: 100%;
	height: 160px;
`;


export const Score = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	padding: 0px;
	gap: 40px;
`;

export const CircularText = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	padding: 0px;
	gap: 4px;
`;

export const ScoreTitle = styled(SubTitle)`
	font-family: 'Pretendard';
	font-style: normal;
	line-height: 28px;
	color: ${color.primaryDark1};

	flex: none;
	order: 0;
	flex-grow: 0;
`;

export const ScoreSubtitle = styled(BodyLarge)`
	font-family: 'Pretendard';
	font-style: normal;
	line-height: 24px;

	color:  ${color.primaryDark1};

	flex: none;
	order: 1;
	flex-grow: 0;
`;

export const Comprehensive = styled.div`
	display: flex;
	flex-direction: row;
	align-items: flex-start;
	padding: 0px;
	gap: 80px;

	@media screen and (max-width: 1800px) {
        gap: 40px;
    }
`;

export const BannerArea = styled.div`
	display: flex;
	flex-direction: row;
	align-items: flex-start;
	padding: 0px;
	gap: 40px;

	width: 100%;
`;

export const BoardArea = styled.div`
	display: flex;
	flex-direction: row;
	align-items: flex-start;
	padding: 0px;
	gap: 40px;

	width: 100%;
`;

export const Board = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	padding: 0px;

	width: 100%;
	height: 424px;
`;








