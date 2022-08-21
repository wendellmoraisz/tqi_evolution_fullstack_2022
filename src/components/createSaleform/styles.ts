import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;

    h1, h3 {
        font-weight: 300;
    }

    h2 {
        color: #32E0C4;
        font-weight: 400;
    }
`;

export const RadioInput = styled.input`
    display: none;
`;

export const HandleQuantityButton = styled.button`
    padding: 8px;
    cursor: pointer;
    background-color: transparent;
    border: none;
    font-size: 1rem;
`;

export const RemoveButton = styled.button`
    cursor: pointer;
    padding: 8px;
    border-radius: 5px;
    border: none;
    background-color: #C21010;
    color: #fff;
`;