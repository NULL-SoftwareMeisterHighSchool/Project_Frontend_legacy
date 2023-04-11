import { InputStateType } from '../../../types/common/input.type';
import styled, { css, FlattenSimpleInterpolation } from "styled-components";

export const Input = styled.input<{ state: InputStateType }>`
    width: calc( ${({width}) => width} - 28px);
    height: 24px;
    padding: 12px 14px;
    border-radius: 8px;
    border: none;
    
    &:focus {outline:none;}

    ${({ state }) => state && getinputStyle[state]}
`;  

export const Titlebox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    margin-bottom: 4px;
    gap: 4px;

    width: 52px;
    height: 24px;
`;

export const Title = styled.div`
    color: #000000;
`;

export const Icon = styled.img`
  width: 16px;
  height: 16px;
`;

const getinputStyle: Record<InputStateType, FlattenSimpleInterpolation> = {
    DEFAULT: css`
      background-color: #EFF4F4;
      &::placeholder{
        color: #B6BEC1;
      }
    `,

    CRITICAL: css`
      background: #FFE6D8;
      &::placeholder{
        color: #DB2C36;
      }
    `,
  
    SUCCESS: css`
      background-color: #EFF4F4;
      &::placeholder{
        color: #B6BEC1;
      }
    `,
};