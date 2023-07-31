import { Body2, BodyLarge2 } from "@styles/text.style";
import { color } from "@styles/theme.style";
import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  min-width: 205px;
  height: 260px;
  cursor: pointer;

  > img {
    width: 100%;
    height: 171px;
    object-fit: cover;
    border-radius: 8px;
  }
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const TitleText = styled(Body2)`
  font-family: "Pretendard";
  font-style: normal;
  color: ${color.grayDark1};
`;

export const Line = styled.hr`
  border: solid 1px ${color.grayBase};
  height: 12px;
  border-radius: 1px;
`;

export const Summary = styled(BodyLarge2)`
  font-family: "Pretendard";
  font-style: normal;
  color: ${color.black};
`;
