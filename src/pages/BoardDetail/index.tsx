import React, { useState } from 'react';
import remarkGfm from 'remark-gfm'
import { color } from '@styles/theme.style';
import AppLayout from '@layouts/AppLayout';
import Post from '@components/common/Post';
import Dummy from "@fixtures/board.json";
import { Favorite } from '@assets/images/icon/Favorite';
import { ChatBubble } from '@assets/images/icon/ChatBubble';
import { Share } from '@assets/images/icon/Share';
import { Eye } from '@assets/images/icon/Eye';
import { Edit } from '@assets/images/icon/Edit';
import Comment from '@components/common/Comment';
import SharePopUp from '@components/pages/SharePopUp';
import * as S from './style';

const MarkDown = `
  # 바보
  ## 바보
  #### 바보
`;

const BoardDetail = () => {
  const [showPopUp, setShowPopUp] = useState<boolean>(false);
  return (
    <>
      {
        showPopUp && <SharePopUp setShowPopUp={setShowPopUp} />
      }
      <AppLayout>
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
          <S.IconSection>
            <S.Icons>
              <S.IconInfo>
                <Favorite fill={color.grayBase} width="24px"/>
                24
              </S.IconInfo>
              <S.IconInfo>
                <ChatBubble fill={color.grayBase} width="24px"/>
                3
              </S.IconInfo>
            </S.Icons>
            <S.Icons>
              <S.IconInfo>
                <Eye fill={color.grayDark1} width="24px"/>
                <S.IconText>12</S.IconText>
              </S.IconInfo>
              <S.IconInfo 
                onClick={() => setShowPopUp(true)}
              >
                <Share fill={color.grayDark1} width="24px" />
              </S.IconInfo>
              <S.UpdateIcon to="/">
                <Edit fill={color.primaryBase} width="24px" />
                <S.UpdateText>게시글 수정하기</S.UpdateText>
              </S.UpdateIcon>
            </S.Icons>
          </S.IconSection>
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
                    <Post id={post.id} to='/' title={post.title} name={post.name} date={post.date} padding='0px'/>
                  )
                )
            }
            </S.Board>
        </S.Post>
      </AppLayout>
    </>
  );
}

export default BoardDetail;