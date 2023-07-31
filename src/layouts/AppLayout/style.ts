import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    display: flex;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 60px 200px;
    margin-left: 240px;
    gap: 40px;

    overflow-y: scroll;
`;
