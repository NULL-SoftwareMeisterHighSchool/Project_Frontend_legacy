import { useEffect, useState } from "react";
import { color } from "@styles/theme.style";
import { useParams } from "react-router-dom";
import { Favorite } from "@assets/images/icon/Favorite";
import { ChatBubble } from "@assets/images/icon/ChatBubble";
import { Share } from "@assets/images/icon/Share";
import { Eye } from "@assets/images/icon/Eye";
import { Edit } from "@assets/images/icon/Edit";
import { Delete } from "@assets/images/icon/Delete";
import Modal from "@components/common/modal";
import SharePopUp from "@components/pages/SharePopUp";
import UserIcon from "@components/common/UserIcon";
import View from "@components/pages/BoardDetail/Viewer";
import CommentWrite from "@components/pages/BoardDetail/CommentWrite";
import Comment from "@components/pages/BoardDetail/Comment";
import * as S from "./style";
import { useMutation, useQuery } from "react-query";
import { getboardDetail, postLike } from "@apis/article";
import useDate from "@hooks/useDate";

const BoardDetail = () => {
    const { id } = useParams();
    const [showPopUp, setShowPopUp] = useState<boolean>(false);
    const [blogOpen, setBlogOpen] = useState<boolean>(false);
    const [data, setdata] = useState({
        title: "Awesome 한 이것 사용 후기",
        views: 12,
        body: "qkqhsaldkfjls",
        createdAt: "2016-10-27T17:13:40",
        author: {
            id: 2,
            name: "권강빈",
        },
        isLiked: false,
        isAuthor: true,
        likes: 12,
        commentCount: 11,
        comments: [
            {
                commentID: 1,
                author: {
                    id: 1,
                    name: "김강빈",
                },
                content: "나는야 바보",
                createdAt: "2016-10-27T17:13:40",
            },
        ],
    });

    const { mutateAsync: likeMutate } = useMutation(postLike,{
        onSuccess: ()=>{
            console.log("Success");
        },
        onError: ()=>{
            console.error("Error");
        }
    });

    const { refetch } = useQuery(
        "getBlogDetail",
        () => getboardDetail(id),{
            onSuccess: (res)=>{
                setdata(res.data);
            },
            onError: ()=>{
                console.log("Error");
            },
            enabled: false,
        }
    );
    
    useEffect(() => {
        refetch();
    }, []);

    return (
        <>
            {showPopUp && <SharePopUp setShowPopUp={setShowPopUp} />}
            {blogOpen && (
                <Modal setVal={setBlogOpen}>
                    <S.UseTitleContainer>
                        <S.UserTitle>정말로 게시글을 삭제하실건가요?</S.UserTitle>
                        <S.UserSubTitle>
                        삭제한 게시글은 되돌릴 수 없어요.
                        </S.UserSubTitle>
                    </S.UseTitleContainer>
                    <S.UserBtnContainer>
                        <button onClick={()=>{
                            setBlogOpen(false);
                        }}>취소</button>
                        <button>게시글 삭제하기</button>
                    </S.UserBtnContainer>
                </Modal>
            )}
            <>
                <S.Post>
                    <S.Thumbnail>
                        <S.PostTitle>{data.title}</S.PostTitle>
                        <S.Profile>
                            <UserIcon backWidth="48px" iconWidth={26} />
                            <S.ProfileInfo>
                                <S.Name>{data.author.name}</S.Name>
                                <S.Date>{useDate(data.createdAt).date}</S.Date>
                            </S.ProfileInfo>
                        </S.Profile>
                    </S.Thumbnail>
                    <View content={data.body} />
                    <S.Line />
                    <S.IconSection>
                        <S.Icons>
                            <S.IconInfo
                            onClick={() => {
                                likeMutate
                            }}>
                                {data.isLiked ? (
                                    <Favorite
                                        fill={color.critical}
                                        width="24px"
                                    />
                                ) : (
                                    <Favorite
                                        fill={color.grayBase}
                                        width="24px"
                                    />
                                )}
                                {data.isLiked}
                            </S.IconInfo>
                            <S.IconInfo>
                                <ChatBubble
                                    fill={color.grayBase}
                                    width="24px"
                                />
                                {data.commentCount}
                            </S.IconInfo>
                        </S.Icons>
                        <S.Icons>
                            <S.IconInfo>
                                <Eye fill={color.grayDark1} width="24px" />
                                <S.IconText>{data.views}</S.IconText>
                            </S.IconInfo>
                            <S.IconInfo onClick={() => setShowPopUp(true)}>
                                <Share fill={color.grayDark1} width="24px" />
                            </S.IconInfo>
                            {data.isAuthor ? (
                                <>
                                    <S.UpdateIcon to={"/updateblog/"+id}>
                                        <Edit
                                            fill={color.primaryBase}
                                            width="24px"
                                        />
                                        <S.UpdateText
                                            fill={color.primaryBase}
                                        >게시글 수정하기</S.UpdateText>
                                    </S.UpdateIcon>
                                    <S.DeleteIcon onClick={()=>{
                                        setBlogOpen(true);
                                    }}>
                                        <Delete
                                            fill={color.critical}
                                            width="24px"
                                        />
                                        <S.UpdateText
                                            fill={color.critical}
                                        >게시글 삭제하기</S.UpdateText>
                                    </S.DeleteIcon>
                                </>    
                            ) : (
                                ""
                            )}
                        </S.Icons>
                    </S.IconSection>
                    <CommentWrite id={id} />
                    <S.Comment>
                        {data.comments.map((post, index) => (
                            <Comment
                                key={index}
                                username={post.author.name}
                                content={post.content}
                                to={"/profile/" + post.author.id}
                                date={useDate(post.createdAt).date}
                                time={useDate(post.createdAt).time}
                            />
                        ))}
                    </S.Comment>
                    {/* <S.Line />
          <S.WhatFollows>이어지는 글</S.WhatFollows>
          <S.Board>
            {
                Dummy.post.map(
                  post => (
                    <Post id={post.id} to='/' title={post.title} name={post.name} date={post.date} padding='0px'/>
                  )
                )
            }
            </S.Board> */}
                </S.Post>
            </>
        </>
    );
};

export default BoardDetail;
