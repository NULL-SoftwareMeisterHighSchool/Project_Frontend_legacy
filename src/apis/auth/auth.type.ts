export type postLoginProps = {
    id: string;
    password: string;
}

export type postSendEmailProps = {
    email: string;
}

export type postVerifyProps = {
    email: string;
    code: string;
}

export type postSignupStudentProps = {
    school: string;
    email: string;
    admissionYear: number;
    name: string;
    userID: string;
    password: string;
    githubID: string;
}

export type AuthorizationResponse = {
    access: {
        expiresAt: Date;
        token: string;
    };
    refresh: {
        expiresAt: Date;
        token: string;
    };
}
