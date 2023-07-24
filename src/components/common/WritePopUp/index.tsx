import * as S from './style'
import { useRef, useState } from 'react';
import { Close } from '@assets/images/icon/Close';
import { Article } from '@assets/images/icon/Article';
import { SkillArticle } from '@assets/images/icon/SkillArticle';
import { color } from '@styles/theme.style';
import Option from './Option';

interface PropTypes {
    setShowPopUp: (showPopUp: boolean) => void;
}

const WritePopUp = ({ setShowPopUp }:PropTypes) => {
    const [isHovered, setIsHovered] = useState(false);
    const writePopUpBg = useRef(null);
    const writePopUp = useRef(null);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };
    
    const handleMouseLeave = () => {
        setIsHovered(false);
    };
        

    return (  
        <S.Background
            ref={writePopUpBg}
            onClick={e => {
                if(e.target === writePopUpBg.current)
                    setShowPopUp(false);
            }}
        >
            <S.PopUp>
                <S.PopUpInfo>
                    <S.PopUpText>
                        <S.PopUpTitle>글 쓰기</S.PopUpTitle>   
                        <S.PopUpSmalltalk>어떤 글쓰기를 하실건가요?</S.PopUpSmalltalk>
                    </S.PopUpText>   
                    <S.Close 
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave} 
                        onClick={() => {
                            setShowPopUp(false);
                        }}
                    >
                        <Close
                            fill={isHovered ? color.grayLight2 : color.black}
                        /> 
                    </S.Close>
                </S.PopUpInfo>
                <S.OpitonInfo>
                    <Option icon={<Article/>} to='/' optionName='게시판 글쓰기'/>  
                    <Option icon={<SkillArticle/>} to='/' optionName='기술 블로그 글쓰기'/>    
                </S.OpitonInfo>         
            </S.PopUp>
        </S.Background>
    );
}
 
export default WritePopUp;