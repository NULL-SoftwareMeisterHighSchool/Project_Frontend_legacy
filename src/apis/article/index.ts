import { getBlogDetailProps, getBlogProps } from "./type";
import { postCommentType, postWriteType } from "./type";
import { instance } from "..";

const router = `/articles`;

export const getBlogDetail = async ({ setdata, id }: getBlogDetailProps) => {
    const response = await instance.get(`${router}/${id}`);
    setdata(response.data);
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