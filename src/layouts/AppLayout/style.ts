import styled from "styled-components";
import { color } from "@styles/theme.style";

export const Container = styled.div`
  height: 100vh;
  display: flex;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
  padding: 60px 200px;
  margin-left : 240px;

  overflow-y: scroll;
`;
