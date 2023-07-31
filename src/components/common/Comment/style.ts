
import styled, { css, FlattenSimpleInterpolation } from "styled-components";

import { CommentStateType } from "./comment.type";
import { BodyStrong, Body2 } from "@styles/text.style";
import { color } from "@styles/theme.style";

export const Comment = styled.div<{ state : CommentStateType }>`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 20px;
    gap: 6px;

    height: 100px;

    background: #F3F3F3;
    border-radius: 8px;

    ${({ state }) => state && getCommentStyle[state]}
`;

const getCommentStyle: Record<CommentStateType, FlattenSimpleInterpolation> = {
    COMMENT: css`
        width: 640px;
    `,
    REPLY: css`
        width: 570px;
        margin-left: 70px;
    `,
}

export const CommentContents = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 10px;

    width: 600px;
    height: 40px;
`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 0px;
    gap: 6px;
`;

export const CommentName = styled(BodyStrong)`
    width: 69px;
    height: 17px;

    line-height: 17px;

    color: ${color.black};
`;

export const CommentContent = styled(Body2)`
    width: 550px;
    height: 17px;

    line-height: 17px;

    color: ${color.black};
`;