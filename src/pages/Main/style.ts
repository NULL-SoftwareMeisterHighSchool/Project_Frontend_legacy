import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { TitleLarge, BodyLarge, BodyStrong, Body2, SubTitle } from '@styles/text.style'
import {color} from '@styles/theme.style';

export const MainContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	padding: 60px 200px;
	gap: 40px;

	margin-left: 240px;

	.CircularProgressbar-text {
		font-family: 'Pretendard';
		font-style: normal;
		font-weight: 600;
		font-size: 24px;
		line-height: 36px;
		color: ${color.primaryBase};
	}

	.CircularProgressbar {
		width: 120px;
		height: 120px;
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

export const Record = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	padding: 0px;
	gap: 10px;

	width: fit-content;
	height: 47px;
`;

export const RecordTitle = styled(BodyStrong)`
	font-family: 'Pretendard';
	font-style: normal;
	line-height: 20px;
	/* identical to box height, or 143% */


	/* Gray Colors/Gray Dark 1 */

	color: ${color.grayDark1};
`;

export const RecordScore = styled(Body2)`
	font-family: 'Pretendard';
	font-style: normal;
	line-height: 17px;
	/* identical to box height */


	/* Gray Colors/Gray Dark 1 */

	color: ${color.grayDark1};
`;

export const BannerArea = styled.div`
	display: flex;
	flex-direction: row;
	align-items: flex-start;
	padding: 0px;
	gap: 40px;
`;

export const Banner = styled.div`
	/* Auto layout */
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	padding: 40px;
	gap: 20px;

	width: 620px;
	height: 136px;

	/* Gray Colors/Gray Light 2 */

	background: ${color.grayLight2};
	border-radius: 8px;
`;

export const BannerText = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	padding: 0px;
	gap: 4px;

	width: 192px;
	height: 56px;
`;

export const BannerTitle = styled(SubTitle)`
	width: fit-content;
	height: 28px;

	/* Subtitle */

	font-family: 'Pretendard';
	font-style: normal;
	line-height: 28px;
	/* identical to box height, or 140% */


	/* Gray Colors/Black */

	color: ${color.black};
`;

export const BannerSubtitle = styled(BodyLarge)`
	width: fit-content;
	height: 24px;

	/* Body Large */

	font-family: 'Pretendard';
	font-style: normal;
	line-height: 24px;
	/* identical to box height, or 150% */


	/* Gray Colors/Black */

	color: ${color.black};
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

export const Post = styled(Link)`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	padding: 18px 20px;
	gap: 10px;
	text-decoration: none;

	width: 620px;
	height: 53px;
`;

export const PostTitle = styled(Body2)`
	width: fit-content;
	height: 17px;

	/* Body 2 */
	font-family: 'Pretendard';
	font-style: normal;
	line-height: 17px;

	/* Gray Colors/Black */
	color:${color.black};
`;

export const PostInfo = styled.div`
	display: flex;
	flex-direction: row;
	align-items: flex-start;
	padding: 0px;
	gap: 10px;

	width: fit-content;
	height: 17px;
`;


export const PostName = styled(Body2)`
	width: fit-content;
	height: 17px;

	/* Body 2 */
	font-family: 'Pretendard';
	font-style: normal;
	line-height: 17px;

	/* Gray Colors/Gray Dark 1 */
	color: ${color.grayDark1};
`;

export const PostDate = styled(Body2)`
	width: fit-content;
	height: 17px;

	font-family: 'Pretendard';
	font-style: normal;
	line-height: 17px;

	/* Gray Colors/Gray Base */
	color: ${color.grayBase};
`;







