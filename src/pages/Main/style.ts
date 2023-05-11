import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Maincontainer = styled.div`
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
		color: #0084db;
	}

	.CircularProgressbar {
		width: 120px;
		height: 120px;
	}
`;

export const Path = styled.div`
	font-family: 'Pretendard';
	font-style: normal;
	font-weight: 400;
	font-size: 14px;
	line-height: 17px;

	width: 76px;
	height: 17px;
	color: #0084db;
`;

export const Title = styled.div`
	font-family: 'Pretendard';
	font-style: normal;
	font-weight: 600;
	font-size: 40px;
	line-height: 52px;

	margin-top: -12px;
	width: 70px;
	height: 52px;
	color: #000000;
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

export const Circulartext = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	padding: 0px;
	gap: 4px;
`;

export const Scoretitle = styled.div`
	font-family: 'Pretendard';
	font-style: normal;
	font-weight: 600;
	font-size: 20px;
	line-height: 28px;
	color: #0063b7;

	flex: none;
	order: 0;
	flex-grow: 0;
`;

export const Scoresubtitle = styled.div`
	font-family: 'Pretendard';
	font-style: normal;
	font-weight: 400;
	font-size: 16px;
	line-height: 24px;

	color: #0063b7;

	flex: none;
	order: 1;
	flex-grow: 0;
`;

export const comprehensive = styled.div`
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

export const Recordtitle = styled.div`
	font-family: 'Pretendard';
	font-style: normal;
	font-weight: 600;
	font-size: 14px;
	line-height: 20px;
	/* identical to box height, or 143% */


	/* Gray Colors/Gray Dark 1 */

	color: #7A8184;
`;

export const Recordscore = styled.div`
	/* Body 2 */
	font-family: 'Pretendard';
	font-style: normal;
	font-weight: 400;
	font-size: 14px;
	line-height: 17px;
	/* identical to box height */


	/* Gray Colors/Gray Dark 1 */

	color: #7A8184;
`;

export const Twobanner = styled.div`
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

	background: #EFF4F4;
	border-radius: 8px;
`;

export const Bannertext = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	padding: 0px;
	gap: 4px;

	width: 192px;
	height: 56px;
`;

export const Bannertitle = styled.div`
	width: fit-content;
	height: 28px;

	/* Subtitle */

	font-family: 'Pretendard';
	font-style: normal;
	font-weight: 600;
	font-size: 20px;
	line-height: 28px;
	/* identical to box height, or 140% */


	/* Gray Colors/Black */

	color: #000000;
`;

export const Bannersubtitle = styled.div`
	width: fit-content;
	height: 24px;

	/* Body Large */

	font-family: 'Pretendard';
	font-style: normal;
	font-weight: 400;
	font-size: 16px;
	line-height: 24px;
	/* identical to box height, or 150% */


	/* Gray Colors/Black */

	color: #000000;
`;

export const Twoboard = styled.div`
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

export const Posttitle = styled.div`
	width: fit-content;
	height: 17px;

	/* Body 2 */
	font-family: 'Pretendard';
	font-style: normal;
	font-weight: 400;
	font-size: 14px;
	line-height: 17px;

	/* Gray Colors/Black */
	color: #000000;
`;

export const Postnamedate = styled.div`
	display: flex;
	flex-direction: row;
	align-items: flex-start;
	padding: 0px;
	gap: 10px;

	width: fit-content;
	height: 17px;
`;


export const Postname = styled.div`
	width: fit-content;
	height: 17px;

	/* Body 2 */
	font-family: 'Pretendard';
	font-style: normal;
	font-weight: 400;
	font-size: 14px;
	line-height: 17px;

	/* Gray Colors/Gray Dark 1 */
	color: #7A8184;
`;

export const Postdate = styled.div`
	width: fit-content;
	height: 17px;

	/* Body 2 */
	font-family: 'Pretendard';
	font-style: normal;
	font-weight: 400;
	font-size: 14px;
	line-height: 17px;

	/* Gray Colors/Gray Base */
	color: #B6BEC1;
`;







