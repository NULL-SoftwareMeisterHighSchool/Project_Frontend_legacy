import axios from "axios";

interface postLoginProps {
    id: string;
    password: string;
}

/** 로그인 */
export const postLogin = async ({ id, password }: postLoginProps) => {
    const outingLogin = await axios.post(
        `${process.env.NEXT_PUBLIC_BASEURL}/user/login`,
        {
            id,
            password,
        }
    );

    return outingLogin;
};
