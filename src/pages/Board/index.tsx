import React, { useState } from "react";
import AppLayout from "@layouts/AppLayout";
import Dummy from "@fixtures/board.json";
import * as S from "./style";
import Post from "@components/common/Post";
import SearchFilter from "@components/pages/Board/SearchFilter";
import { LeftArrow } from "@assets/images/icon/LeftArrow";
import { RightArrow } from "@assets/images/icon/RightArrow";
import { color } from "@styles/theme.style";

const Board = () => {
	return (
		<AppLayout title="게시판" path="Menu > 게시판">
			<S.BoardContainer>
				<SearchFilter />
				<S.Content>
					{
						Dummy.post.map(
							post => (
								<Post id={post.id} title={post.title} name={post.name} date={post.date} to='' />
							)
						)
					}
				</S.Content>
				<S.Pagination>
					<LeftArrow width='16' fill={color.black} />
					<S.Number color="#0084DB">1</S.Number>
					<S.Number>2</S.Number>
					<S.Number>3</S.Number>
					<S.Number>4</S.Number>
					<S.Number>5</S.Number>
					<RightArrow width='16' fill={color.black} />
				</S.Pagination>
			</S.BoardContainer>
		</AppLayout>
	);
};

export default Board;
