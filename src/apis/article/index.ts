import { getBlogDetailProps } from "./type";
import { instance } from "..";

const router = `/articles`;

export const getBlogDetail = async ({ setdata, id }: getBlogDetailProps) => {
    const response = await instance.get(`${router}/${id}`);
    setdata(response.data);
    return response;
};

export const postLike = async ({ id }: getBlogDetailProps) => {
    await instance.post(`${router}/${id}/like`, {});
};