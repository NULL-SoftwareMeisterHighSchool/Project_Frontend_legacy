import { rest } from "msw";

export const handlers = [
    /**
     * 사용자 로그인
     * string : id, password
     */
    rest.post("/user/login", (req, res, ctx) => {
        return res(
            ctx.delay(500),
            ctx.status(201),
            ctx.json({
                expiredAt: "2023-07-11T16:04:52",
                accessToken: "accesstokenexample",
                refreshToken: "refreshtokenexample",
            })
        );
    }),

    /**
     * 재학생 회원가입
     * string : email, name, id, password, github
     * number : admission_year
     * enum : school(DSM, DGSM, GSM, BSM)
     */
    rest.post("user/signup/student", (req, res, ctx) => {
        return res(
            ctx.delay(500),
            ctx.status(201),
            ctx.json({
                message: "회원가입이 성공적으로 완료됨",
            })
        );
    }),

    /**
     * 졸업생 회원가입
     * string : email, name, id, password, github
     * number : admission_year
     * enum : school(DSM, DGSM, GSM, BSM)
     * file data : image
     */
    rest.post("user/signup/graduated", (req, res, ctx) => {
        return res(
            ctx.delay(500),
            ctx.status(201),
            ctx.json({
                message: "회원가입이 성공적으로 완료됨",
            })
        );
    }),
];
