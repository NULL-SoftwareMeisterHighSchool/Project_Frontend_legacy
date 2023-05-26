import styled from "styled-components";
import { color } from "@styles/theme.style";

export const Container = styled.div`
  height: 100vh;
  display: flex;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 60px 200px;
  gap: 40px;

  margin-left: 240px;

  overflow-y: scroll;

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
