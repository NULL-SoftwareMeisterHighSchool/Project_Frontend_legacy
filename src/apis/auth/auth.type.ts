import axios from "axios";
import { postLoginProps } from ".";

const BASE_URL = `${import.meta.env.VITE_BASEURL}/auth`;

export const postLogin = async ({ id, password }: postLoginProps) => {

    const resPostLogin = await axios.post(`${BASE_URL}/login`, {
        id,
        password,
    });

    return resPostLogin;
};
