import styled from "styled-components";
import { color } from "@styles/theme.style";
import { Body2, TitleLarge, BodyStrong } from "@styles/text.style";

export const BoardContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 40px;
`;

export const Path = styled(Body2)`
	line-height: 17px;
`;

export const Title = styled(TitleLarge)`
	line-height: 52px;
	margin-top: -12px;

`;

export const Content = styled.div`
	display: flex;
	flex-direction: column;
	width: 1280px;
	height: 530px;
`;

export const Pagination = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	padding: 0px;
	gap: 12px;

	width: 1280px;
	height: 48px;
`;

export const RightArrow = styled.img`
	width: 48px;
	height: 48px;
	padding: 16px;
`;

export const LeftArrow = styled.img`
	width: 48px;
	height: 48px;
	padding: 16px;
`;

export const Number = styled(BodyStrong)`
	width: 48px;
	height: 48px;

	display: flex;
	justify-content: center;
	align-items: center;

	line-height: 20px;
	gap: 10px;
	border-radius: 8px;
`;
