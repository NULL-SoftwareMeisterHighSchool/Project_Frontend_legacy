import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { TitleLarge, BodyLarge, BodyStrong, Body2, SubTitle } from '@styles/text.style'
import { color } from '@styles/theme.style';

export const MainContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	padding: 60px 200px;
	gap: 40px;

	margin-left: 240px;

	.CircularProgressbar {
		width: 120px;
		height: 120px;
	}

	.CircularProgressbar-text {
		font-family: 'Pretendard';
		font-style: normal;
		font-weight: 600;
		font-size: 24px;
		line-height: 36px;
		color: ${color.primaryBase};
	 }
`;

export const Path = styled(Body2)`
	font-family: 'Pretendard';
	font-style: normal;
	line-height: 17px;

	width: 76px;
	height: 17px;
	color:${color.primaryBase};
`;

export const Title = styled(TitleLarge)`
	font-family: 'Pretendard';
	font-style: normal;
	line-height: 52px;

	margin-top: -12px;
	width: 70px;
	height: 52px;
	color: ${color.black};
`;

export const Github = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	padding: 0px;
	gap: 20px;

	width: 1280px;
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
`;

export const BannerArea = styled.div`
	display: flex;
	flex-direction: row;
	align-items: flex-start;
	padding: 0px;
	gap: 40px;
`;
export const BoardArea = styled.div`
	display: flex;
	flex-direction: row;
	align-items: flex-start;
	padding: 0px;
	gap: 40px;
`;

export const Board = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	padding: 0px;

	width: 620px;
	height: 424px;
`;








