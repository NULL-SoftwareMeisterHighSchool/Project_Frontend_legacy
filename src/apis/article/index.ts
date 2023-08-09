import { getBlogDetailProps, getBlogProps } from "./type";
import { postCommentType, postWriteType, patchWriteType } from "./type";
import { useRecoilValue } from "recoil"; 
import { articleIdAtom } from "@atoms/articleId";
import { instance } from "..";

const router = `/articles`;

export const getboardDetail = async ( id : string | undefined ) => {
    const response = await instance.get(`${router}/${id}`);
    return response;
};

export const getBlog = async ({
    type,
    authorID,
    duration_start,
    duration_end,
    query,
    offset,
    limit,
    order,
    setData,
    data, // 일반 블로그는 사용하면 안됨. 기술블로그만 사용
}: getBlogProps) => {
    const response = await instance.get(
        `${router}?offfset=${offset}&limit=${limit}&type=${type}&authorID=${
            authorID ?? ""
        }&duration_start=${duration_start ?? ""}&duration_end=${
            duration_end ?? ""
        }&query=${query ?? ""}&order=${order}`
    );
    const resData = response.data;
    if (data) {
        setData({
            total: resData.total,
            article: data.article.concat(resData.artocle),
        });
    } else {
        setData(resData);
    }
};

export const postLike = async ({ id }: getBlogDetailProps) => {
    await instance.post(`${router}/${id}/like`, {});
};

export const postComment = async ({body, id} : postCommentType) => {
    await instance.post(`${router}/${id}/comments`, {
        body
    });
};

export const deleteComment = async (commentID : number) => {
    const id = useRecoilValue(articleIdAtom);
    await instance.delete(`${router}/${id}/comments/${commentID}`, {});
};

export const postWrite = async ({
    title,
    articleType,
    blogContent
}:postWriteType) => {
    await instance.post(`${router}/`, {
        title, 
        articleType, 
        blogContent
    });
};

export const patchWrite = async ({
    id,
    title,
    articleType,
    blogContent
}:patchWriteType) => {
    await instance.patch(`${router}/${id}`, {
        title, 
        articleType, 
        blogContent
    });
};