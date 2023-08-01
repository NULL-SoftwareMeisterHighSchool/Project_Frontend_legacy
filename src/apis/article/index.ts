import { getBlogDetailProps } from "./type";
import { instance } from "..";

const router = `/articles`;

export const getBlogDetail = async ({ setdata }: getBlogDetailProps) => {
    const response = await instance.get(`${router}/`);
    setdata(response.data);
    return response;
};
