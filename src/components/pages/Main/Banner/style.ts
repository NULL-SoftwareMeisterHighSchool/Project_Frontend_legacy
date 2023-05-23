import styled from "styled-components";
import { color } from "@styles/theme.style";
import { SubTitle, BodyLarge } from "@styles/text.style";

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