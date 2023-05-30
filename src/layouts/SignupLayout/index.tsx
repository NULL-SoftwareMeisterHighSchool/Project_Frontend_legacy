import { ReactNode } from "react";
import * as S from "./style";

import LoginIcon from "@assets/images/pages/LoginIcon.svg";
import LoginImg from "@assets/images/pages/LoginImg.jpg";

interface SignupLayoutTypes {
  children?: ReactNode;
};

const SignupLayout = ({ children }: SignupLayoutTypes) => {
  return (
    <S.Container>
      <S.LoginImage src={LoginImg}>
        <img src={LoginIcon} />
      </S.LoginImage>
      <S.LoginForm>
        {children}
      </S.LoginForm>
    </S.Container>
  )
}

export default SignupLayout;