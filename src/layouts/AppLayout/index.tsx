import { Sidebar } from "@components/common/Sidebar";
import * as S from "./style";
import { ReactNode } from "react";

interface AppLayoutPropTypes {
  children: ReactNode;
  path?: string;
  title?: string;
  primaryBase?: boolean;
}

const AppLayout = ({ children, path, title, primaryBase }: AppLayoutPropTypes) => {
  return (
    <S.Container>
      <Sidebar />
      <S.Content>
        {title && <S.TitleContainer>
          <S.Path primaryBase={primaryBase}>{path}</S.Path>
          <S.Title>{title}</S.Title>
        </S.TitleContainer>}
        {children}
      </S.Content>
    </S.Container>
  );
};

export default AppLayout;
