import UserIcon from "@components/common/UserIcon";
import * as S from "./style";
import { Body2 } from "@styles/text.style";
type Props = {
    place: number;
    name: string;
    studentNumber: number;
    major: string;
    school: string;
    classNumber: number;
    score: number;
};

const Ranks = ({
    place,
    name,
    studentNumber,
    major,
    school,
    classNumber,
    score,
}: Props) => {
    return (
        <S.Container>
            <S.Rank rank={place}>
                <Body2>{place}</Body2>
            </S.Rank>
            <div>
                <UserIcon backWidth="40px"/>
                <Body2>{name}</Body2>
            </div>
            <div>
                <Body2>{studentNumber}</Body2>
            </div>
            <div>
                <Body2>{major}</Body2>
            </div>
            <div>
                <Body2>{school}SW마이스터고</Body2>
            </div>
            <div>
                <Body2>{classNumber}기</Body2>
            </div>
            <div>
                <Body2>{score}점</Body2>
            </div>
        </S.Container>
    );
};

export default Ranks;
