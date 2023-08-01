export interface postLoginProps {
    id: string;
    password: string;
}

export interface postSendEmailProps {
    email: string;
}

export interface postVerifyProps {
    email: string;
    code: string;
}

export interface postSignupStudentProps {
    school: string;
    email: string;
    admissionYear: number;
    name: string;
    userID: string;
    password: string;
    githubID: string;
}
