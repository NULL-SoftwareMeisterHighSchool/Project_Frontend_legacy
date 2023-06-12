import { InputHTMLAttributes } from "react";
import { InputStateType } from "./input.type";
import Critical from "@assets/images/Critical.svg";
import Sucess from "@assets/images/Success.svg";
import * as S from "./style";

export interface InputPropTypes extends InputHTMLAttributes<HTMLInputElement> {
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
}: InputPropTypes) => {
  return (
    <div>
      <S.Titlebox>
        {state != "DEFAULT" && (
          <S.Icon src={state == "SUCCESS" ? Sucess : Critical} />
        )}
        {title && <S.Title>{title}</S.Title>}
      </S.Titlebox>
      <S.Input
        state={state}
        style={{ width }}
        onChange={onChange}
        placeholder={placeholder}
        type={type}
        name={name}
        value={value}
      />
    </div>
  );
};

export default Input;
