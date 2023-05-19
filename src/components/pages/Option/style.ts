import styled from "styled-components";
import { color } from "@styles/theme.style";
import { BodyLarge } from "@styles/text.style";

export const Option = styled(BodyLarge)<{ isOptionSelected: boolean }>`
	padding: 8px 12px;
	line-height: 24px;
	border-radius: 8px;
	cursor: pointer;
	background: ${({ isOptionSelected }) => isOptionSelected && color.primaryBase};
	color: ${({ isOptionSelected }) => isOptionSelected && color.white};
`;
