import { getCookie, setCookie } from "@utils/cookies";
import axios, { AxiosError } from "axios";
import { useMutation } from "react-query";
import { postRefresh } from "./auth";
import { getExpiredCookieHours } from "@utils/expires";

export const instance = axios.create({
    baseURL: `${import.meta.env.VITE_BASEURL}`,
    timeout: 10000,
});

instance.interceptors.request.use(
    (config) => {
        const accessToken = getCookie("accessToken");
        const returnConfig = {
            ...config,
        };
        if (accessToken) {
            //@ts-ignore
            returnConfig.headers = {
                Authorization: `Bearer ${accessToken}`,
            };
        }
        return returnConfig;
    },
    (error: AxiosError) => Promise.reject(error)
);

instance.interceptors.response.use(
    (response) => response,
    (error: AxiosError<AxiosError>) => {
        if (axios.isAxiosError(error) && error.response) {
            const {message } = error.response.data;
            const refreshToken = getCookie("refreshToken");

            if (message === "Expired Token" || message === "Can Not Access") {
                if (refreshToken) {
                    refreshMutate();
                } else {
                    window.location.href = "/login";
                }
            } else return Promise.reject(error);
        }
    }
);

const { mutate: refreshMutate } = useMutation(postRefresh, {
    onSuccess: (data) => {
        setCookie("accessToken", data.accessToken,{
            path:"/",
            expires:getExpiredCookieHours(data.expiresAt)
        })
    },
    onError: () => {},
});
