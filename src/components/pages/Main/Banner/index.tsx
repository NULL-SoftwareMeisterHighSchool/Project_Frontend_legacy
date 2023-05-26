import Button from '@components/common/Button';
import * as S from './style';

interface BannerPropTypes {
    title: string;
    subtitle: string;
    buttonValue: string;
}

const Banner = ({ title, subtitle, buttonValue }: BannerPropTypes) => {
    return (
        <S.Banner>
            <S.BannerText>
                <S.BannerTitle>{title}</S.BannerTitle>
                <S.BannerSubtitle>{subtitle}</S.BannerSubtitle>
            </S.BannerText>
            <Button width='104px' height='48px' value={buttonValue}></Button>
        </S.Banner>
    );
}

export default Banner; 