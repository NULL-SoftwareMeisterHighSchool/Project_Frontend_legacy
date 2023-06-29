import React, { useState } from "react";
import AppLayout from "@layouts/AppLayout";
import Dummy from "@fixtures/board.json";
import * as S from "./style";
import Post from "@components/common/Post";
import SearchFilter from "@components/pages/Board/SearchFilter";
import LeftArrow from "@assets/images/icon/LeftArrow.svg";
import RightArrow from "@assets/images/icon/RightArrow.svg";

const Board = () => {
	return (
		<AppLayout title="게시판" path="Menu > 게시판">
			<S.BoardContainer>
				<SearchFilter />
				<S.Content>
					{
						Dummy.post.map(
							post => (
								<Post id={post.id} title={post.title} name={post.name} date={post.date} width="1280px" to='' />
							)
						)
					}
				</S.Content>
				<S.Pagination>
					<S.LeftArrow src={LeftArrow}/>
					<S.Number color="#0084DB">1</S.Number>
					<S.Number>2</S.Number>
					<S.Number>3</S.Number>
					<S.Number>4</S.Number>
					<S.Number>5</S.Number>
					<S.RightArrow src={RightArrow} />
				</S.Pagination>
			</S.BoardContainer>
		</AppLayout>
	);
};

export default Board;
