import * as S from "./style";

import UserSetting from "@components/pages/Setting/UserSetting.tsx";
import AppLayout from "@layouts/AppLayout";
import { User } from "@assets/images/icon/User";
import { Infomation } from "@assets/images/icon/Infomation";
import { color } from "@styles/theme.style";
import { Lock } from "@assets/images/icon/Lock";
import { Mail } from "@assets/images/icon/Mail";

const Setting = () => {
    return (
        <AppLayout title="설정" path="User > 설정">
            <S.Container>
                <UserSetting title="프로필 수정" path="/" icon={<User width={24} height={24} fill={color.primaryBase} />}/>
                <UserSetting title="비밀번호 변경" path="/" icon={<Lock width={24} height={24} fill={color.primaryBase} />}/>
                <UserSetting title="이메일 변경" path="/" icon={<Mail width={24} height={24} fill={color.primaryBase} />}/>
                <UserSetting title="개인정보 처리방침" path="/" icon={<Infomation width={24} height={24} fill={color.grayDark1} />} colorType/>
            </S.Container>
        </AppLayout>
    )
}

export default Setting;