import { postLoginProps, postStudentSignupProps, postEmailProps } from './auth.type';
import axios from "axios";

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

/** 재학생 회원가입 */
export const postStudentSignup = async ({
    school,
    email,
    admissionYear,
    name,
    userid,
    password,
    githubId,
}: postStudentSignupProps) => {
    const outingStudentSignup = await axios.post(
        `${process.env.NEXT_PUBLIC_BASEURL}/user/signup/student`,
        {
            school,
            email,
            admissionYear,
            name,
            userid,
            password,
            githubId,
        }
    );
    return outingStudentSignup;
};

// /** 졸업생 회원가입 */
// export const postGraduatedSignup = async ({
//     school,
//     email,
//     admission_year,
//     name,
//     id,
//     password,
//     github,
//     image,
// }: postGraduatedSignnupProps) => {
//     const outingGraduatedSignup = await axios.post(
//         `${process.env.NEXT_PUBLIC_BASEURL}/user/signup/graduated`,
//         {
//             school,
//             email,
//             admission_year,
//             name,
//             id,
//             password,
//             github,
//             image,
//         }
//     );
//     return outingGraduatedSignup;
// };

/** 이메일 인증 */
export const postEmail = async ({ email }: postEmailProps) => {
    const outingEmail = await axios.post(
        `${process.env.NEXT_PUBLIC_BASEURL}/emailsend`,
        {
            email,
        }
    );

    return outingEmail;
};
