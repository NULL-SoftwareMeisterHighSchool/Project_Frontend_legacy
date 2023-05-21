import { useState } from "react";
import { ItemType } from "./dropdown.type";
import * as S from "./style";
import { DownArrow } from "@assets/images/allfiles";

interface PropTypes {
  describe: string;
  items: ItemType[];
}

const Dropdown = ({ describe, items }: PropTypes) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<ItemType>();

  const toggleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  const clickItem = (item: ItemType) => {
    setSelectedItem(item);
    toggleOpen();
  };

  return (
    <S.Dropdown>
      <S.DropdownBox onClick={toggleOpen}>
        <S.Describe>{selectedItem?.text ? selectedItem.text : describe}</S.Describe>
        <S.Img src={DownArrow} />
      </S.DropdownBox>
      <S.DropdownListBox isOpen={isOpen}>
        <S.DropdownList>
          {items.map((item: ItemType, idx) => (
            <S.DropdownItem
              key={"dropdown " + idx}
              onClick={() => clickItem(item)}
            >
              {item.text}
            </S.DropdownItem>
          ))}
        </S.DropdownList>
      </S.DropdownListBox>
    </S.Dropdown>
  );
};

export default Dropdown;
