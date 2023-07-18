import { RightArrow } from "@assets/images/icon/RightArrow";
import * as S from "./style";
import { color } from "@styles/theme.style";

type props = {
    title: string, path: string, icon: JSX.Element, colorType?: boolean
}

const UserSetting = ({ title, path, icon, colorType }: props) => {
    return (
        <S.SettingContainer>
            <div>
                <S.Icon>{icon}</S.Icon>
                <S.Title gray={colorType}>{title}</S.Title>
            </div>
            <RightArrow fill={color.grayBase} width={24} height={24} />
        </S.SettingContainer>
    )
}

export default UserSetting;