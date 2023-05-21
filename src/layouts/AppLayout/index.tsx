import { Sidebar } from "@components/common/Sidebar";
import * as S from "./style";
import { ReactNode } from "react";

interface AppLayoutPropTypes {
  children: ReactNode;
}

const AppLayout = ({ children }: AppLayoutPropTypes) => {
  return (
    <S.Container>
      <Sidebar />
      <S.Content>{children}</S.Content>
    </S.Container>
  );
};

export default AppLayout;
