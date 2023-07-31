/** 로그인 prop */
export interface postLoginProps {
    id: string;
    password: string;
}

/** 학생 회원가입 prop */
export interface postStudentSignupProps {
    school: string;
    email: string;
    admissionYear: number;
    name: string;
    userid: string;
    password: string;
    githubId: string;
}

// /** 졸업생 회원가입 prop */
// export interface postGraduatedSignnupProps extends postStudentSignupProps {
//     image: string;
// }

/** 이메일 인증 prop */
export interface postEmailProps {
    email: string;
}

