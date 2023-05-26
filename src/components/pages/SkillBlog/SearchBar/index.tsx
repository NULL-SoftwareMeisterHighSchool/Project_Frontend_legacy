import * as S from "./style";
import Dropdown from "@components/common/Dropdown";

const SearchBar = () => {
  return (
    <S.MainContainer>
      <Dropdown describe="전체" items={[]}/>
      <Dropdown describe="최신순" items={[]}/>
    </S.MainContainer>
  )
}

export default SearchBar;