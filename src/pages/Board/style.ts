import styled from "styled-components";
import { BodyStrong } from "@styles/text.style";

export const BoardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  //height: 530px;
`;

export const Pagination = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 12px;

  width: min-content;
  height: 48px;
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

  background-color: ${(props) => props.color};
  color: ${(props) => (props.color ? "#FFFFFF" : "#2E3133")};
`;
