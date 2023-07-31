import axios from "axios";

interface patchPasswordProps {
    password: string;
    new_password: string;
}

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
