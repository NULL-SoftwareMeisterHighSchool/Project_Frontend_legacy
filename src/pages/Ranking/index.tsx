import React, { useState } from "react";
import { Sidebar } from "@components/common/Sidebar";
import Option from "@components/pages/Option";
import Dummy from "@fixtures/rank.json";
import * as S from "./style";
import Rank from "@components/pages/Rank";

const Ranking = () => {
	const [isOptionSelected, setIsOptionSelected] = useState<boolean[]>([false]);
	const options = ["전체", "1학년", "2학년", "3학년", "재학생", "졸업생"];

	const handleOptions = (idx: number) => {
		const selectedOptions: boolean[] = options.map((_, i) => i === idx);
		setIsOptionSelected(selectedOptions);
	};

	return (
		<div>
			<Sidebar />
			<S.RankingContainer>
				<S.PageInfo>
					<S.Breadcrumb>Menu {">"} 랭킹</S.Breadcrumb>
					<S.Title>랭킹</S.Title>
				</S.PageInfo>
				<S.Category>
					<S.Options>
						{options.map((text, i) => (
							<Option
								key={i}
								idx={i}
								text={text}
								isOptionSelected={isOptionSelected[i]}
								handleOptions={handleOptions}
							/>
						))}
					</S.Options>
					{/* <S.Sorting /> */}
				</S.Category>
				<S.Content>
					<S.Info>
						<S.Place>순위</S.Place>
						<S.Name>이름</S.Name>
						<S.StudentNumber>학번</S.StudentNumber>
						<S.Major>전공</S.Major>
						<S.School>학교</S.School>
						<S.Class>기수</S.Class>
						<S.Score>점수</S.Score>
					</S.Info>
					{Dummy.list.map((o) => (
						<Rank key={o.id} {...o} />
					))}
				</S.Content>
			</S.RankingContainer>
		</div>
	);
};

export default Ranking;
