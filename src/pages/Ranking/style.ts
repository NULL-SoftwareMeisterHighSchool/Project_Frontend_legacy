import styled from "styled-components";
import { color } from "@styles/theme.style";
import { Body2, TitleLarge } from "@styles/text.style";

export const RankingContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 40px;
`;

export const Category = styled.div`
	display: flex;
	justify-content: space-between;
`;

export const Options = styled.div`
	display: flex;
	gap: 20px;
`;

export const Sorting = styled.input`
	background: ${color.grayLight2};
	border-radius: 8px;
`;

export const Content = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
`;

export const Info = styled.div`
	margin: 0 20px;
	display: flex;
	height: 50px;
	align-items: center;
`;

export const RankBody = styled(Body2)`
	display: flex;
`;

export const Place = styled(RankBody)`
	width: 100px;
`;

export const Name = styled(RankBody)`
	width: 220px;
`;

export const StudentNumber = styled(RankBody)`
	width: 150px;
`;

export const Major = styled(RankBody)`
	width: 180px;
`;

export const School = styled(RankBody)`
	width: 330px;
`;

export const Class = styled(RankBody)`
	width: 100px;
`;

export const Score = styled(RankBody)`
	width: 160px;
	justify-content: right;
`;
