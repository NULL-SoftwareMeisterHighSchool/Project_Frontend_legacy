import { useState } from "react";
import * as S from "./style";
import AuthLayout from "@layouts/AuthLayout";

import { Body2, BodyLarge, BodyStrong, TitleLarge } from "@styles/text.style";
import Input from "@components/common/Input";
import Button from "@components/common/Button";

const Password = () => {
    const [userData, setUserData] = useState({
        originPw: "",
        updagePw: "",
    });

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUserData({
            ...userData,
            [name]: value,
        });
    };

    return (
        <AuthLayout position="right">
            <div>
                <S.Title>
                    <BodyLarge>Change Password</BodyLarge>
                    <TitleLarge>비밀번호 변경</TitleLarge>
                </S.Title>
                <S.InputContainer>
                    <Input
                        title="기존 비밀번호"
                        width="100%"
                        placeholder="기존에 사용하던 비밀번호를 입력해 주세요"
                        name="originPw"
                        onChange={onChange}
                        type="password"
                    />
                    <Input
                        title="새 비밀번호"
                        width="100%"
                        placeholder="영·숫자·기호 포함 8자 이상요"
                        name="updagePw"
                        onChange={onChange}
                        type="password"
                    />
                </S.InputContainer>
                <Button height="48px" value="비밀번호 변경" />
            </div>
        </AuthLayout>
    );
};

export default Password;
