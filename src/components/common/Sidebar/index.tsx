import * as S from "./style";

import { color } from "@styles/theme.style";

import { Option } from "./Option";

import { Menu } from "@assets/images/icon/Menu";
import { BulletinBoard } from "@assets/images/icon/BulletinBoard";
import { Computer } from "@assets/images/icon/Computer";
import { Trophy } from "@assets/images/icon/Trophy";
import { Alarm } from "@assets/images/icon/Alarm";
import { User } from "@assets/images/icon/User";
import { Setting } from "@assets/images/icon/Setting";
import { Infomation } from "@assets/images/icon/Infomation";
import { Edit } from "@assets/images/icon/Edit";
import WritePopUp from "@components/common/WritePopUp";
import UserIcon from "@components/common/UserIcon";

import { SetStateAction, useCallback, useEffect, useState } from "react";
import { useQuery } from "react-query";
import { getUserMeTiny } from "@apis/users";
import Button from "../Button";
import { Link } from "react-router-dom";

export const Sidebar = () => {
    const [category, setCategory] = useState("all");
    const [showPopUp, setShowPopUp] = useState<boolean>(false);
    const onSelect = useCallback(
        (category: SetStateAction<string>) => setCategory(category),
        []
    );
    const [userData, setUserData] = useState({ id: 0, name: "" });

    useEffect(()=>{
        const {} = useQuery("getUserMeTiny", getUserMeTiny, {
            onSuccess: (res) => {
                setUserData(res.data);
            },
            onError: () => {
                console.log("Error");
            },
        });
    },[]);

    return (
        <>
            <S.Bar>
                {userData.name ? (
                    <S.User>
                        <UserIcon backWidth="36px" iconWidth={20} />
                        <span>{userData.name}</span>
                    </S.User>
                ) : (
                    <S.LoginBtn>
                        <S.LinkTag to="/login">로그인</S.LinkTag>
                    </S.LoginBtn>
                )}
                <S.Line />
                <S.Write onClick={() => setShowPopUp(true)}>
                    <Edit width={24} fill={color.grayDark1} />
                    <S.WriteText>글쓰기</S.WriteText>
                </S.Write>
                <S.Menu>
                    <S.Subtitle>Menu</S.Subtitle>
                    <Option
                        to="/"
                        pagename="메인"
                        category={category}
                        onSelect={onSelect}
                    >
                        <Menu width={24} fill={color.white} />
                    </Option>
                    <Option
                        to="/blog"
                        pagename="게시판"
                        category={category}
                        onSelect={onSelect}
                    >
                        <BulletinBoard width={24} />
                    </Option>
                    <Option
                        to="/skill"
                        pagename="기술 블로그"
                        category={category}
                        onSelect={onSelect}
                    >
                        <Computer width={24} />
                    </Option>
                    <Option
                        to="/ranking"
                        pagename="랭킹"
                        category={category}
                        onSelect={onSelect}
                    >
                        <Trophy width={24} />
                    </Option>
                </S.Menu>
                <S.Menu>
                    <S.Subtitle>User</S.Subtitle>
                    <Option
                        to="/alarm"
                        pagename="알림"
                        category={category}
                        onSelect={onSelect}
                    >
                        <Alarm width={24} />
                    </Option>
                    <Option
                        to="/mypage"
                        pagename="마이페이지"
                        category={category}
                        onSelect={onSelect}
                    >
                        <User width={24} />
                    </Option>
                    <Option
                        to="/setting"
                        pagename="설정"
                        category={category}
                        onSelect={onSelect}
                    >
                        <Setting width={24} />
                    </Option>
                    {/* <Option to='/' pagename='개발자 소개' category={category} onSelect={onSelect}><Infomation width={24} /></Option> */}
                </S.Menu>
            </S.Bar>
            {showPopUp ? <WritePopUp setShowPopUp={setShowPopUp} /> : null}
        </>
    );
};
