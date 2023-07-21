import axios from "axios";

interface postStudentSignupProps {
    school: string;
    email: string;
    admission_year: number;
    name: string;
    id: string;
    password: string;
    github: string;
}

interface postGraduatedSignnupProps extends postStudentSignupProps {
    image: string;
}


export const postStudentSignup = async ({
    school,
    email,
    admission_year,
    name,
    id,
    password,
    github,
}: postStudentSignupProps) => {
    const outingStudentSignup = await axios.post(
        `${process.env.NEXT_PUBLIC_BASEURL}/user/signup/student`,
        {
            school,
            email,
            admission_year,
            name,
            id,
            password,
            github,
        }
    );
    return outingStudentSignup;
};

export const postGraduatedSignup = async ({
    school,
    email,
    admission_year,
    name,
    id,
    password,
    github,
    image
}: postGraduatedSignnupProps) => {
    const outingGraduatedSignup = await axios.post(
        `${process.env.NEXT_PUBLIC_BASEURL}/user/signup/graduated`,
        {
            school,
            email,
            admission_year,
            name,
            id,
            password,
            github,
            image
        }
    );
    return outingGraduatedSignup;
};
