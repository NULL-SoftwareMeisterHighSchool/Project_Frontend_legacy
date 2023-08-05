import { getCookie } from '@utils/cookies';
import axios, { AxiosError } from 'axios';

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

// 리프레시 수정중
// instance.interceptors.response.use(
//     (response) => response,
//     (error: AxiosError<AxiosError>) => {
//         if (axios.isAxiosError(error) && error.response) {
//             const { config } = error;
//             const refreshToken = localStorage.getItem("refresh");
//             if (
//                 error.response.data.message === "Expired Token" ||
//                 error.response.data.message === "Can Not Access"
//             ) {
//                 if (refreshToken) {
                    
//                 } else {
//                     window.location.href = "/login";
//                 }
//             } else return Promise.reject(error);
//         }
//     }
// );
