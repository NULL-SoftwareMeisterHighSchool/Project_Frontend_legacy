import { InputHTMLAttributes } from "react";
import Search from "@assets/images/Search.svg";
import * as S from "./style";

interface SearchPropTypes extends InputHTMLAttributes<HTMLInputElement> {
  width?: string,
}

const SearchBar = ({
  width = "328px",
  placeholder,
  type = "text",
  name,
  value,
  onChange,
  onKeyDown,
}: SearchPropTypes) => {
  return (
    <S.Container width={width}>
      <S.SearchIcon src={Search} />
      <S.InputBox
        onChange={onChange}
        placeholder={placeholder}
        type={type}
        name={name}
        value={value}
        onKeyDown={onKeyDown}
      />
    </S.Container>
  )
}

export default SearchBar;