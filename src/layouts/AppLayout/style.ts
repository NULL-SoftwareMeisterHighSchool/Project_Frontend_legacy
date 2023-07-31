import styled from "styled-components";
import { color } from "@styles/theme.style";
import { Body2, TitleLarge } from "@styles/text.style";

export const Container = styled.div`
  height: 100vh;
  display: flex;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 60px 200px;
  margin-left: 240px;
  gap: 40px;

  overflow-y: scroll;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: max-content ;
  gap: 22px;
`;
export const Path = styled(Body2)<{ primaryBase?: boolean }>`
  color: ${(props) => props.primaryBase && color.primaryBase};
`;
export const Title = styled(TitleLarge)``;
