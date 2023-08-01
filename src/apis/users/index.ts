import axios from "axios";
import { patchEditPasswordProps } from "./users.type";

const BASE_URL = `${import.meta.env.VITE_BASEURL}/users`;
const access_token = localStorage.getItem("access_token");

export const patchEditPassword = async ({
    currentPassword,
    newPassword,
}: patchEditPasswordProps) => {
    const resPatchEditPassword = await axios.patch(
        `${BASE_URL}/me/edit-password`,
        { currentPassword, newPassword },
        {
            headers: {
                Authorization: `Bearer ${access_token}`,
            },
        }
    );

    return resPatchEditPassword;
};
