import { User } from "@assets/images/icon/User";
import { color } from "@styles/theme.style";
import * as S from "./style";

interface PropTypes {
    backWidth?: string,
    iconWidth?: number,
}

const UserIcon = (
    {
        backWidth = "48px",
        iconWidth = 26,
    }: PropTypes
) => {
    return (  
        <S.Background width={backWidth}>
            <User fill={color.grayDark1} width={iconWidth}/>
        </S.Background>
    );
}
 
export default UserIcon;