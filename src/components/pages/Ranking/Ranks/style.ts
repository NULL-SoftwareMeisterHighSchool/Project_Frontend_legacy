import UserIcon from "@components/common/UserIcon";
import { color } from "@styles/theme.style";
import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 2.5fr 2fr 2fr 2.5fr 1fr 2fr;
    padding: 0px 12px;
    height: 70px;
    align-items: center;
    min-width: max-content;
    gap: 10px;
    > div {
        display: flex;
        align-items: center;
        gap: 20px;
        color: ${color.grayDark1};
        &:nth-child(2) {
            color: ${color.black};
        }
        &:last-child {
            display: flex;
            justify-content: end;
            color: ${color.black};
        }
    }

    @media screen and (max-width: 1350px) {
        grid-template-columns: 1fr 2.5fr 2fr 2fr 2.5fr 2fr;
        > div {
            &:nth-child(6) {
                display: none;
            }
        }
    }

    @media screen and (max-width: 1300px) {
        grid-template-columns: 1fr 2.5fr 2fr 2.5fr 2fr;
        > div {
            &:nth-child(3) {
                display: none;
            }
        }
    }

    @media screen and (max-width: 1200px) {
        grid-template-columns: 1fr 2.5fr 2fr 2fr;
        > div {
            &:nth-child(5) {
                display: none;
            }
        }
    }

    @media screen and (max-width: 1100px) {
        grid-template-columns: 1fr 2.5fr 2fr 2fr;
        > div {
            &:nth-child(4) {
                display: none;
            }
        }
    }

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 2.5fr 2fr;
        > div {
            &:nth-child(7) {
                display: none;
            }
        }
    }
`;

export const Rank = styled.div<{ rank: number }>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background-color: ${(props) =>
        props.rank === 1
            ? color.primaryDark1
            : props.rank === 2
            ? color.primaryBase
            : props.rank === 3
            ? color.primaryLight1
            : color.white};
    > p {
        color: ${(props) =>
            props.rank === 1 || props.rank === 2 || props.rank === 3
                ? color.white
                : color.black};
    }
`;
