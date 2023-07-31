import AppLayout from "@layouts/AppLayout";
import Filter from "@components/pages/Ranking/Filter";
import * as S from "./style";
import Ranks from "@components/pages/Ranking/Ranks";
import rankingData from "@fixtures/rank.json";
import { Body2 } from "@styles/text.style";

const Ranking = () => {
    const rankData = rankingData.list;

    return (
        <AppLayout title="랭킹" path="Menu > 랭킹">
            <Filter />

            <S.RanksContainer>
                <S.RankHeader>
                    <div>
                        <Body2>순위</Body2>
                    </div>
                    <div>
                        <Body2>이름</Body2>
                    </div>
                    <div>
                        <Body2>학번</Body2>
                    </div>
                    <div>
                        <Body2>전공</Body2>
                    </div>
                    <div>
                        <Body2>학교</Body2>
                    </div>
                    <div>
                        <Body2>기수</Body2>
                    </div>
                    <div>
                        <Body2>점수</Body2>
                    </div>
                </S.RankHeader>
				<S.Line/>
                <S.RankContianer>
                    {rankData.map((v) => {
                        return (
                            <>
                                <Ranks {...v} />
                                <S.Line />
                            </>
                        );
                    })}
                </S.RankContianer>
            </S.RanksContainer>
        </AppLayout>
    );
};

export default Ranking;
