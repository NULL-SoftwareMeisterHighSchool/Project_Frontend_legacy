import * as S from "./style";

import UserSetting from "@components/pages/Setting/UserSetting.tsx";
import AppLayout from "@layouts/AppLayout";
import { Infomation } from "@assets/images/icon/Infomation";
import { color } from "@styles/theme.style";
import { Lock } from "@assets/images/icon/Lock";
import { Mail } from "@assets/images/icon/Mail";
import { RemoveCircle } from "@assets/images/icon/RemoveCircle";
import { useState } from "react";
import Modal from "@components/common/modal";

const Setting = () => {
    const [modalOpen, setModalOpen] = useState<boolean>(false);
    return (
        <AppLayout title="설정" path="User > 설정">
            <Modal val={modalOpen} setVal={setModalOpen}>
                <S.UseTitleContainer>
                    <S.UserTitle>정말로 탈퇴하실건가요?</S.UserTitle>
                    <S.UserSubTitle>
                        탈퇴하면 지금까지 활동한 기록들을 복구할 수 없어요.
                    </S.UserSubTitle>
                </S.UseTitleContainer>
                <S.UserBtnContainer>
                    <button>취소</button>
                    <button>회원 탈퇴 하기</button>
                </S.UserBtnContainer>
            </Modal>
            <S.Container>
                <UserSetting
                    title="비밀번호 변경"
                    icon={
                        <Lock width={24} height={24} fill={color.primaryBase} />
                    }
                    colorType={color.black}
                    onClick={() => {}}
                />
                <UserSetting
                    title="이메일 변경"
                    icon={
                        <Mail width={24} height={24} fill={color.primaryBase} />
                    }
                    colorType={color.black}
                    onClick={() => {}}
                />
                <UserSetting
                    title="개인정보 처리방침"
                    icon={
                        <Infomation
                            width={24}
                            height={24}
                            fill={color.grayDark1}
                        />
                    }
                    colorType={color.grayDark1}
                    onClick={() => {}}
                />
                <UserSetting
                    title="회원 탈퇴"
                    icon={
                        <RemoveCircle
                            width={24}
                            height={24}
                            fill={color.critical}
                        />
                    }
                    colorType={color.critical}
                    onClick={() => setModalOpen(true)}
                />
            </S.Container>
        </AppLayout>
    );
};

export default Setting;
