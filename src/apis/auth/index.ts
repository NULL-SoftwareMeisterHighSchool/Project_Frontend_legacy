import {
    postSendEmailProps,
    postSignupStudentProps,
    postVerifyProps,
} from "./auth.type";
import axios from "axios";
import { postLoginProps } from "./auth.type";

const BASE_URL = `${import.meta.env.VITE_BASEURL}/auth`;

export const postLogin = async ({ id, password }: postLoginProps) => {
    const resPostLogin = await axios.post(`${BASE_URL}/login`, {
        id,
        password,
    });

    return resPostLogin;
};

export const postSendEmail = async ({ email }: postSendEmailProps) => {
    const resPostSendEmail = await axios.post(`${BASE_URL}/send-mail`, {
        email,
    });

    return resPostSendEmail;
};

export const postVerify = async ({ email, code }: postVerifyProps) => {
    const resPostVerify = await axios.post(`${BASE_URL}/verify`, {
        email,
        code,
    });
    return resPostVerify;
};

export const postSignupStudent = async ({
    school,
    email,
    admissionYear,
    name,
    userID,
    password,
    githubID,
}: postSignupStudentProps) => {
    const resPostSignupStudent = await axios.post(
        `${BASE_URL}/signup/student`,
        { school, email, admissionYear, name, userID, password, githubID }
    );

    return resPostSignupStudent;
};
