import React from "react";
import * as S from "./style";

const Rank = ({ place, name, studentNumber, major, school, classNumber, score }: any) => {
	return (
		<>
			<S.Line />
			<S.Container>
				<S.Place>
					<S.Circle place={place}>{place}</S.Circle>
				</S.Place>
				<S.Name>
					<img
						src={`./src/assets/images/pages/Ranking/UserImg${place}.svg`}
						alt="userimg"
					/>
					{name}
				</S.Name>
				<S.StudentNumber>{studentNumber}</S.StudentNumber>
				<S.Major>{major}</S.Major>
				<S.School>{school}소프트웨어마이스터고등학교</S.School>
				<S.Class>{classNumber}기</S.Class>
				<S.Score>{score}점</S.Score>
			</S.Container>
		</>
	);
};

export default Rank;
