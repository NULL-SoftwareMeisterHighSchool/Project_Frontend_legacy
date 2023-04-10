import { InputPropsType } from '../../../types/common/input.type';
import * as S from "./style";

const Input = ({
    title,
    width = "328px",
    state = "default",
    icon,
    placeholder,
    type = "text",
    name,
    value,
    onChange,
}: InputPropsType) => {
  return (
    <>
        {title && <S.Title>{title}</S.Title>}
        <S.Input
            style={{ width }}
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
