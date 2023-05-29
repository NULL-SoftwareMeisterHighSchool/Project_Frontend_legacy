import { Body2, TitleLarge } from "@styles/text.style";
import { color } from "@styles/theme.style";
import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 1280px;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 22.51px;
`;

export const Path = styled(Body2)`
  font-family: "Pretendard";
  font-style: normal;
  color: ${color.black};
`;

export const Title = styled(TitleLarge)`
  font-family: "Pretendard";
  font-style: normal;
  color: ${color.black};
`;

export const BlogContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 40px 20px;
`;
