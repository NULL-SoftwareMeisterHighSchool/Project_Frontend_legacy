import React, { useEffect, useState } from "react";
import * as S from "./style";

import Button from "@components/common/Button";
import Input from "@components/common/Input";
import AuthLayout from "@layouts/AuthLayout";
import { useMutation } from "react-query";

import { Body2, BodyLarge, BodyStrong, TitleLarge } from "@styles/text.style";
import LeftArrow from "@assets/images/pages/LeftArrow.svg";
import { useNavigate } from "react-router-dom";
import Dropdown from "@components/common/Dropdown";
import { postSendEmail, postSignupStudent, postVerify } from "@apis/auth";
type ArrayType = {
    name: string;
    title: string;
    placeholder: string;
    txtBtn?: string;
    onClick?: () => void;
    type: string;
};
type DropdownType = {
    text: string;
};
const emailRex = new RegExp("^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$");
const urlRex = new RegExp(
    "(http[s]?|ftp)://(www.)?[-a-zA-Z0-9@:%._+~#=]{2,256}.[a-z]{2,6}"
);
const EnRolledSignup = () => {
    const router = useNavigate();

    const { mutate: sendEmailMutate } = useMutation(postSendEmail, {
        onSuccess: () => {
            alert("이메일이 전송되었습니다.");
        },
        onError: () => {
            alert("이메일 입력오류");
        },
    });

    const { mutate: verifyMutate } = useMutation(postVerify, {
        onSuccess: () => {
            setUserData({ ...userData, emailCode: true });
            setPageNum(2);
        },
        onError: () => {
            alert("인증번호가 틀렸습니다.");
        },
    });

    const { mutate: signupStudent } = useMutation(postSignupStudent, {
        onSuccess: () => {
            router("/login");
        },
        onError: (err) => {
            console.log(err)
            alert("회원가입에 실패하였습니다.");
            setPageNum(1);
        },
    });

    const [pageNum, setPageNum] = useState(1);

    const [userData, setUserData] = useState({
        school: "",
        email: "",
        admissionYear: 0,
        name: "",
        code: "",
        userID: "",
        password: "",
        emailCode: true, // 수정 필요
        githubID: "",
    });

    const [userSchool, setUserSchool] = useState<DropdownType | undefined>({
        text: "대덕SW마이스터고",
    });
    const inputType: ArrayType[] = [
        {
            type: "string",
            name: "school",
            title: "학교",
            placeholder: "재학중이거나 졸업한 학교를 입력해 주세요",
        },
        {
            type: "number",
            name: "admissionYear",
            title: "입학연도",
            placeholder: "학교에 입학한 년도를 입력해 주세요",
        },
        {
            type: "email",
            name: "email",
            title: "학교 이메일",
            placeholder: "학교 전용 이메일을 입력해 주세요",
            txtBtn: "이메일 인증하기",
            onClick: () => {
                sendEmailMutate({ email: userData.email });
            },
        },
        {
            type: "string",
            name: "code",
            title: "인증번호",
            placeholder: "학교 이메일로 보내진 인증번호를 입력해 주세요",
        },
        {
            type: "string",
            name: "name",
            title: "이름",
            placeholder: "실명을 입력해 주세요",
        },
        {
            type: "string",
            name: "userID",
            title: "아이디",
            placeholder: "아이디를 입력해 주세요",
        },
        {
            type: "string",
            name: "password",
            title: "비밀번호",
            placeholder: "영·숫자·기호 포함 8자 이상",
        },
        {
            type: "url",
            name: "githubID",
            title: "GitHub",
            placeholder: "Github 주소를 입력해 주세요",
        },
    ];
    const schoolSelect = [
        { text: "대덕SW마이스터고" },
        { text: "대구SW마이스터고" },
        { text: "광주SW마이스터고" },
        { text: "부산SW마이스터고" },
    ];
    useEffect(() => {
        setUserData({ ...userData, school: userSchool!.text });
    }, [userSchool]);
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUserData({
            ...userData,
            [name]: value,
        });
    };

    const onClickPage = () => {
        if (userData.admissionYear === 0) {
            alert("입학년도를 입력해주세요.");
        } else if (userData.email === "") {
            alert("이메일을 입력해주세요.");
        } else if (!emailRex.test(userData.email)) {
            alert("이메일 형식이 올바르지 않습니다.");
        } else if (userData.code === "") {
            alert("인증번호를 입력해주세요");
        } else {
            verifyMutate({ email: userData.email, code: userData.code });
        }
    };

    const onClickSignUp = () => {
        if (userData.name === "") {
            alert("이름를 입력해주세요.");
        } else if (userData.password === "") {
            alert("아이디를 입력해주세요.");
        } else if (userData.password === "") {
            alert("비밀번호를 입력해주세요.");
        } else if (userData.githubID === "") {
            alert("Github를 입력해주세요.");
        } else if (!urlRex.test(userData.githubID)) {
            alert("Github 형식이 올바르지 않습니다.");
        } else if (userData.password.length < 8) {
            alert("비밀번호 길이가 8자 이상이어야 합니다.");
        } else if (userData.password.length > 16) {
            alert("비밀번호 길이가 16자 이하이어야 합니다.");
        } else {
            signupStudent({
                school:
                    userData.school === "대덕SW마이스터고"
                        ? "DSM"
                        : userData.school === "대구SW마이스터고"
                        ? "DGSM"
                        : userData.school === "광주SW마이스터고"
                        ? "GSM"
                        : "BSM",
                email: userData.email,
                admissionYear: Number(userData.admissionYear),
                name: userData.name,
                userID: userData.userID,
                password: userData.password,
                githubID: userData.githubID,
            });
        }
    };

    return (
        <AuthLayout position="right">
            <div>
                <S.Title>
                    <BodyLarge>Sign In</BodyLarge>
                    <S.ArrowContainer>
                        {pageNum !== 1 && (
                            <S.BackArrow
                                src={LeftArrow}
                                onClick={() => setPageNum(pageNum - 1)}
                            />
                        )}
                        <TitleLarge>회원가입</TitleLarge>
                    </S.ArrowContainer>
                </S.Title>
                <S.InputContainer>
                    {pageNum === 1 && (
                        <S.DropContainer>
                            <BodyLarge>학교</BodyLarge>
                            <Dropdown
                                items={schoolSelect}
                                describe="학교"
                                val={userSchool}
                                setVal={setUserSchool}
                                width="100%"
                            />
                        </S.DropContainer>
                    )}
                    {inputType
                        .slice((pageNum - 1) * 4, pageNum * 4)
                        .map((d, i) => {
                            if (pageNum === 1) {
                                return (
                                    i !== 0 && (
                                        <Input
                                            type={d.type}
                                            txtBtn={d.txtBtn}
                                            onClick={d.onClick}
                                            title={d.title}
                                            key={d.title}
                                            width="100%"
                                            placeholder={d.placeholder}
                                            name={d.name}
                                            onChange={onChange}
                                        />
                                    )
                                );
                            } else {
                                return (
                                    <Input
                                        type={d.type}
                                        txtBtn={d.txtBtn}
                                        onClick={d.onClick}
                                        title={d.title}
                                        key={d.title}
                                        width="100%"
                                        placeholder={d.placeholder}
                                        name={d.name}
                                        onChange={onChange}
                                    />
                                );
                            }
                        })}
                </S.InputContainer>
                <S.SubmitContainer>
                    <div>
                        <Body2>회원이신가요?</Body2>
                        <BodyStrong>로그인</BodyStrong>
                    </div>
                    <Button
                        height="48px"
                        value={pageNum === 1 ? "다음" : "회원가입"}
                        onClick={
                            pageNum === 1
                                ? () => onClickPage()
                                : () => onClickSignUp()
                        }
                        disabled={!userData.emailCode}
                    />
                </S.SubmitContainer>
            </div>
        </AuthLayout>
    );
};

export default EnRolledSignup;
