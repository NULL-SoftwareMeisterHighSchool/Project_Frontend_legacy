import { patchEditPasswordProps } from "./users.type";
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
