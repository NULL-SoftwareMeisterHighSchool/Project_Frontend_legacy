import { patchEditPasswordProps, getGitProps } from "./users.type";
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