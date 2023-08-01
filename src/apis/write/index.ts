import axios from "axios";
import { useEffect } from "react";

type Props = {
    setdata: React.Dispatch<React.SetStateAction<string>>;
    setTitle: React.Dispatch<React.SetStateAction<string>>;
    setBlogContent: React.Dispatch<React.SetStateAction<string>>;
};

const BASE_URL = `${import.meta.env.VITE_BASEURL}/articles`;

const WriteBoard = ({
    setdata,
    setTitle,
    setBlogContent
}:Props
) => {
    useEffect(() => {
        axios.get(`${BASE_URL}/id`)
            .then(function(response) {
                setdata(response.data);
                setTitle(response.data.title);
                setBlogContent(response.data.body);
                console.log("성공");
            })
            .catch(function(error) {
                console.log("실패");
            });
    }, []);
}
 
export default WriteBoard;