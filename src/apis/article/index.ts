import { getBlogDetailProps, getBlogProps } from "./type";
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
}: getBlogProps) => {
    const response = await instance.get(
        `${router}?offfset=${offset}&limit=${limit}&type=${type}&authorID=${
            authorID ?? ""
        }&duration_start=${duration_start ?? ""}&duration_end=${
            duration_end ?? ""
        }&query=${query ?? ""}&order=${order}`
    );
    setData(response.data);
};

export const postLike = async ({ id }: getBlogDetailProps) => {
    await instance.post(`${router}/${id}/like`, {});
};