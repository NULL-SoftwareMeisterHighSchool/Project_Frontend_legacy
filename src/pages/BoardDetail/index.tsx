import React, { useState } from 'react';
import remarkGfm from 'remark-gfm'
import { color } from '@styles/theme.style';
import Post from '@components/common/Post';
import Dummy from "@fixtures/board.json";
import Dummy2 from "@fixtures/comment.json";
import { Favorite } from '@assets/images/icon/Favorite';
import { ChatBubble } from '@assets/images/icon/ChatBubble';
import { Share } from '@assets/images/icon/Share';
import { Eye } from '@assets/images/icon/Eye';
import { Edit } from '@assets/images/icon/Edit';
import Comment from '@components/common/Comment';
import SharePopUp from '@components/pages/SharePopUp';
import UserIcon from '@components/common/UserIcon';
import CommentWrite from "@components/pages/BoardDetail/Comment"
import * as S from './style';

const MarkDown = `
  # 바보
  ## 바보
  #### 바보
`;

const BoardDetail = () => {
  const [showPopUp, setShowPopUp] = useState<boolean>(false);
  const [data, setdata] = useState({
    username: "권강빈",
    title: "Awesome 한 이것 사용 후기",
    date: "2002.12.12",
    heart: 22,
    views: 14
  });
  return (
    <>
      {
        showPopUp && <SharePopUp setShowPopUp={setShowPopUp} />
      }
      <>
        <S.Post>
          <S.Thumbnail>
            <S.Title>{data.title}</S.Title>
            <S.Profile>
              <UserIcon backWidth="48px" iconWidth={26}/>
              <S.ProfileInfo>
                <S.Name>{data.username}</S.Name>
                <S.Date>{data.date}</S.Date>
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
                {data.heart}
              </S.IconInfo>
              <S.IconInfo>
                <ChatBubble fill={color.grayBase} width="24px"/>
                {data.views}
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
          <CommentWrite />
          <S.Comment>
            {
              Dummy2.post.map(
                post => (
                  <Comment username={post.name} content={post.content} to={post.to} date={post.date} time={post.time}/>
                )
              )
            }
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
      </>
    </>
  );
}

export default BoardDetail;