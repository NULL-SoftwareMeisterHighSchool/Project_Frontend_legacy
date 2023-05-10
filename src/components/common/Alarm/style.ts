import { AlarmStateType } from "@types/common/alarm.type";
import { BodyStrong } from "@styles/text.style";
import styled, { css } from "styled-components";

const bgColorFor = {
  Attention: "#E6EFF4",
  Success: "#E7FAD4",
  Coution: "#FFF2CC",
  Critical: "#FFE6D8",
};

export const Alarm = styled.div<{ state: AlarmStateType }>`
  width: min-content;
  height: 40px;
  padding: 0 20px;
  border-radius: 4px;

  background-color: ${({ state }) => bgColorFor[state]};

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const Icon = styled.img`
  width: 16px;
  height: 16px;
`;
