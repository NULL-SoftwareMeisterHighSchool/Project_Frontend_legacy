import styled from "styled-components";
import { color } from "@styles/theme.style";
import { Body2 } from "@styles/text.style";

export const Line = styled.hr`
	width: 100%;
	border: 0.5px solid ${color.grayLight2};
`;

export const Container = styled.div`
	height: 76px;
	margin: 0 20px;
	display: flex;
	align-items: center;
`;

export const RankBody = styled(Body2)`
	display: flex;
	align-items: center;
`;

export const GrayDark1 = styled(RankBody)`
	color: ${color.grayDark1};
`;

export const Place = styled.span`
	color: ${color.grayDark1};
	width: 100px;
`;

export const Circle = styled(Body2)<{ place: number }>`
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 50%;
	width: 24px;
	height: 24px;
	background: ${({ place }) =>
		place === 1
			? color.primaryDark1
			: place === 2
			? color.primaryBase
			: place === 3 && color.primaryLight1};
	color: ${({ place }) => (place < 4 ? color.white : color.black)};
`;

export const Name = styled(RankBody)`
	width: 220px;
	gap: 20px;
`;

export const StudentNumber = styled(GrayDark1)`
	width: 150px;
`;

export const Major = styled(GrayDark1)`
	width: 180px;
`;

export const School = styled(GrayDark1)`
	width: 330px;
`;

export const Class = styled(GrayDark1)`
	width: 100px;
`;

export const Score = styled(RankBody)`
	width: 160px;
	justify-content: right;
`;
