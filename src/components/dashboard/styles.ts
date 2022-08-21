import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    gap: 32px;
    display: flex;
    flex-wrap: wrap;
`;

export const Title = styled.h1`
    margin-bottom: 40px;
    font-weight: 400;

    span {
        color: #32E0C4;
    }
`;

export const StatesContainer = styled.div`
    width: 300px;
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;
    border-radius: 16px;
    box-shadow: 0 7px 30px -10px rgba(150,170,180,0.5);

    span {
        color: #32E0C4;
    }
    
    h2 {
        font-weight: 300;
        text-align: center;
    }
`;