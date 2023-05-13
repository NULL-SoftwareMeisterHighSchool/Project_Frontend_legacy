import LoginIcon from "@assets/images/pages/LoginIcon.svg";
import LoginImg from "@assets/images/pages/LoginImg.jpg";
import * as S from "./style";

const LoginImage = () => {
	return (
		<S.LoginImage src={LoginImg}>
			<img src={LoginIcon} />
		</S.LoginImage>
	);
};

export default LoginImage;
