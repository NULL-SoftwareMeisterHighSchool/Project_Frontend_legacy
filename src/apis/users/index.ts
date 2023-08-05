import { patchEditPasswordProps, putEditMeProps } from "./users.type";
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
