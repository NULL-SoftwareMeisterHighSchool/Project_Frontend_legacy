import axios from "axios";
import { patchPasswordProps, userDataProps } from "./users.type";

/** 비밀번호 수정 */
export const patchPassword = async ({
    password,
    new_password,
}: patchPasswordProps) => {
    const access_token = localStorage.getItem("access_token");

    const outingPatchPassword = await axios.patch(
        `${process.env.NEXT_PUBLIC_BASEURL}/passwordUpdate`,
        {
            password,
            new_password,
        },
        {
            headers: {
                Authorization: `Bearer ${access_token}`,
            },
        }
    );
    return outingPatchPassword;
};

/** 유저 삭제 */
export const deleteUser = async ({}) => {
    const access_token = localStorage.getItem("access_token");

    const outingUser = await axios.delete(
        `${process.env.NEXT_PUBLIC_BASEURL}/userDelete`,
        {
            headers: {
                Authorization: `Bearer ${access_token}`,
            },
        }
    );

    return outingUser;
};

export const getUserData = async ({ id }: userDataProps) => {
    const access_token = localStorage.getItem("access_token");

    const outingGetUserData = await axios.get(
        `${process.env.NEXT_PUBLIC_BASEURL}/userDelete/${id}`,
        {
            headers: {
                Authorization: `Bearer ${access_token}`,
            },
        }
    );

    return outingGetUserData;
};

import { patchEditPasswordProps, getGitProps, putEditMeProps } from "./users.type";
import { instance } from "..";

const router = `/users`;

export const patchEditPassword = async ({
    currentPassword,
    newPassword,
}: patchEditPasswordProps) => {
    const resPatchEditPassword = await instance.patch(
        `${router}/me/edit-password`,
        { currentPassword, newPassword }
    );

    return resPatchEditPassword;
};


export const getGit = async ({ setGitData }: getGitProps) => {
    const resGetGit = await instance.get(`${router}/me/stat`,);
    setGitData(resGetGit.data);
    return resGetGit;
};

export const getUserMe = async () => {
    const res = await instance.get(`${router}/me`,);
    return res;
};

export const getUser = async (id : string | undefined) => {
    const res = await instance.get(`${router}/${id}`,);
    return res;
};

export const putEditMe = async ({
    bio,
    stacks,
    githubURL,
    portfolioURL,
}: putEditMeProps) => {
    const resPutEditMe = await instance.put(`${router}/me`, {
        bio,
        stacks,
        githubURL,
        portfolioURL,
    });

    return resPutEditMe;
};

export const getUserMeTiny = async () => {
    const res = await instance.get(`${router}/me/tiny`,);
    return res;
};

export const delMeWithdraw = async()=>{
    const res = await instance.delete(`${router}/me/withdraw`);
    return res;
}
