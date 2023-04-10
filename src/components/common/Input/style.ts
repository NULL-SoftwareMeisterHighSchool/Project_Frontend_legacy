import { InputStateType } from '../../../types/common/input.type';
import styled, { css, FlattenSimpleInterpolation } from "styled-components";

export const Input = styled.input`
    height: 48px;

    border-radius: 8px;

    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 0;
`;  

export const Title = styled.div`
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;

    color: #000000;
`;

const getButtonStyle: Record<InputStateType, FlattenSimpleInterpolation> = {
    DEFAULT: css`
      background-color: #EFF4F4;
      color: #B6BEC1;
    `,
  
    SUCCESS: css`
      background-color: #EFF4F4;
      color: #B6BEC1;
    ``,
  
    CRITICAL: css`
      background: #FFE6D8;
      color: #DB2C36;
    `,
};