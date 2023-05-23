import React, { useState, useEffect } from 'react';
import remarkGfm from 'remark-gfm'

import Dummy from "@fixtures/board.json";
import { Sidebar } from '@components/common/Sidebar';
import Comment from '@components/common/Comment';
import * as S from './style';

const MarkDown = `
  # 바보
  ## 바보
  #### 바보
`;

const BoardDetail = () => {
  return (
    <>
      <Sidebar />
      <S.Post>
        <S.Thumbnail>
          <S.Img />
          <S.Title>Awesome 한 이것 사용 후기</S.Title>
          <S.Profile>
            <S.ProfileImg />
            <S.ProfileInfo>
              <S.Name>홍길동 · Frontend Developer</S.Name>
              <S.Date>2022.03.16</S.Date>
            </S.ProfileInfo>
          </S.Profile>
        </S.Thumbnail>
        <S.Markdown remarkPlugins={[[remarkGfm, {singleTilde: false}]]}>
          {MarkDown}
        </S.Markdown>
        <S.Line />
        <S.Comment>
          <Comment username = "홍길동" content="바보들" state='COMMENT' />
          <Comment username = "김현진" content="왜 그러세요..." state='REPLY' />
          <Comment username = "박신" content="ㅋㅋㅋ" state='REPLY' />
        </S.Comment>
        <S.Line />
        <S.WhatFollows>이어지는 글</S.WhatFollows>
        <S.Board>
					{
							Dummy.post.map(
								post => (
									<S.Post2 key={post.id} to="/">
										<S.PostTitle>{post.title}</S.PostTitle>
										<S.PostInfo>
											<S.PostName>{post.name}</S.PostName>
											<S.PostDate>{post.date}</S.PostDate>
										</S.PostInfo>
									</S.Post2>
								)
							)
					}
					</S.Board>
      </S.Post>
    </>
  );
}

export default BoardDetail;