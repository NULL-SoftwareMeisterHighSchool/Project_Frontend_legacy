import Dropdown from "@components/common/Dropdown";
import * as S from "./style";
import React, { useState } from "react";

type ItemType = {
    text: string;
};

const Filter = () => {
    const userFilter = [{ text: "전체" },{ text: "1학년" },{ text: "2학년" },{ text: "3학년" },{ text: "재학생" },{ text: "졸업생" },];
    const schoolFilter = [{ text: "대덕" },{ text: "광주" },{ text: "대구" },{ text: "부산" },];
    const scroreFilter = [{ text: "팔로워수" }, { text: "커밋수" }];

    const userFilterClick = (e: any) => {
        setUserFilterValue({ text: e.target.innerText });
    };

    const [userFilterValue, setUserFilterValue] = useState<
        ItemType | undefined
    >({ text: "전체" });
    const [schoolFilterValue, setSchoolFilterValue] = useState<
        ItemType | undefined
    >({ text: "학교" });
    const [scoreFilterValue, setScoreFilterValue] = useState<
        ItemType | undefined
    >({ text: "점수" });



    return (
        <S.HeaderContainer>
            <S.FilterContainer>
                {userFilter.map((v, i) => {
                    return (
                        <S.Filter
                            onClick={(e:React.MouseEvent) => userFilterClick(e)}
                            select={userFilterValue?.text === v.text}
                        >
                            {v.text}
                        </S.Filter>
                    );
                })}
            </S.FilterContainer>
            <S.UserDropContainer>
                <Dropdown
                    items={userFilter}
                    val={userFilterValue}
                    setVal={setUserFilterValue}
                    width="100px"
                    describe="user"
                />
            </S.UserDropContainer>

            <S.DropdownContainer>
                <Dropdown
                    items={schoolFilter}
                    val={schoolFilterValue}
                    setVal={setSchoolFilterValue}
                    describe="school"
                />
                <Dropdown
                    items={scroreFilter}
                    val={scoreFilterValue}
                    setVal={setScoreFilterValue}
                    describe="score"
                />
            </S.DropdownContainer>
        </S.HeaderContainer>
    );
};

export default Filter;
