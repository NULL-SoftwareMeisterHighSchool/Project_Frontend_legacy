import { ReactNode } from "react";
import * as S from "./style";

interface ModalProps {
    children?: ReactNode;
    val: boolean;
    setVal: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal = ({ children, val, setVal }: ModalProps) => {
    return (
        <>
            {val && (
                <S.BackGround onClick={() => setVal(!val)}>
                    <S.Container onClick={(e) => e.stopPropagation()}>
                        {children}
                    </S.Container>
                </S.BackGround>
            )}
        </>
    );
};

export default Modal;
