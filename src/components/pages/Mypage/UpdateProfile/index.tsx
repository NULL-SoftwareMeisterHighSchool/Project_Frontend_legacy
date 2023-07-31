import Modal from "@components/common/modal";
import * as S from "./style";
import { BodyStrong, Title } from "@styles/text.style";
import { Clear } from "@assets/images/icon/Clear";
import Input from "@components/common/Input";
import { useEffect, useState } from "react";

interface UpdateProfileProps {
    val: boolean;
    setVal: React.Dispatch<React.SetStateAction<boolean>>;
    userData: UserDateType;
    setUserData: React.Dispatch<React.SetStateAction<UserDateType>>;
}
interface UserDateType {
    introduction: string;
    github: string;
    portfolio: string;
    skill: string[];
}
const UpdateProfile = ({
    val,
    setVal,
    userData,
    setUserData, //추후에 연동할것을 생각하여 미리 prop으로 받음
}: UpdateProfileProps) => {
    const [inputSkill, setInutSkill] = useState<string>("");
    const [userDataUpdate, setUserDataUpdate] = useState<UserDateType>({
        introduction: "",
        github: "",
        portfolio: "",
        skill: [],
    });
    const [btnState, setBtnState] = useState<boolean>(false);

    const enterSkill = () => {
        if (inputSkill.trim()) {
            setUserDataUpdate({
                ...userDataUpdate,
                skill: [inputSkill.trim(), ...userDataUpdate.skill],
            });
            setInutSkill("");
        }
    };
    const skillOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInutSkill(e.target.value);
    };
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUserDataUpdate({
            ...userDataUpdate,
            [name]: value,
        });
    };
    useEffect(() => {
        setUserDataUpdate({ ...userData, introduction: userData.introduction });
    }, []);

    useEffect(() => {
        changeBtnState();
    }, [userDataUpdate]);
    const changeBtnState = () => {
        console.log(userData.skill, userDataUpdate.skill);
        const arr1 = userData.skill;
        const arr2 = userDataUpdate.skill;

        if (
            userDataUpdate.github === userData.github &&
            userDataUpdate.introduction === userData.introduction &&
            userDataUpdate.portfolio === userData.portfolio &&
            arr1.length === arr2.length &&
            arr1.every((value, idx) => value === arr2[idx])
        ) {
            setBtnState(false);
            console.log("true");
        } else {
            setBtnState(true);
            console.log("false");
        }
    };

    return (
        <>
            {val && (
                <Modal setVal={setVal}>
                    <S.TitleContainer>
                        <Title>프로필 수정</Title>
                        <Clear onClick={() => setVal(false)} />
                    </S.TitleContainer>
                    <Input
                        width="100%"
                        title="한줄소개"
                        name="introduction"
                        placeholder="한줄소개를 입력해주세요"
                        onChange={onChange}
                        value={userDataUpdate.introduction}
                    />
                    <Input
                        width="100%"
                        title="Github 링크"
                        name="github"
                        placeholder="Github 링크를 입력해주세요"
                        onChange={onChange}
                        value={userDataUpdate.github}
                    />
                    <Input
                        width="100%"
                        title="포트폴리오 링크"
                        name="portfolio"
                        placeholder="포트폴리오 링크를 입력해주세요"
                        onChange={onChange}
                        value={userDataUpdate.portfolio}
                    />
                    <S.InputBtnContainer>
                        <div>
                            <Input
                                width="100%"
                                title="기술스택"
                                name="skill"
                                placeholder="기술스택을 입력하여 추가해주세요"
                                onChange={skillOnchange}
                                value={inputSkill}
                                onKeyDown={(e) => {
                                    if (e.key === "Enter") {
                                        enterSkill();
                                    }
                                }}
                            />
                        </div>
                        <button onClick={() => enterSkill()}>
                            <BodyStrong>기술스택 추가</BodyStrong>
                        </button>
                    </S.InputBtnContainer>
                    <S.SkillContainer>
                        {userDataUpdate.skill.map((skill, i) => (
                            <S.Skill key={skill + i}>
                                <BodyStrong>{skill}</BodyStrong>
                                <p
                                    onClick={() => {
                                        setUserDataUpdate({
                                            ...userDataUpdate,
                                            skill: userDataUpdate.skill.filter(
                                                (_, index) => index !== i
                                            ),
                                        });
                                    }}
                                >
                                    x
                                </p>
                            </S.Skill>
                        ))}
                    </S.SkillContainer>
                    {btnState ? (
                        <S.UpdateBtn>
                            <BodyStrong>프로필 수정하기</BodyStrong>
                        </S.UpdateBtn>
                    ) : (
                        <S.UpdateBtn disabled>
                            <BodyStrong>프로필 수정하기</BodyStrong>
                        </S.UpdateBtn>
                    )}
                </Modal>
            )}
        </>
    );
};

export default UpdateProfile;
