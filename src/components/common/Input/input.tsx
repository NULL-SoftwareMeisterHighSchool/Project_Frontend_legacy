import { InputHTMLAttributes } from "react";
import { InputStateType } from '../../../types/common/input.type';
import Critical from '../../../assets/images/Critical.svg';
import Subtract from '../../../assets/images/Subtract.svg';
import * as S from "./style";


export interface InputPropsType extends InputHTMLAttributes<HTMLInputElement> {
    title?: string;
    state?: InputStateType;
    width?: string;
}

const Input = ({
    width = "328px",
    title,
    state = "DEFAULT",
    placeholder,
    type = "text",
    name,
    value,
    onChange,
}: InputPropsType) => {
  return (
    <>
      <S.Titlebox>
        { state != "DEFAULT" && <S.Icon src={ state == "SUCCESS" ? Subtract :  Critical }/>}
        {title && <S.Title>{title}</S.Title>}
      </S.Titlebox>  
      <S.Input
        state={state}
        width={width}
        onChange={onChange}
        placeholder={placeholder}
        type={type}
        name={name}
        value={value}
      />
    </>
  );
};

export default Input;
