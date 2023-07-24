import * as S from "./style";

import UserSetting from "@components/pages/Setting/UserSetting.tsx";
import AppLayout from "@layouts/AppLayout";
import { Infomation } from "@assets/images/icon/Infomation";
import { color } from "@styles/theme.style";
import { Lock } from "@assets/images/icon/Lock";
import { Mail } from "@assets/images/icon/Mail";
import { RemoveCircle } from "@assets/images/icon/RemoveCircle";

const Setting = () => {
    return (
        <AppLayout title="설정" path="User > 설정">
            <S.Container>
                <UserSetting
                    title="비밀번호 변경"
                    icon={
                        <Lock width={24} height={24} fill={color.primaryBase} />
                    }
                    colorType={color.black}
                    onClick={()=>{}}
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
                    onClick={() => {}}
                />
            </S.Container>
        </AppLayout>
    );
};

export default Setting;
